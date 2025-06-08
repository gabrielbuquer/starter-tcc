import { ReactNode, createContext, useContext } from 'react';

import { useFinanceOverview } from '../../services/overview';
import {
  OverviewBalances,
  OverviewTotals,
  TransactionValue,
} from '../../services/overview/types';

type SummaryContextProps = {
  amount: number;
  amountMonth: number;
  incomeMonth: number;
  expenseMonth: number;
  incomes: TransactionValue[];
  expenses: TransactionValue[];
  totals: OverviewTotals[];
  balances: OverviewBalances[];
  isLoadingOverview: boolean;
  updateOverview: () => void;
};

export type SummaryContextPropsProviderProps = {
  children: ReactNode;
};

export const SummaryContext = createContext({} as SummaryContextProps);

export const SummaryContextProvider = ({
  children,
}: SummaryContextPropsProviderProps) => {
  const {
    data: overview,
    isLoading: loadingOverview,
    mutate: updateOverview,
  } = useFinanceOverview();

  return (
    <SummaryContext.Provider
      value={{
        amount: overview?.amount ?? 0,
        amountMonth: overview?.amountMonth ?? 0,
        incomeMonth: overview?.incomeMonth ?? 0,
        expenseMonth: overview?.expenseMonth ?? 0,
        incomes: overview?.incomes ?? [],
        expenses: overview?.expenses ?? [],
        totals: overview?.totals ?? ([] as OverviewTotals[]),
        balances: overview?.balances ?? ([] as OverviewBalances[]),
        isLoadingOverview: !overview || loadingOverview,
        updateOverview,
      }}
    >
      {children}
    </SummaryContext.Provider>
  );
};

export const useSummary = () => {
  return useContext(SummaryContext);
};
