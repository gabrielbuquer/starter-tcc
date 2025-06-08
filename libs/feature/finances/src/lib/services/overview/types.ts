import {
  TransactionCategoryType,
  TransactionTypeEnum,
} from '@monetix/shared/config';

export type OverviewQueryParams = {
  type?: TransactionTypeEnum;
};

export type TransactionValue = {
  category: TransactionCategoryType;
  value: number;
};

export type OverviewDataResponse = {
  amount: number;
  amountMonth: number;
  incomeMonth: number;
  expenseMonth: number;
  incomes: TransactionValue[];
  expenses: TransactionValue[];
  totals: OverviewTotals[];
  balances: OverviewBalances[];
};

export type OverviewTotals = {
  month: string;
  value: number;
  type: TransactionTypeEnum;
};

export type OverviewBalances = {
  month: string;
  value: number;
};
