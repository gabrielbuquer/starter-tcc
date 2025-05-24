import { ReactNode, createContext, useState } from 'react';

import { TransactionForm, TransactionFormProps } from '../../components';

type FinanceContextProps = {
  transactionForm: TransactionFormProps;
  setTransactionForm: React.Dispatch<
    React.SetStateAction<TransactionFormProps>
  >;
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
    formType: 'expense' as 'expense' | 'income',
    isEditing: false,
    defaultValues: null,
  });

  console.log('transactionForm', transactionForm);

  return (
    <FinanceContext.Provider value={{ transactionForm, setTransactionForm }}>
      {children}
      <TransactionForm
        open={transactionForm.open}
        formType={transactionForm.formType}
        isEditing={transactionForm.isEditing}
        defaultValues={transactionForm.defaultValues}
        onClose={() => setTransactionForm({ ...transactionForm, open: false })}
      />
    </FinanceContext.Provider>
  );
};

export { FinanceContextProvider };
