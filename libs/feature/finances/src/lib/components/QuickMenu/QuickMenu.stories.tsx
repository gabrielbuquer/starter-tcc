import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { QuickMenu } from './QuickMenu';

export default {
  title: 'Components / QuickMenu',
  args: {},
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta<typeof QuickMenu>;

export const Desktop: StoryFn = (props) => {
  return (
    <div style={{ width: '100%' }}>
      <QuickMenu {...props} />
    </div>
  );
};
