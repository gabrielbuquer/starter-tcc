import { GoalsType, TransactionTypeEnum } from '@monetix/shared/config';

import { useFinanceContext } from '../contexts/FinanceContext';

export function useGoalForm() {
  const { setGoalsForm } = useFinanceContext();

  const openForm = (
    formType: TransactionTypeEnum,
    defaultValues: GoalsType | null = null,
  ) => {
    const isEditing = defaultValues !== null;

    setGoalsForm({
      open: true,
      formType,
      isEditing,
      defaultValues: defaultValues
        ? {
            ...defaultValues,
            value: Number(defaultValues.planed) || 0,
            category: defaultValues?.category?.id || '',
          }
        : null,
    });
  };

  const closeForm = () => {
    setGoalsForm((prev) => ({ ...prev, open: false }));
  };

  return { openForm, closeForm };
}
