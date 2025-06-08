import { useGoalsData } from '../services/goals';
import { GoalsQueryParams } from '../services/goals/types';
// import { useGoalsTable } from '../contexts';

export function useGoal() {
  // const { updateGoals } = useGoalsTable();
  // const { trigger: triggerPost } = usePostGoal();

  const getGoals = (params: GoalsQueryParams) => {
    return useGoalsData(params);
  };

  // const postGoal = async (goal: GoalsPostData) => {
  //   try {
  //     await triggerPost(goal);
  //     updateTransactions();
  //     showSnackBar({
  //       message: `Meta "${goal.description}" criada com sucesso.`,
  //       type: 'success',
  //     });
  //   } catch (error) {
  //     showSnackBar({
  //       message: `Erro ao criar a meta "${goal.description}". Tente novamente mais tarde.`,
  //       type: 'error',
  //     });
  //   }
  // };

  // const updateGoal = async (goal: GoalsPostData) => {
  //   try {
  //     await triggerPost(goal);
  //     updateTransactions();
  //     showSnackBar({
  //       message: `Meta "${goal.description}" atualizada com sucesso.`,
  //       type: 'success',
  //     });
  //   } catch (error) {
  //     showSnackBar({
  //       message: `Erro ao atualizar a meta "${goal.description}". Tente novamente mais tarde.`,
  //       type: 'error',
  //     });
  //   }
  // };

  // const deleteGoal = async (goal: GoalsDeleteData) => {
  //   try {
  //     await triggerDelete(goal);
  //     updateTransactions();
  //     showSnackBar({
  //       message: `Meta "${goal.description}" excluída com sucesso.`,
  //       type: 'success',
  //     });
  //   } catch (error) {
  //     showSnackBar({
  //       message: `Erro ao excluir a meta "${goal.description}". Tente novamente mais tarde.`,
  //       type: 'error',
  //     });
  //   }
  // };

  return { getGoals };
}
