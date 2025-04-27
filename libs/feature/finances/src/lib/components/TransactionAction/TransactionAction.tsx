import IconButton from "@mui/material/IconButton";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import { Container } from "./TransactionAction.styled";
export const TransactionAction = () => {
  return (
    <Container>
      <IconButton>
        <Edit />
      </IconButton>
      <IconButton>
        <Delete />
      </IconButton>
    </Container>
  );
}
