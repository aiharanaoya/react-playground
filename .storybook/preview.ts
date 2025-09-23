import type { Preview } from '@storybook/react-vite';
import { withScreenshot } from 'storycap';
import '@/styles/global.css';
import 'destyle.css';

export const decorators = [withScreenshot];

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		screenshot: {
			fullPage: false,
			viewports: {
				desktop: { width: 1920, height: 1080 },
				mobile: { width: 360, height: 800, isMobile: true, hasTouch: true },
			},
		},
	},
	tags: ['autodocs'],
};

export default preview;
