import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Served from https://genesisazor.github.io/responsive-joy-zone/
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
