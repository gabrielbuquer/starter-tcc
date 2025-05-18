import { Box, DialogTitle, css, styled } from '@mui/material';

interface HeaderProps {
  isDraggable?: boolean;
}

export const DialogHeader = styled(DialogTitle, {
  shouldForwardProp: (prop) => prop !== 'isDraggable',
})<HeaderProps>`
  ${({ theme, isDraggable }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacing(2)};
    cursor: ${isDraggable ? 'move' : 'default'};
  `}
`;

export const DialogContent = styled(Box)`
  ${({ theme }) => css`
    padding: ${theme.spacing(2)};
    flex: 1 1 auto;
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    padding: ${theme.spacing(1)} ${theme.spacing(3)} ${theme.spacing(3)};
  `}
`;
