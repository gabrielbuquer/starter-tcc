import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Video, VideoProps } from './Video';

export default {
  title: 'Components / Video',
  args: {
    title: 'Video',
    width: '100%',
    height: '100%',
    src: '',
    isAutoplay: false,
    hasController: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Video>;

export const Mobile: StoryFn<VideoProps> = (args) => {
  return (
    <div style={{ position: 'absolute', display: 'contents' }}>
      <Video {...args} />
    </div>
  );
};

export const Desktop: StoryFn<VideoProps> = (args) => {
  return (
    <div style={{ display: 'contents' }}>
      <Video {...args} />
    </div>
  );
};

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile',
  },
};

Desktop.parameters = {
  viewport: {
    defaultViewport: 'responsive',
  },
};
