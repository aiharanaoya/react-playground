import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

export default {
	component: Button,
	args: {
		text: 'Button',
	},
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};
