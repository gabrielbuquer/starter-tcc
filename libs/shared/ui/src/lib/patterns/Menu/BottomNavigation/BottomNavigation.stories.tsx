import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { BottomNavigation } from './BottomNavigation';

export default {
  title: 'Patterns / BottomNavigation',
  args: {},
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta<typeof BottomNavigation>;

export const Mobile: StoryFn = (props) => {
  return (
    <div style={{ width: '100%' }}>
      <BottomNavigation {...props} />
    </div>
  );
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile',
  },
};
