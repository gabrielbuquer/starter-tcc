import { Meta, StoryFn } from '@storybook/react';

import { TransactionScreen } from './TransactionScreen';

export default {
  title: 'Screens / TransactionScreen',
  args: {},
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta<typeof TransactionScreen>;

export const Mobile: StoryFn = (props) => {
  return (
    <div style={{ maxWidth: '400px', width: '100%' }}>
      <TransactionScreen {...props} />
    </div>
  );
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile',
  },
};

export const Desktop: StoryFn = (props) => {
  return (
    <div style={{ width: '400px' }}>
      <TransactionScreen {...props} />
    </div>
  );
};
