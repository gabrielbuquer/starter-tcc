import { Button, Dialog, DialogContent, DialogTitle, Grid2 as Grid, TextField } from '@mui/material';
import { DIALOG_TITLE } from './constants';

export type ExpenseFormProps = {
  open: boolean;
}

export const ExpenseForm = () => {
  return (
    <Dialog
      open={true}
    >
      <DialogTitle>{DIALOG_TITLE}</DialogTitle>
      <DialogContent>
        <form>
          <Grid container spacing={2}>
            <TextField
              fullWidth
              label="Descrição"
              variant="outlined"
            />
            <Grid size={6}>
              <TextField
                fullWidth
                label="Valor"
                variant="outlined"
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                label="Data"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
          >
            Adicionar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
