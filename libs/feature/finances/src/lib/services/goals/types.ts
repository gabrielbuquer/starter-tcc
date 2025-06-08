import {
  GoalsResumeType,
  GoalsType,
  PaginationType,
  TransactionTypeEnum,
} from '@monetix/shared/config';

export type GoalsQueryParams = {
  type?: TransactionTypeEnum;
  'start-date'?: string;
  'end-date'?: string;
  page: number;
  limit: number;
};

export type GoalsPostData = {
  value: number;
  categoryId: string;
};

export type GoalsDeleteData = GoalsType;

export type GoalsDataResponse = {
  items: GoalsType[];
  resume: GoalsResumeType;
  meta: PaginationType;
};
