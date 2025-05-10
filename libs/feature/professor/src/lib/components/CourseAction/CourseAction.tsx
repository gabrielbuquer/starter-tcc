import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import { Container } from "./CourseAction.styled";
import { ConfirmationDialog } from "@monetix/shared/ui";
import { TransactionForm } from "../TransactionForm";

export const CourseAction = () => {
  const [editTransaction, setEditTransaction] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = () => {
    setEditTransaction(true);
  };
  const handleDelete = async () => {
    console.log("Delete action triggered");
    setIsLoading(true);

    // Simulate an API call
    setTimeout(() => {
      console.log("Transaction deleted");
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
    </>
  );
}
