import { useContext } from 'react';

import { TransactionType, TransactionTypeEnum } from '@monetix/shared/config';

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
    formType: TransactionTypeEnum,
    defaultValues: TransactionType | null = null,
  ) => {
    const isEditing = defaultValues !== null;
    setTransactionForm({
      open: true,
      formType,
      isEditing,
      defaultValues: defaultValues
        ? {
            ...defaultValues,
            date: defaultValues?.date
              ? new Date(defaultValues.date)
              : new Date(),
            category: defaultValues?.category?.description || '',
          }
        : null,
    });
  };

  const closeForm = () => {
    setTransactionForm((prev) => ({ ...prev, open: false }));
  };

  return { openForm, closeForm };
}
