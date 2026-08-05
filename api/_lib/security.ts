import type { VercelRequest, VercelResponse } from "@vercel/node";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimits = new Map<string, RateLimitEntry>();

function getClientIp(req: VercelRequest) {
  const forwarded = req.headers["x-forwarded-for"];
  const value = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  return value?.split(",")[0]?.trim() || req.socket.remoteAddress || "unknown";
}

function hasAllowedOrigin(req: VercelRequest) {
  const origin = req.headers.origin;
  if (!origin) return true;

  try {
    const originHost = new URL(origin).host;
    const requestHost = req.headers["x-forwarded-host"] || req.headers.host;
    const host = Array.isArray(requestHost) ? requestHost[0] : requestHost;
    return Boolean(host) && originHost === host;
  } catch {
    return false;
  }
}

function exceedsRateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();

  // Keep the best-effort in-memory limiter bounded on warm serverless instances.
  if (rateLimits.size > 10_000) {
    for (const [entryKey, entry] of rateLimits) {
      if (entry.resetAt <= now) rateLimits.delete(entryKey);
    }
  }

  const existing = rateLimits.get(key);

  if (!existing || existing.resetAt <= now) {
    rateLimits.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  existing.count += 1;
  return existing.count > limit;
}

export function guardPublicPost(
  req: VercelRequest,
  res: VercelResponse,
  options: { route: string; limit?: number; windowMs?: number },
) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return false;
  }

  if (!req.headers["content-type"]?.toLowerCase().includes("application/json")) {
    res.status(415).json({ error: "Content-Type must be application/json" });
    return false;
  }

  if (!hasAllowedOrigin(req)) {
    res.status(403).json({ error: "Origin not allowed" });
    return false;
  }

  const limit = options.limit ?? 5;
  const windowMs = options.windowMs ?? 10 * 60 * 1000;
  const key = `${options.route}:${getClientIp(req)}`;

  if (exceedsRateLimit(key, limit, windowMs)) {
    res.setHeader("Retry-After", String(Math.ceil(windowMs / 1000)));
    res.status(429).json({ error: "Too many requests. Please try again later." });
    return false;
  }

  return true;
}

export function escapeHtml(value: unknown) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character]!,
  );
}

export function requireEnv(name: "NEON_DATABASE_URL" | "RESEND_API_KEY") {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}
