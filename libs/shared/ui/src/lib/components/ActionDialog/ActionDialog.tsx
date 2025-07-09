import {
  Dialog,
  IconButton,
  Paper,
  PaperProps,
  Typography,
} from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
import Draggable from 'react-draggable';
import { useRef } from 'react';

import { DialogContent, DialogHeader } from './ActionDialog.styled';

export type ActionDialogProps = {
  open: boolean;
  title: string;
  children?: React.ReactNode;
  isDraggable?: boolean;
  fullWidth?: boolean;
  maxWidth?: Breakpoint;
  onClose?: () => void;
};

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

export const ActionDialog = ({
  open = true,
  title,
  children,
  isDraggable = false,
  fullWidth = false,
  maxWidth = 'sm',
  onClose,
}: ActionDialogProps) => {
  return (
    <Dialog
      open={open}
      PaperComponent={isDraggable ? PaperComponent : undefined}
      aria-labelledby="draggable-dialog-title"
      maxWidth={maxWidth}
      fullWidth={fullWidth}
    >
      <DialogHeader isDraggable={isDraggable}>
        <Typography variant="h4" component="p" id="draggable-dialog-title">
          {title}
        </Typography>
        <IconButton onClick={onClose} aria-label="close">
          <CloseRounded />
        </IconButton>
      </DialogHeader>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
