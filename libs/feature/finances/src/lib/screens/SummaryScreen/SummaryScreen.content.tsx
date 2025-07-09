import { stringToDate } from '@monetix/core-utils';
import { TransactionTypeEnum } from '@monetix/shared/config';

import {
  OverviewBalances,
  OverviewTotals,
  TransactionValue,
} from '../../services/overview/types';

export const mapperTransactionsValue = (transactions: TransactionValue[]) => {
  return transactions?.map(({ category, value }) => ({
    label: category.description,
    value,
  }));
};

export const mapperBalances = (balances: OverviewBalances[]) =>
  balances?.reduce(
    (acc, { value, month }) => {
      acc.series.push(value);
      acc.dates.push(stringToDate(month));
      return acc;
    },
    { series: [] as number[], dates: [] as Date[] },
  );

export const mapperTotals = (totals: OverviewTotals[]) => {
  const map = totals?.reduce<
    Record<string, { income: number; expense: number }>
  >((acc, { month, type, value }) => {
    if (!acc[month]) {
      acc[month] = { income: 0, expense: 0 };
    }

    if (type === TransactionTypeEnum.INCOME) {
      acc[month].income += value;
    } else if (type === TransactionTypeEnum.EXPENSE) {
      acc[month].expense += value;
    }

    return acc;
  }, {});

  const months = Object.keys(map).sort();
  const dates = months.map((month) => stringToDate(month));
  const incomes = months.map((month) => map[month].income);
  const expenses = months.map((month) => map[month].expense);

  return { dates, incomes, expenses };
};
