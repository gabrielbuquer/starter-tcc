import { Box, Typography } from '@mui/material';

interface EmptyStateProps {
  message: string;
  height?: string;
}

export const EmptyState = ({ message, height = '290px' }: EmptyStateProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 8px',
      }}
    >
      <Typography variant="body1" color="text.secondary" align="center">
        {message}
      </Typography>
    </Box>
  );
};
