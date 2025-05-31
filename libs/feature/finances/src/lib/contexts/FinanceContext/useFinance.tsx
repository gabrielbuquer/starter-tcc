import { useContext } from 'react';

import { TransactionFormProps } from '../../components';

import { FinanceContext } from './FinanceContext';

export function useFinanceContext() {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error(
      'useFinanceContext must be used within a FinanceContextProvider',
    );
  }
  return context;
}

export function useTransactionForm() {
  const { setTransactionForm } = useFinanceContext();

  const openForm = (
    formType: 'expense' | 'income',
    defaultValues: TransactionFormProps['defaultValues'] = null,
  ) => {
    const isEditing = defaultValues !== null;
    setTransactionForm({
      open: true,
      formType,
      isEditing,
      defaultValues,
    });
  };

  const closeForm = () => {
    setTransactionForm((prev) => ({ ...prev, open: false }));
  };

  return { openForm, closeForm };
}
