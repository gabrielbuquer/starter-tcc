import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ExpenseForm } from './ExpenseForm';

import { Savings } from '@mui/icons-material';

export default {
  title: 'Components / ExpenseForm',
  args: {
    open: true,
  },
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    }
  },
} as Meta<typeof ExpenseForm>;

export const Default: StoryFn<ExpenseFormProps> = (props) => {
  return (
    <div style={{ width: '100%' }}>
      <ExpenseForm {...props} />
    </div>
  );
};
