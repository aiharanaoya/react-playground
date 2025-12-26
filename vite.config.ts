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
					name: 'unit',
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
					name: 'storybook',
					browser: {
						enabled: true,
						provider: playwright({
							connectOptions: {
								wsEndpoint: 'ws://127.0.0.1:49695',
								exposeNetwork: '<loopback>',
							},
						}),
						headless: true,
						instances: [{ browser: 'chromium' }],
					},
					setupFiles: ['./.storybook/vitest.setup.ts'],
				},
			},
		],
	},
});
