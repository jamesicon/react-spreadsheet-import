import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@jamesicon/react-spreadsheet-importer/styles.css": path.resolve(__dirname, "../src/styles.css"),
      "@jamesicon/react-spreadsheet-importer": path.resolve(__dirname, "../src/index.ts"),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
