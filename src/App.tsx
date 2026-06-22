import { lazy } from "react";
import { Navigate } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import Index from "./pages/Index";

// Slugs are stable; hardcoded so the data modules (and their image imports)
// stay out of the entry chunk. Keep in sync with src/lib/data/* and sitemap.xml.
const INSIGHT_SLUGS = [
  "what-makes-good-value-add-multifamily-deal-greater-boston",
  "owner-operated-vs-third-party-management",
  "cambridge-rental-market-2026",
];
const PORTFOLIO_SLUGS = ["907-main-hotel", "17-story-street"];

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/Layout.tsx",
    children: [
      { index: true, Component: Index },
      { path: "capital", Component: lazy(() => import("./pages/Capital")) },
      { path: "development", Component: lazy(() => import("./pages/Development")) },
      { path: "management", Component: lazy(() => import("./pages/Management")) },
      { path: "case-studies", Component: lazy(() => import("./pages/CaseStudies")) },
      { path: "sell-your-property", Component: lazy(() => import("./pages/SellYourProperty")) },
      { path: "partners", Component: lazy(() => import("./pages/Partners")) },
      { path: "about", Component: lazy(() => import("./pages/About")) },
      { path: "contact", Component: lazy(() => import("./pages/Contact")) },
      { path: "insights", Component: lazy(() => import("./pages/Insights")) },
      {
        path: "insights/:slug",
        Component: lazy(() => import("./pages/InsightPost")),
        getStaticPaths: () => INSIGHT_SLUGS.map((s) => `insights/${s}`),
      },
      { path: "portfolio", Component: lazy(() => import("./pages/Portfolio")) },
      {
        path: "portfolio/:slug",
        Component: lazy(() => import("./pages/PropertyDetail")),
        getStaticPaths: () => PORTFOLIO_SLUGS.map((s) => `portfolio/${s}`),
      },
      { path: "press", Component: lazy(() => import("./pages/Press")) },
      { path: "privacy", Component: lazy(() => import("./pages/Privacy")) },
      { path: "sell", element: <Navigate to="/sell-your-property" replace /> },
      { path: "acquisitions", element: <Navigate to="/capital" replace /> },
      // Prerendered to dist/404.html; Vercel serves it as the not-found fallback.
      { path: "404", Component: lazy(() => import("./pages/NotFound")) },
      { path: "*", Component: lazy(() => import("./pages/NotFound")) },
    ],
  },
];
