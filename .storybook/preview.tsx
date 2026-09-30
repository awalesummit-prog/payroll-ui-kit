import type { Preview } from '@storybook/react-vite';
import '../src/index.css';
import { mswLoader } from 'msw-storybook-addon/csf3';
import { mswHandlers } from './msw-handlers';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  loaders: [mswLoader()],
  async beforeEach(context) {
    const { msw } = context as { msw?: { use: (...args: unknown[]) => void } };
    if (msw) {
      msw.use(...mswHandlers);
    }
  },
};

export default preview;