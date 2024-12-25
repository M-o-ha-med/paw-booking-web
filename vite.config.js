import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "BOBO",
        short_name: "BOBO-Booking",
        description: "BOBO booking hotel kini hadir untuk Anda.",
        theme_color: "#007bff",
        background_color: "#f0f8ff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/assets/bobo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/bobo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  server: {
    port: 5173,
  },
});
