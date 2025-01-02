import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Summary, SummaryProps } from './Summary';

import { Savings } from '@mui/icons-material';

export default {
  title: 'Components / Summary',
  args: {
    title: 'Meu balanço',
    content: 'R$ 0,10',
    icon: <Savings />
  },
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    }
  },
} as Meta<typeof Summary>;

export const Default: StoryFn<SummaryProps> = (props) => {
  return (
    <div style={{ width: '300px' }}>
      <Summary {...props} />
    </div>
  );
};
