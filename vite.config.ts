import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

// Eksportuj konfigurację Vite
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer, // Dodaje prefiksy CSS
        cssnano({ preset: "default" }), // Minimalizuje CSS
      ],
    },
  },
});
