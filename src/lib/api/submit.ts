import type { PropertySubmission } from "@/lib/validation/property-submission";

export async function submitProperty(data: PropertySubmission) {
  const res = await fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || "Submission failed");
  }

  return res.json();
}
