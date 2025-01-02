import Image from 'next/image'
import { useMediaQuery, useTheme } from '@mui/material';
import { LogoAsLink } from './Logo.styled';


export type LogoProps = {
  href: string;
};

export const Logo = ({ href }: LogoProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <LogoAsLink href={href}>
      <Image width={isMobile ? 60 : 120} height={isMobile ? 40 : 80} src="/assets/images/logo/logo.png" alt="logo" />
    </LogoAsLink>
  );
};
