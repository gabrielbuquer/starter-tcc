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
  type: 'expense' | 'income';
  category: TransactionCategoryType;
};

export type TransactionResumeType = {
  amount: number;
  'amount-expense': number;
  'amount-income': number;
};
