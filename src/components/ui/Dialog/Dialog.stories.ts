import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '.';

export default {
	component: Dialog,
	args: {
		isOpen: true,
		title: 'Dialog Title',
		children: 'Dialog Content',
		onClose: () => {},
	},
} satisfies Meta<typeof Dialog>;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
	args: {},
};

export const Closed: Story = {
	args: {
		isOpen: false,
	},
};
