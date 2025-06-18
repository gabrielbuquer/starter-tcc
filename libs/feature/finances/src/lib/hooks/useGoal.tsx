import { showSnackBar } from '@monetix/shared/ui';

import { useDeleteGoal, useGoalsData, usePostGoal } from '../services/goals';
import {
  GoalsDeleteData,
  GoalsPostData,
  GoalsQueryParams,
} from '../services/goals/types';
import { useGoalsTable } from '../contexts/GoalsTableContext';
// import { useGoalsTable } from '../contexts';

export function useGoal() {
  const { updateGoals } = useGoalsTable();
  const { trigger: triggerPost } = usePostGoal();
  const { trigger: triggerDelete } = useDeleteGoal();

  const getGoals = (params: GoalsQueryParams) => {
    return useGoalsData(params);
  };

  const postGoal = async (goal: GoalsPostData) => {
    try {
      await triggerPost(goal);
      updateGoals();
      showSnackBar({
        message: `Meta criada com sucesso.`,
        type: 'success',
      });
    } catch (error) {
      showSnackBar({
        message: `Erro ao criar a meta. Tente novamente mais tarde.`,
        type: 'error',
      });
    }
  };

  const updateGoal = async (goal: GoalsPostData) => {
    // TODO: Implement update logic
    // try {
    //   await triggerPost(goal);
    //   updateTransactions();
    //   showSnackBar({
    //     message: `Meta "${goal.description}" atualizada com sucesso.`,
    //     type: 'success',
    //   });
    // } catch (error) {
    //   showSnackBar({
    //     message: `Erro ao atualizar a meta "${goal.description}". Tente novamente mais tarde.`,
    //     type: 'error',
    //   });
    // }
  };

  const deleteGoal = async (goal: GoalsDeleteData) => {
    try {
      await triggerDelete(goal);
      updateGoals();
      showSnackBar({
        message: `Meta de "${goal.category.description}" excluída com sucesso.`,
        type: 'success',
      });
    } catch (error) {
      showSnackBar({
        message: `Erro ao excluir a meta de "${goal.category.description}". Tente novamente mais tarde.`,
        type: 'error',
      });
    }
  };

  return { getGoals, postGoal, updateGoal, deleteGoal };
}
