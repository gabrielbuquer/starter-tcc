import { ReactNode, createContext, useContext, useState } from 'react';

import { TransactionTypeEnum } from '@monetix/shared/config';
import {
  getCurrentMonth,
  getStartAndEndDateFromMonthValue,
} from '@monetix/core-utils';

import { GoalsDataResponse } from '../../services/goals/types';
import { useGoal } from '../../hooks/useGoal';

type GoalsTableContextProps = {
  goals: GoalsDataResponse;
  goalsPage: number;
  goalsMonth: string;
  selectedType: TransactionTypeEnum;
  isLoadingGoals: boolean;
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

  console.log('goalsA', goals);

  return (
    <GoalsTableContext.Provider
      value={{
        goals,
        goalsMonth,
        goalsPage,
        selectedType,
        isLoadingGoals: !goals || loadingGoals,
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
