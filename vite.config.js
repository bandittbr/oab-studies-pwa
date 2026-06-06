import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  build: {
    emptyOutDir: false
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "icon-192.svg", "icon-512.svg", "maskable-icon.svg"],
      manifest: {
        name: "LexFlow OAB",
        short_name: "LexFlow",
        description: "PWA de estudos para OAB com questoes, revisao, explicacoes e fundamentos legais offline.",
        theme_color: "#09111f",
        background_color: "#09111f",
        display: "standalone",
        start_url: "/",
        scope: "/",
        orientation: "portrait-primary",
        lang: "pt-BR",
        icons: [
          { src: "/icon-192.svg", sizes: "192x192", type: "image/svg+xml" },
          { src: "/icon-512.svg", sizes: "512x512", type: "image/svg+xml" },
          { src: "/maskable-icon.svg", sizes: "512x512", type: "image/svg+xml", purpose: "maskable" }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,webmanifest}"]
      }
    })
  ]
});
