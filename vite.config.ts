import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/website-peling/',  // Ganti dengan nama repo GitHub kamu
  plugins: [react()],
});
