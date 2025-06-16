import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';

import { ConfirmationDialog } from '@monetix/shared/ui';
import { GoalsType, TransactionTypeEnum } from '@monetix/shared/config';

import { useGoalForm } from '../../hooks/useGoalForm';
import { useGoal } from '../../hooks/useGoal';

import { Container } from './GoalsAction.styled';

interface GoalsActionProps {
  goal: GoalsType;
  type: TransactionTypeEnum;
}

export const GoalsAction = ({ goal, type }: GoalsActionProps) => {
  const { deleteGoal } = useGoal();
  const { openForm } = useGoalForm();
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = () => {
    openForm(type ?? TransactionTypeEnum.EXPENSE, goal);
  };

  const handleDelete = async () => {
    if (!goal?.id) return;

    setIsLoading(true);

    await deleteGoal(goal);

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
        title="Excluir meta"
        text="Tem certeza que deseja excluir a sua meta para a categoria?"
        open={deleteConfirmation}
        isLoading={isLoading}
        handleSuccess={handleDelete}
        handleCancel={() => setDeleteConfirmation(false)}
      />
    </>
  );
};
