import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Header, HeaderPropsType } from './Header';


export default {
  title: 'Patterns / Header',
  args: {},
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    }
  },
} as Meta<typeof Header>;

export const Mobile: StoryFn<HeaderPropsType> = (props) => {
  return (
    <div style={{ width: '100%' }}>
      <div> tetes </div>
    </div>
  );
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile',
  },
};

export const Desktop: StoryFn<HeaderPropsType> = (props) => {
  return (
    <div style={{ width: '100%' }}>
      <Header {...props} />
    </div>
  );
};
