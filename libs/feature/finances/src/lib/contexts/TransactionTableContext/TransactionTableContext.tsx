import { ReactNode, createContext, useContext, useState } from 'react';
import { useSession } from 'next-auth/react';

import { TransactionTypeEnum } from '@monetix/shared/config';

import { useTransactionsData } from '../../services/transactions';
import { TransactionsDataResponse } from '../../services/transactions/types';

type TransactionTableContextProps = {
  transactions: TransactionsDataResponse;
  transactionsPage: number;
  selectedType: TransactionTypeEnum;
  isLoadingTransactions: boolean;
  setSelectedType: (type: TransactionTypeEnum) => void;
  setTransactionsPage: (page: number) => void;
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
  const { data: session } = useSession();
  const [selectedType, setSelectedType] = useState<TransactionTypeEnum | null>(
    TransactionTypeEnum.EXPENSE,
  );
  const [transactionsPage, setTransactionsPage] = useState(0);
  const { data: transactions, isLoading: loadingTransactions } =
    useTransactionsData(session?.user?.id, {
      type: selectedType,
      'start-date': new Date(
        new Date().setDate(new Date().getDate() - 30),
      ).toDateString(),
      'end-date': new Date().toDateString(),
    });

  console.log(session?.user?.id, transactions, loadingTransactions);

  return (
    <TransactionTableContext.Provider
      value={{
        transactions,
        transactionsPage,
        selectedType,
        isLoadingTransactions: !transactions || loadingTransactions,
        setSelectedType,
        setTransactionsPage,
      }}
    >
      {children}
    </TransactionTableContext.Provider>
  );
};

export const useTransactionTable = () => {
  return useContext(TransactionTableContext);
};
