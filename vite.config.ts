/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		environment: 'happy-dom',
		setupFiles: './src/testing/setupTestingLibrary.ts',
		coverage: {
			enabled: true,
			include: ['src/components/**/*.{ts,tsx}'],
			exclude: ['src/**/*.stories.{ts,tsx}', 'src/**/*.test.{ts,tsx}'],
		},
	},
});
