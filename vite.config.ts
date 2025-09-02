import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

const testFiles = ['./src/**/*.test.ts', './src/**/*.test.tsx'];

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // try happy-dom
    setupFiles: ['./setupTests.ts'],
    globalSetup: ['./setupTestsGlobal.ts'],
    include: testFiles,
  },
  plugins: [react(), dts({ exclude: testFiles }), tsconfigPaths()],
});
