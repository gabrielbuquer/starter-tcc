import { useMediaQuery, useTheme } from '@mui/material';

interface DesktopViewProps {
  children: React.ReactNode;
}

const DesktopView: React.FC<DesktopViewProps> = ({ children }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return isDesktop ? <>{children}</> : null;
};

export default DesktopView;
