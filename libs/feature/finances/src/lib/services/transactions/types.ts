import {
  PaginationType,
  TransactionResumeType,
  TransactionType,
  TransactionTypeEnum,
} from '@monetix/shared/config';

export type TransactionQueryParams = {
  type?: TransactionTypeEnum;
  'start-date'?: string;
  'end-date'?: string;
  page: number;
  limit: number;
};

export type TransactionPostData = Omit<
  TransactionType,
  'id' | 'category' | 'enabled'
> & {
  categoryId: string;
};

export type TransactionDeleteData = TransactionType;

export type TransactionPutData = Omit<
  TransactionType,
  'category' | 'enabled'
> & {
  categoryId: string;
};

export type TransactionsDataResponse = {
  items: TransactionType[];
  resume: TransactionResumeType;
  meta: PaginationType;
};
