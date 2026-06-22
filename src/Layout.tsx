import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Analytics from "@/components/Analytics";
import PageLayout from "@/components/layout/PageLayout";

const queryClient = new QueryClient();

/**
 * Root layout route. Holds the app-wide providers and chrome (nav, footer,
 * grain, analytics) and renders the matched page via <Outlet />. The router
 * and document-head context are provided by vite-react-ssg.
 */
export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Analytics />
        <PageLayout>
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Outlet />
          </Suspense>
        </PageLayout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
