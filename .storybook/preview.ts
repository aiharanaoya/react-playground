import type { Preview } from '@storybook/react';
import '@/styles/global.css';
import 'destyle.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
