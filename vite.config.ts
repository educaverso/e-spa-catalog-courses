import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [vue(), vueJsx(), Pages({ dirs: "./src/presentation/pages" })],
  // base: "/e-spa-catalog-courses",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
