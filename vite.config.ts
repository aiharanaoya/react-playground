/// <reference types="vitest/config" />
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import react from '@vitejs/plugin-react-swc';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		projects: [
			{
				extends: true,
				test: {
					name: 'unit test',
					environment: 'happy-dom',
					setupFiles: './src/testing/setupTestingLibrary.ts',
				},
			},
			{
				extends: true,
				plugins: [
					storybookTest({
						configDir: path.join(
							path.dirname(fileURLToPath(import.meta.url)),
							'.storybook',
						),
						storybookScript: 'pnpm storybook --no-open',
					}),
				],
				test: {
					name: 'storybook test',
					browser: {
						enabled: true,
						provider: playwright({}),
						headless: true,
						instances: [{ browser: 'chromium' }],
					},
					setupFiles: ['./.storybook/vitest.setup.ts'],
				},
			},
		],
	},
});
