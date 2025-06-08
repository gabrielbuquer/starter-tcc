export type MainGridResume = {
  amount?: number;
  amountMonth?: number;
  totalIncome?: number;
  totalExpense?: number;
};

export type MainGridProps = {
  resume?: MainGridResume;
  reportOption?: boolean;
};
