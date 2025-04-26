import { Meta, StoryFn } from '@storybook/react';
import { MonthTotalizers, MonthTotalizersProps } from './MonthTotalizers';

export default {
  title: 'Components / TransactionForm',
  args: {
    title: 'Totalizadores',
    totalizers: [
      {
        label: 'Total de despesas',
        value: -1000,
      },
      {
        label: 'Total de receitas',
        value: 2000,
      },
      {
        label: 'Total de investimentos',
        value: 500,
      },
    ],
  },
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    }
  },
} as Meta<typeof MonthTotalizers>;

export const Default: StoryFn<MonthTotalizersProps> = (props) => {
  return (
    <div style={{ width: '300px' }}>
      <MonthTotalizers {...props} />
    </div>
  );
};
