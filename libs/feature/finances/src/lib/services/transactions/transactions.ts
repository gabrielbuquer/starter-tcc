import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import {
  TransactionCategoryType,
  TransactionTypeEnum,
  api,
  getPaths,
} from '@monetix/shared/config';

import {
  TransactionDeleteData,
  TransactionPostData,
  TransactionPutData,
  TransactionQueryParams,
  TransactionsDataResponse,
} from './types';

const API_PATHS = getPaths();

export const transactionsDataFetcher = (
  params: TransactionQueryParams,
): Promise<TransactionsDataResponse> => {
  return api
    .get<TransactionsDataResponse>(API_PATHS.FINANCES_API, {
      params: {
        ...params,
        type: params.type === TransactionTypeEnum.ALL ? undefined : params.type,
      },
    })
    .then((res) => {
      return res.data;
    });
};

export const useTransactionsData = (params: TransactionQueryParams) => {
  return useSWR(
    [
      API_PATHS.FINANCES_API,
      params.type,
      params.page,
      params.limit,
      params['start-date'],
      params['end-date'],
    ],
    () => transactionsDataFetcher(params),
  );
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

export const transactionDataPut = (data: TransactionPutData) => {
  return api.put(`${API_PATHS.FINANCES_API}/${data.id}`, data).then((res) => {
    return res.data;
  });
};

export const usePutTransaction = () =>
  useSWRMutation(
    [API_PATHS.FINANCES_API],
    (_key, { arg }: { arg: TransactionPutData }) => transactionDataPut(arg),
  );

export const transactionDataDelete = (data: TransactionDeleteData) => {
  return api.del(`${API_PATHS.FINANCES_API}/${data.id}`).then((res) => {
    return res.data;
  });
};

export const useDeleteTransaction = () =>
  useSWRMutation(
    [API_PATHS.FINANCES_API, 'delete'],
    (_key, { arg }: { arg: TransactionDeleteData }) =>
      transactionDataDelete(arg),
  );

export const transactionCategoriesFetcher = (
  type: TransactionTypeEnum,
): Promise<TransactionCategoryType[]> => {
  return api
    .get<
      TransactionCategoryType[]
    >(`${API_PATHS.FINANCES_API}/${type}/categories`)
    .then((res) => {
      return res.data;
    });
};

export const useTransactionCategories = (type: TransactionTypeEnum) => {
  return useSWR(
    [`${API_PATHS.FINANCES_API}/${type}/categories`],
    () => transactionCategoriesFetcher(type),
    {
      revalidateIfStale: false,
    },
  );
};
