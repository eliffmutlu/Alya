import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Base yolunu göreli olarak ayarla
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
