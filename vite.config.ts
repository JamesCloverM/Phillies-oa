import { defineConfig } from "vite";

export default defineConfig({
  server: {
    // had to create a proxy to handle CORS conflicts, otherwise the data would not display
    proxy: {
      "/api": {
        target: "https://questionnaire-148920.appspot.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});