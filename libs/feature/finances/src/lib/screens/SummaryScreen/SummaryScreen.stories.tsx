import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { SummaryScreen } from './SummaryScreen';


export default {
  title: 'Screens / SummaryScreen',
  args: {},
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    }
  },
} as Meta<typeof SummaryScreen>;

export const Mobile: StoryFn = (props) => {
  return (
    <div style={{ maxWidth: '400px', width: '100%' }}>
      <SummaryScreen {...props} />
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
      <SummaryScreen {...props} />
    </div>
  );
};
