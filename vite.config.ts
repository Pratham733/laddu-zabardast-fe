import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),

      'next/navigation': path.resolve(__dirname, 'src/shims/next/navigation.ts'),
      'next/image': path.resolve(__dirname, 'src/shims/next/image.tsx'),
      'next/server': path.resolve(__dirname, 'src/shims/next/server.ts'),
    },
  },
  optimizeDeps: {
    include: ['react-router-dom'],
  },
  server: { open: true },
  build: { outDir: 'dist' },
});

