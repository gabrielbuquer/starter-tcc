import { ReactNode, createContext, useContext, useState } from 'react';

import { TransactionTypeEnum } from '@monetix/shared/config';
import {
  generateLastNMonths,
  getCurrentMonth,
  getStartAndEndDateFromMonthValue,
} from '@monetix/core-utils';

import { useTransactionsData } from '../../services/transactions';
import { TransactionsDataResponse } from '../../services/transactions/types';

type TransactionTableContextProps = {
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

export type TransactionTableContextPropsProviderProps = {
  children: ReactNode;
};

export const TransactionTableContext = createContext(
  {} as TransactionTableContextProps,
);

export const TransactionTableContextProvider = ({
  children,
}: TransactionTableContextPropsProviderProps) => {
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
    <TransactionTableContext.Provider
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
    </TransactionTableContext.Provider>
  );
};

export const useTransactionTable = () => {
  return useContext(TransactionTableContext);
};
