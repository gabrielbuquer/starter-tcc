import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { SignIn } from './SignIn';


export default {
  title: 'Patterns / Login / SignIn',
  args: {},
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    }
  },
} as Meta<typeof SignIn>;

export const Mobile: StoryFn = (props) => {
  return (
    <div style={{ maxWidth: '400px', width: '100%' }}>
      <SignIn {...props} />
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
      <SignIn {...props} />
    </div>
  );
};
