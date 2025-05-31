import {
  PaginationType,
  TransactionResumeType,
  TransactionType,
} from '@monetix/shared/config';

export type TransactionQueryParams = {
  id: string;
  'start-date': string;
  'end-date': string;
  type: 'expense' | 'income';
};

export type TransactionPostData = Omit<
  TransactionType,
  'id' | 'category' | 'enabled'
> & {
  categoryId: string;
};

export type TransactionsDataResponse = {
  data: TransactionType[];
  resume: TransactionResumeType;
  pagination: PaginationType;
};
