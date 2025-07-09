import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { api, getPaths } from '@monetix/shared/config';

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

export const goalDataPost = (data: GoalsPostData) => {
  return api.post(goalsApiPath, data).then((res) => {
    return res.data;
  });
};

export const usePostGoal = () =>
  useSWRMutation([goalsApiPath], (_key, { arg }: { arg: GoalsPostData }) =>
    goalDataPost(arg),
  );

export const goalDataDelete = (data: GoalsDeleteData) => {
  return api.del(`${goalsApiPath}/${data.id}`).then((res) => {
    return res.data;
  });
};

export const useDeleteGoal = () =>
  useSWRMutation(
    [goalsApiPath, 'delete'],
    (_key, { arg }: { arg: GoalsDeleteData }) => goalDataDelete(arg),
  );
