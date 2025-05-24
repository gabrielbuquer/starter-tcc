import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { api, getPaths } from '@monetix/shared/config';

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

export const transactionDataPost = (
  userId: string,
  data: TransactionPostData,
) => {
  return api.post(USER_TRANSACTIONS_API(userId), data).then((res) => {
    return res.data;
  });
};

export const usePostTransaction = (userId: string) =>
  useSWRMutation(
    [USER_TRANSACTIONS_API(userId)],
    (_key, { arg }: { arg: TransactionPostData }) =>
      transactionDataPost(userId, arg),
  );

export const useGetTransactionsData = (
  userId: string,
  params: TransactionQueryParams,
) => {
  return useSWR(
    [USER_TRANSACTIONS_API(userId), params],
    transactionsDataFetcher,
  );
};
