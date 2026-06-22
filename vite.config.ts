import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    imagetools(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // vite-react-ssg: strip the auto-injected image preloads. They target
  // below-the-fold lazy images and carry a credentials-mode mismatch that
  // causes a wasteful double-fetch; the LCP hero is preloaded via its own
  // <picture> + fetchpriority="high".
  ssgOptions: {
    onPageRendered: (_route: string, html: string) =>
      html.replace(/<link\b[^>]*\bas="?image"?[^>]*>/gi, ""),
  },
  build: {
    rollupOptions: {
      // manualChunks only applies to the client build; the SSR build
      // externalizes react et al., which cannot live in a manual chunk.
      output: isSsrBuild
        ? {}
        : {
            manualChunks: {
              "vendor-react": ["react", "react-dom", "react-router-dom"],
              "vendor-ui": ["react-helmet-async", "@radix-ui/react-accordion", "@radix-ui/react-toast", "@radix-ui/react-tooltip"],
              "vendor-gsap": ["gsap", "gsap/ScrollTrigger"],
            },
          },
    },
  },
}));
