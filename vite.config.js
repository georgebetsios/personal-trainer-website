import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/personal-trainer-website/',
  build: {
    outDir: 'docs' 
  },
  plugins: [react()],
});