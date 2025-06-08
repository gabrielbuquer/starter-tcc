import { showSnackBar } from '@monetix/shared/ui';

import {
  useDeleteTransaction,
  usePostTransaction,
} from '../services/transactions';
import {
  TransactionDeleteData,
  TransactionPostData,
} from '../services/transactions/types';
import { useTransactionTable } from '../contexts/TransactionTableContext';

export function useTransaction() {
  const { updateTransactions } = useTransactionTable();
  const { trigger: triggerPost } = usePostTransaction();
  const { trigger: triggerDelete } = useDeleteTransaction();

  const postTransaction = async (transaction: TransactionPostData) => {
    try {
      await triggerPost(transaction);
      updateTransactions();
      showSnackBar({
        message: `Transação "${transaction.description}" criada com sucesso.`,
        type: 'success',
      });
    } catch (error) {
      showSnackBar({
        message: `Erro ao criar a transação "${transaction.description}". Tente novamente mais tarde.`,
        type: 'error',
      });
    }
  };

  const updateTransaction = async (transaction: TransactionPostData) => {
    try {
      await triggerPost(transaction);
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
      showSnackBar({
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
