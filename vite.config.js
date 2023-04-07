import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from "vite-plugin-pwa";
import manifestConfig from "./manifest.config";

const vitePWA = VitePWA({
  registerType: "autoUpdate",
  outDir: "build",
  manifest: manifestConfig
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      vitePWA
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: './src/main.js',
    },
  },
})
