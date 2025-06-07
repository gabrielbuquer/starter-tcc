import useSWR from 'swr';

import { api, getPaths } from '@monetix/shared/config';

import { OverviewDataResponse } from './types';

const API_PATHS = getPaths();

const overviewRoute = `${API_PATHS.FINANCES_API}/overview`;

export const overviewDataFetcher = (): Promise<OverviewDataResponse> => {
  return api.get<OverviewDataResponse>(overviewRoute).then((res) => {
    return res.data;
  });
};

export const useFinanceOverview = () => {
  return useSWR([overviewRoute], () => overviewDataFetcher());
};
