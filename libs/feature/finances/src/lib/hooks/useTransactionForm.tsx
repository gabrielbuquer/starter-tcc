import { TransactionType, TransactionTypeEnum } from '@monetix/shared/config';

import { useFinanceContext } from '../contexts/FinanceContext';

export function useTransactionForm() {
  const { setTransactionForm } = useFinanceContext();

  const openForm = (
    formType: TransactionTypeEnum,
    defaultValues: TransactionType | null = null,
  ) => {
    const isEditing = defaultValues !== null;

    let parsedDate = new Date();
    if (defaultValues && typeof defaultValues.date === 'string') {
      const dateParts = defaultValues.date.split('-');
      if (dateParts.length === 3) {
        const [year, month, day] = dateParts;
        parsedDate = new Date(Number(year), Number(month) - 1, Number(day));
      }
    }

    setTransactionForm({
      open: true,
      formType,
      isEditing,
      defaultValues: defaultValues
        ? {
            ...defaultValues,
            value: Number(defaultValues.value) || 0,
            date: parsedDate,
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
