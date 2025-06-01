export type TransactionCategoryType = {
  id: string;
  description: string;
};

export type TransactionType = {
  id: string;
  enabled: boolean;
  description: string;
  value: number;
  date: string;
  type: TransactionTypeEnum;
  category: TransactionCategoryType;
};

export enum TransactionTypeEnum {
  ALL = 'all',
  EXPENSE = 'expense',
  INCOME = 'income',
}

export type TransactionResumeType = {
  amount: number;
  totalIncome: number;
  totalExpense: number;
};
