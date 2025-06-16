import { ReactNode, createContext, useState } from 'react';

import { TransactionTypeEnum } from '@monetix/shared/config';

import {
  GoalsForm,
  GoalsFormProps,
  TransactionForm,
  TransactionFormProps,
} from '../../components';

type FinanceContextProps = {
  transactionForm: TransactionFormProps;
  setTransactionForm: React.Dispatch<
    React.SetStateAction<TransactionFormProps>
  >;
  goalsForm: GoalsFormProps;
  setGoalsForm: React.Dispatch<React.SetStateAction<GoalsFormProps>>;
};

export type FinanceContextPropsProviderProps = {
  children: ReactNode;
};

export const FinanceContext = createContext({} as FinanceContextProps);

const FinanceContextProvider = ({
  children,
}: FinanceContextPropsProviderProps) => {
  const [transactionForm, setTransactionForm] = useState({
    open: false,
    formType: TransactionTypeEnum.EXPENSE as TransactionTypeEnum,
    isEditing: false,
    defaultValues: null,
  });

  const [goalsForm, setGoalsForm] = useState({
    open: false,
    formType: TransactionTypeEnum.EXPENSE as TransactionTypeEnum,
    isEditing: false,
    defaultValues: null,
  });

  return (
    <FinanceContext.Provider
      value={{ transactionForm, setTransactionForm, goalsForm, setGoalsForm }}
    >
      {children}
      <TransactionForm
        open={transactionForm.open}
        formType={transactionForm.formType}
        isEditing={transactionForm.isEditing}
        defaultValues={transactionForm.defaultValues}
        onClose={() => setTransactionForm({ ...transactionForm, open: false })}
      />
      <GoalsForm
        open={goalsForm.open}
        formType={goalsForm.formType}
        isEditing={goalsForm.isEditing}
        defaultValues={goalsForm.defaultValues}
        onClose={() => setGoalsForm({ ...goalsForm, open: false })}
      />
    </FinanceContext.Provider>
  );
};

export { FinanceContextProvider };
