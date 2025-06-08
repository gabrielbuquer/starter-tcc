import { showSnackBar } from '@monetix/shared/ui';

import {
  useDeleteTransaction,
  usePostTransaction,
  usePutTransaction,
} from '../services/transactions';
import {
  TransactionDeleteData,
  TransactionPostData,
  TransactionPutData,
} from '../services/transactions/types';
import { useTransactionTable } from '../contexts/TransactionTableContext';
import { useGoalsTable, useSummary } from '../contexts';

export function useTransaction() {
  const { updateTransactions } = useTransactionTable();
  const { updateGoals } = useGoalsTable();
  const { updateOverview } = useSummary();
  const { trigger: triggerPost } = usePostTransaction();
  const { trigger: triggerPut } = usePutTransaction();
  const { trigger: triggerDelete } = useDeleteTransaction();

  const postTransaction = async (transaction: TransactionPostData) => {
    try {
      await triggerPost(transaction);
      updateTransactions?.();
      updateGoals?.();
      updateOverview?.();
      showSnackBar({
        message: `Transação "${transaction.description}" criada com sucesso.`,
        type: 'success',
      });
    } catch (error) {
      console.log(error);
      showSnackBar({
        message: `Erro ao criar a transação "${transaction.description}". Tente novamente mais tarde.`,
        type: 'error',
      });
    }
  };

  const updateTransaction = async (transaction: TransactionPutData) => {
    try {
      await triggerPut(transaction);
      updateTransactions();
      showSnackBar({
        message: `Transação "${transaction.description}" atualizada com sucesso.`,
        type: 'success',
      });
    } catch (error) {
      showSnackBar({
        message: `Erro ao atualizar a transação "${transaction.description}". Tente novamente mais tarde.`,
        type: 'error',
      });
    }
  };

  const deleteTransaction = async (transaction: TransactionDeleteData) => {
    try {
      await triggerDelete(transaction);
      updateTransactions();
      await showSnackBar({
        message: `Transação "${transaction.description}" excluída com sucesso.`,
        type: 'success',
      });
    } catch (error) {
      showSnackBar({
        message: `Erro ao excluir a transação "${transaction.description}". Tente novamente mais tarde.`,
        type: 'error',
      });
    }
  };

  return { postTransaction, updateTransaction, deleteTransaction };
}
