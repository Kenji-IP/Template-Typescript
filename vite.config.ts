import { defineConfig } from "vite"

export default defineConfig({
   root: "./public",
   build: {
      outDir: "./dist/public",
      emptyOutDir: true,
   },
   server: {
      middlewareMode: true,
   },
});