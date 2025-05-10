import { Meta, StoryFn } from '@storybook/react';
import { TransactionForm, TransactionFormProps } from './CourseForm';

export default {
  title: 'Components / TransactionForm',
  args: {
    open: true,
    formType: 'expense',
  },
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    }
  },
} as Meta<typeof TransactionForm>;

export const Expense: StoryFn<TransactionFormProps> = (props) => {
  return (
    <div style={{ width: '100%' }}>
      <TransactionForm {...props} />
    </div>
  );
};

export const Income: StoryFn<TransactionFormProps> = (props) => {
  return (
    <div style={{ width: '100%' }}>
      <TransactionForm {...props} formType='income' />
    </div>
  );
};
