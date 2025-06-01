export default interface OverviewDTO {
  amount: number;
  amountMonth: number;
  expenseMonth: number;
  incomeMonth: number;
  incomes: {
    category: {
      id: string;
      description: string;
      type: 'income';
    };
    value: number;
  }[];
  expenses: {
    category: {
      id: string;
      description: string;
      type: 'expense';
    };
    value: number;
  }[];
}
