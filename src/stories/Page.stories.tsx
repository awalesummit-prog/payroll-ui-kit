import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Page } from './Page';

const meta = {
  component: Page,
  tags: ['ai-generated'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
  play: async ({ canvas, userEvent }) => {
    const loginButton = canvas.getByRole('button', { name: /log in/i });
    await userEvent.click(loginButton);
    await expect(canvas.getByRole('button', { name: /log out/i })).toBeVisible();
  },
};
