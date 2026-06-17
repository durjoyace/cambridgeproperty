/**
 * Site-wide constants.
 */

/**
 * AppFolio tenant/resident portal sign-in URL.
 *
 * MIGRATION: still pointing at the pre-rebrand `barrettjohnson` subdomain.
 * Once AppFolio provisions the Thane & Reeve portal subdomain
 * (format: yourcompany.appfolio.com), update this single value — it is the
 * only place the URL lives. Referenced from Navbar (desktop + mobile) and
 * Footer "Resident Portal" links.
 */
export const RESIDENT_PORTAL_URL =
  "https://barrettjohnson.appfolio.com/connect/users/sign_in";
