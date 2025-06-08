import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import {
  TransactionCategoryType,
  TransactionTypeEnum,
  api,
  getPaths,
} from '@monetix/shared/config';

import {
  GoalsDataResponse,
  GoalsDeleteData,
  GoalsPostData,
  GoalsQueryParams,
} from './types';

const API_PATHS = getPaths();

const goalsApiPath = `${API_PATHS.FINANCES_API}${API_PATHS.GOALS_API}`;

export const goalsDataFetcher = (
  params: GoalsQueryParams,
): Promise<GoalsDataResponse> => {
  return api
    .get<GoalsDataResponse>(`${goalsApiPath}/${params.type}`, {
      params: {
        ...params,
      },
    })
    .then((res) => {
      return res.data;
    });
};

export const useGoalsData = (params: GoalsQueryParams) => {
  return useSWR(
    [
      API_PATHS.FINANCES_API,
      params.type,
      params.page,
      params.limit,
      params['start-date'],
      params['end-date'],
    ],
    () => goalsDataFetcher(params),
  );
};

// export const transactionDataPost = (data: TransactionPostData) => {
//   return api.post(API_PATHS.FINANCES_API, data).then((res) => {
//     return res.data;
//   });
// };

// export const usePostTransaction = () =>
//   useSWRMutation(
//     [API_PATHS.FINANCES_API],
//     (_key, { arg }: { arg: TransactionPostData }) => transactionDataPost(arg),
//   );

// export const transactionDataDelete = (data: TransactionDeleteData) => {
//   return api.del(`${API_PATHS.FINANCES_API}/${data.id}`).then((res) => {
//     return res.data;
//   });
// };

// export const useDeleteTransaction = () =>
//   useSWRMutation(
//     [API_PATHS.FINANCES_API],
//     (_key, { arg }: { arg: TransactionDeleteData }) =>
//       transactionDataDelete(arg),
//   );

// export const transactionCategoriesFetcher = (
//   type: TransactionTypeEnum,
// ): Promise<TransactionCategoryType[]> => {
//   return api
//     .get<
//       TransactionCategoryType[]
//     >(`${API_PATHS.FINANCES_API}/${type}/categories`)
//     .then((res) => {
//       return res.data;
//     });
// };

// export const useTransactionCategories = (type: TransactionTypeEnum) => {
//   return useSWR([`${API_PATHS.FINANCES_API}/${type}/categories`], () =>
//     transactionCategoriesFetcher(type),
//   );
// };
