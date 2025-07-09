import { Meta, StoryFn } from '@storybook/react';

import { GoalsScreen } from './GoalsScreen';

export default {
  title: 'Screens / GoalsScreen',
  args: {},
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta<typeof GoalsScreen>;

export const Mobile: StoryFn = (props) => {
  return (
    <div style={{ maxWidth: '400px', width: '100%' }}>
      <GoalsScreen {...props} />
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
      <GoalsScreen {...props} />
    </div>
  );
};
