import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-spreadsheet-import/styles.css": path.resolve(__dirname, "../src/styles.css"),
      "react-spreadsheet-import": path.resolve(__dirname, "../src/index.ts"),
    },
    dedupe: ["react", "react-dom"],
  },
  server: {
    port: 5173,
    open: true,
  },
});
