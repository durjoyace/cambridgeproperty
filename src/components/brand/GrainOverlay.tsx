/**
 * Subtle paper-grain overlay rendered once at the app root. Adds a barely-
 * perceptible noise layer (~3% opacity) so paper sections read as paper
 * rather than flat color. Pointer-events: none so it never interrupts.
 *
 * The SVG turbulence filter is inlined as a data URI so it requires no
 * network round-trip and gets cached as part of the CSS.
 */
export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.086 0 0 0 0 0.094 0 0 0 0 0.078 0 0 0 0.34 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundSize: "220px 220px",
        opacity: 0.07,
      }}
    />
  );
}
