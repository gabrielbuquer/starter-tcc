import { TransactionValue } from '../../services/overview/types';

export const mapperTransactionsValue = (transactions: TransactionValue[]) => {
  return transactions.map(({ category, value }) => ({
    label: category.description,
    value,
  }));
};
