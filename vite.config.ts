import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import fs from 'fs';

const isLocal = !process.env.VERCEL;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    ...(isLocal && {
      https: {
        key: fs.readFileSync(path.resolve(__dirname, 'localhost+2-key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, 'localhost+2.pem')),
      },
    }),
    host: true,
    proxy: {
      '/api': {
        target: 'https://clip-trip.shop',
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
