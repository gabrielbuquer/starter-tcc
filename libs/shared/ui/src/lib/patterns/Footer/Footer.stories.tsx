import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Footer } from './Footer';


export default {
  title: 'Patterns / Footer',
  args: {},
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    }
  },
} as Meta<typeof Footer>;


export const Default: StoryFn = () => {
  return (
    <div style={{ width: '100%' }}>
      <Footer />
    </div>
  );
};
