import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
      react(),
      tailwindcss()
  ],
  base: '/qqq-tqqq-comparison/', // 깃허브 저장소 이름으로 설정!
});
