import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

import {
  TransactionCategoryType,
  TransactionTypeEnum,
} from '@monetix/shared/config';
import {
  getCurrentMonth,
  getStartAndEndDateFromMonthValue,
} from '@monetix/core-utils';

import { GoalsDataResponse } from '../../services/goals/types';
import { useGoal } from '../../hooks/useGoal';
import { useTransactionCategories } from '../../services/transactions';

type GoalsTableContextProps = {
  goals: GoalsDataResponse;
  goalsPage: number;
  goalsMonth: string;
  selectedType: TransactionTypeEnum;
  categories: TransactionCategoryType[];
  categoriesWithoutGoals: TransactionCategoryType[];
  isLoadingGoals: boolean;
  isLoadingCategories: boolean;
  setSelectedType: (type: TransactionTypeEnum) => void;
  setGoalsPage: (page: number) => void;
  setGoalsMonth: (month: string) => void;
  updateGoals: () => void;
};

export type GoalsTableContextPropsProviderProps = {
  children: ReactNode;
};

export const GoalsTableContext = createContext({} as GoalsTableContextProps);

export const GoalsTableContextProvider = ({
  children,
}: GoalsTableContextPropsProviderProps) => {
  const { getGoals } = useGoal();
  const [selectedType, setSelectedType] = useState<TransactionTypeEnum | null>(
    TransactionTypeEnum.INCOME,
  );
  const { data: categories, isLoading: loadingCategories } =
    useTransactionCategories(selectedType);
  const [goalsPage, setGoalsPage] = useState(0);
  const [goalsMonth, setGoalsMonth] = useState<string>(getCurrentMonth().value);

  const {
    data: goals,
    isLoading: loadingGoals,
    mutate: updateGoals,
  } = getGoals({
    type: selectedType,
    ...getStartAndEndDateFromMonthValue(goalsMonth),
    page: goalsPage + 1,
    limit: 10,
  });

  const categoriesWithoutGoals = useMemo(
    () =>
      categories?.filter(
        (category) =>
          !goals?.items?.some((goal) => goal.category.id === category.id),
      ),
    [categories, goals],
  );

  return (
    <GoalsTableContext.Provider
      value={{
        goals,
        goalsMonth,
        goalsPage,
        selectedType,
        categories,
        categoriesWithoutGoals,
        isLoadingGoals: !goals || loadingGoals,
        isLoadingCategories: !categories || loadingCategories,
        setSelectedType,
        setGoalsPage,
        setGoalsMonth,
        updateGoals,
      }}
    >
      {children}
    </GoalsTableContext.Provider>
  );
};

export const useGoalsTable = () => {
  return useContext(GoalsTableContext);
};
