import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'public',  // Set the root directory to public
  build: {
    outDir: '../dist',  // Output directory relative to public
    rollupOptions: {
      input: 'src/main.js',  // Update the entry point to the correct file path
    },
  },
});

