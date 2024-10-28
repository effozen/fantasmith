import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // 전역으로 Jest 스타일의 테스트 함수를 사용하도록 설정
    environment: 'jsdom', // 브라우저 환경을 시뮬레이션하도록 설정
    setupFiles: './src/setupTests.ts', // 테스트 전 실행할 파일
    coverage: {
      provider: 'istanbul', // 코드 커버리지 도구
      reporter: ['text', 'json', 'html'], // 커버리지 리포트 형식
    },
  },
});
