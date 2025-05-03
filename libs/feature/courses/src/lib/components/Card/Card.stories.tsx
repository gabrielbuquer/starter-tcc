import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Components / Course / Card',
  args: {},
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    }
  },
} as Meta<typeof Card>;

export const Mobile: StoryFn = (props) => {
  return (
    <div style={{ width: '100%' }}>
      <Card {...props} />
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
    <div style={{ width: '560px' }}>
      <Card {...props} />
    </div>
  );
};
