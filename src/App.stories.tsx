import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import App from './App';

const meta = {
  component: App,
  tags: ['ai-generated'],
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    const counterButton = canvas.getByRole('button', { name: /count is 0/i });
    await expect(counterButton).toBeVisible();
    await userEvent.click(counterButton);
    await expect(canvas.getByRole('button', { name: /count is 1/i })).toBeVisible();
  },
};
