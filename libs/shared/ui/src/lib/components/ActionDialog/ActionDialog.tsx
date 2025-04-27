import { IconButton, Dialog, Typography, PaperProps, Paper } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
import Draggable from 'react-draggable';
import { DialogHeader, DialogContent } from './ActionDialog.styled';
import { useRef } from 'react';

export type ExpenseFormProps = {
  open: boolean;
  title: string;
  children?: React.ReactNode;
  onClose?: () => void;
}

function PaperComponent(props: PaperProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  return (
    <Draggable
      nodeRef={nodeRef as React.RefObject<HTMLDivElement>}
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  );
}

export const ActionDialog = ({ open = true, title, children, onClose }: ExpenseFormProps) => {
  return (
    <Dialog
      open={open}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogHeader>
        <Typography variant="h4">
        {title}
        </Typography>
        <IconButton onClick={onClose} aria-label="close">
          <CloseRounded />
        </IconButton>
      </DialogHeader>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  )
}
