import path from "path";
import dns from "node:dns";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

dns.setDefaultResultOrder("verbatim");

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss({
      config: "./tailwind.config.js",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  server: {
    port: 5000,
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: true,
    hmr: false,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
