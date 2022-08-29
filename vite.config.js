import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components/index.js"),
      "@hooks": path.resolve(__dirname, "./src/hooks/index.js"),
      "@pages": path.resolve(__dirname, "./src/pages/index.js"),
      "@assets/img": path.resolve(__dirname, "./src/assets/img/index.js"),
      "@assets/icons": path.resolve(__dirname, "./src/assets/icons/index.js"),
      "@assets/css/*": path.resolve(__dirname, "./src/assets/css/*"),
      "@service": path.resolve(__dirname, "./src/service/index.js"),
      "@utils": path.resolve(__dirname, "./src/utils/index.js"),
      "@router": path.resolve(__dirname, "./src/router/index.js"),
      "@contexts": path.resolve(__dirname, "./src/contexts/index.js"),
    },
  },
  plugins: [react(), eslint()],
});
