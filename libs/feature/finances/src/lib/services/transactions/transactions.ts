import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { TransactionCategoryType, api, getPaths } from '@monetix/shared/config';

import {
  TransactionPostData,
  TransactionQueryParams,
  TransactionsDataResponse,
} from './types';

const API_PATHS = getPaths();

const USER_TRANSACTIONS_API = (userId: string) =>
  `${API_PATHS.USER_API}/${userId}${API_PATHS.FINANCES_API}`;

export const transactionsDataFetcher = (
  userId: string,
  params: TransactionQueryParams,
): Promise<TransactionsDataResponse> => {
  return api
    .get<TransactionsDataResponse>(USER_TRANSACTIONS_API(userId), { params })
    .then((res) => {
      return res.data;
    });
};

export const transactionDataPost = (data: TransactionPostData) => {
  return api.post(API_PATHS.FINANCES_API, data).then((res) => {
    return res.data;
  });
};

export const usePostTransaction = () =>
  useSWRMutation(
    [API_PATHS.FINANCES_API],
    (_key, { arg }: { arg: TransactionPostData }) => transactionDataPost(arg),
  );

export const useTransactionsData = (
  userId: string,
  params: TransactionQueryParams,
) => {
  return useSWR(
    [USER_TRANSACTIONS_API(userId), params],
    transactionsDataFetcher,
  );
};

export const transactionCategoriesFetcher = (
  type: 'expense' | 'income',
): Promise<TransactionCategoryType[]> => {
  console.log('Fetching transaction categories for type:', type);
  return api
    .get<
      TransactionCategoryType[]
    >(`${API_PATHS.FINANCES_API}/${type}/categories`)
    .then((res) => {
      return res.data;
    });
};

export const useTransactionCategories = (type: 'expense' | 'income') => {
  return useSWR([`${API_PATHS.FINANCES_API}/${type}/categories`], () =>
    transactionCategoriesFetcher(type),
  );
};
