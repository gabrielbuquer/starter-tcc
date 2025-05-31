import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

export type ConfimationDialogProps = {
  open: boolean;
  title: string;
  text: string;
  isLoading?: boolean;
  handleSuccess: () => void;
  handleCancel: () => void;
};

export const ConfirmationDialog = ({
  open = true,
  title,
  text,
  isLoading,
  handleSuccess,
  handleCancel,
}: ConfimationDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      style={{ top: '10px' }}
    >
      <DialogTitle id="alert-dialog-title">
        <Typography variant="h4" component="h3">
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography variant="caption" component="p">
            {text}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ padding: '0 16px 16px 16px' }}>
        <LoadingButton onClick={handleCancel}>Cancelar</LoadingButton>
        <LoadingButton
          variant="contained"
          loading={isLoading}
          onClick={handleSuccess}
        >
          Continuar
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};
