/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // React 및 TypeScript 파일을 포함
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',   // 작은 화면 (모바일)
        'md': '768px',   // 중간 크기 (태블릿)
        'lg': '1024px',  // 큰 화면 (데스크탑)
        'xl': '1280px',  // 더 큰 화면
        '2xl': '1536px', // 매우 큰 화면
      },
    },
  },
  plugins: [],
}
