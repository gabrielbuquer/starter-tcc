import { ReactNode, createContext, useContext, useState } from 'react';

import { TransactionTypeEnum } from '@monetix/shared/config';
import {
  getCurrentMonth,
  getStartAndEndDateFromMonthValue,
} from '@monetix/core-utils';

import { useTransactionsData } from '../../services/transactions';
import { TransactionsDataResponse } from '../../services/transactions/types';
import { useFinanceContext } from '../FinanceContext';

type SummaryContextProps = {
  transactions: TransactionsDataResponse;
  transactionsPage: number;
  transactionsMonth: string;
  selectedType: TransactionTypeEnum;
  isLoadingTransactions: boolean;
  setSelectedType: (type: TransactionTypeEnum) => void;
  setTransactionsPage: (page: number) => void;
  setTransactionsMonth: (month: string) => void;
  updateTransactions: () => void;
};

export type SummaryContextPropsProviderProps = {
  children: ReactNode;
};

export const SummaryContext = createContext({} as SummaryContextProps);

export const SummaryContextProvider = ({
  children,
}: SummaryContextPropsProviderProps) => {
  const {} = useFinanceContext();
  const [selectedType, setSelectedType] = useState<TransactionTypeEnum | null>(
    TransactionTypeEnum.ALL,
  );
  const [transactionsPage, setTransactionsPage] = useState(0);
  const [transactionsMonth, setTransactionsMonth] = useState<string>(
    getCurrentMonth().value,
  );

  const {
    data: transactions,
    isLoading: loadingTransactions,
    mutate: updateTransactions,
  } = useTransactionsData({
    type: selectedType,
    ...getStartAndEndDateFromMonthValue(transactionsMonth),
    page: transactionsPage + 1,
    limit: 10,
  });

  return (
    <SummaryContext.Provider
      value={{
        transactions,
        transactionsPage,
        transactionsMonth,
        selectedType,
        isLoadingTransactions: !transactions || loadingTransactions,
        setSelectedType,
        setTransactionsPage,
        setTransactionsMonth,
        updateTransactions,
      }}
    >
      {children}
    </SummaryContext.Provider>
  );
};

export const useSummary = () => {
  return useContext(SummaryContext);
};
