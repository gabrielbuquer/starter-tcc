import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';

import { ConfirmationDialog } from '@monetix/shared/ui';

import { useTransactionForm } from '../../contexts/FinanceContext';

import { Container } from './TransactionAction.styled';

export const TransactionAction = () => {
  const { openForm } = useTransactionForm();
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = () => {
    openForm('expense', {
      description: 'teste',
      value: 20,
      date: '10/10/2023',
      category: '',
    });
  };
  const handleDelete = async () => {
    console.log('Delete action triggered');
    setIsLoading(true);

    // Simulate an API call
    setTimeout(() => {
      console.log('Transaction deleted');
      setDeleteConfirmation(false);
      setIsLoading(false);
    }, 2000);
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
