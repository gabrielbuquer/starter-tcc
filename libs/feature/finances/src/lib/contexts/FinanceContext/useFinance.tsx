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
    console.log('open', defaultValues);
    setTransactionForm({
      open: true,
      formType,
      isEditing,
      defaultValues: defaultValues
        ? {
            ...defaultValues,
            value: Number(defaultValues.value) || 0,
            date: defaultValues?.date
              ? new Date(defaultValues.date)
              : new Date(),
            category: defaultValues?.category?.id || '',
          }
        : null,
    });
  };

  const closeForm = () => {
    setTransactionForm((prev) => ({ ...prev, open: false }));
  };

  return { openForm, closeForm };
}
