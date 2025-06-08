import { TransactionType, TransactionTypeEnum } from '@monetix/shared/config';

import { useFinanceContext } from '../contexts/FinanceContext';

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
