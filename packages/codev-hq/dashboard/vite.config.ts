import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4301, // Dev server port (HQ backend on 4300)
    proxy: {
      '/api': 'http://localhost:4300',
      '/ws': {
        target: 'ws://localhost:4300',
        ws: true,
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});
