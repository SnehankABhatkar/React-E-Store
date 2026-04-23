import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "../API/wwwroot",
    chunkSizeWarningLimit: 1200,
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react(), mkcert(), babel({ presets: [reactCompilerPreset()] })],
});
