import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Management = lazy(() => import("./pages/Management"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const SellYourProperty = lazy(() => import("./pages/SellYourProperty"));
const Partners = lazy(() => import("./pages/Partners"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageLayout>
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/management" element={<Management />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/sell-your-property" element={<SellYourProperty />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </PageLayout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
