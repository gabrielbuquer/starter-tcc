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
  EXPENSE = 'expense',
  INCOME = 'income',
}

export type TransactionResumeType = {
  amount: number;
  'amount-expense': number;
  'amount-income': number;
};
