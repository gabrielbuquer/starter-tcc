import { useMediaQuery, useTheme } from '@mui/material';

interface DesktopViewProps {
  children: React.ReactNode;
}

export const MobileView: React.FC<DesktopViewProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return isMobile ? <>{children}</> : null;
};
