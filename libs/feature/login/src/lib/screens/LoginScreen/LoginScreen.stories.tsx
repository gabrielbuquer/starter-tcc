import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { LoginScreen } from './LoginScreen';


export default {
  title: 'Screens / LoginScreen',
  args: {},
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    }
  },
} as Meta<typeof LoginScreen>;

export const Mobile: StoryFn = (props) => {
  return (
    <div style={{ maxWidth: '400px', width: '100%' }}>
      <LoginScreen {...props} />
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
      <LoginScreen {...props} />
    </div>
  );
};
