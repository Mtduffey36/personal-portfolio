import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure this points to the root directory where index.html is located
  build: {
    rollupOptions: {
      input: 'index.html', // Ensure this points to the correct entry file
    },
  },
});

