import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';

import { ConfirmationDialog, showSnackBar } from '@monetix/shared/ui';
import { TransactionType } from '@monetix/shared/config';

import { useTransactionForm } from '../../hooks/useTransactionForm';
import { useDeleteTransaction } from '../../services/transactions';
import { useTransaction } from '../../hooks/useTransaction';

import { Container } from './TransactionAction.styled';

interface TransactionActionProps {
  transaction: TransactionType;
}

export const TransactionAction = ({ transaction }: TransactionActionProps) => {
  const { deleteTransaction } = useTransaction();
  const { openForm } = useTransactionForm();
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = () => {
    openForm(transaction?.type, transaction);
  };

  const handleDelete = async () => {
    if (!transaction?.id) return;

    setIsLoading(true);

    await deleteTransaction(transaction);

    setIsLoading(false);
    setDeleteConfirmation(false);
  };

  return (
    <>
      <Container>
        <IconButton onClick={handleEdit}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => setDeleteConfirmation(true)}>
          <Delete />
        </IconButton>
      </Container>
      <ConfirmationDialog
        title="Excluir transação"
        text="Tem certeza que deseja remover a sua transação?"
        open={deleteConfirmation}
        isLoading={isLoading}
        handleSuccess={handleDelete}
        handleCancel={() => setDeleteConfirmation(false)}
      />
    </>
  );
};
