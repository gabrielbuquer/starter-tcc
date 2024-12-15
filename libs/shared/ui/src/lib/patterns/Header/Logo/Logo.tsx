import { LogoAsLink } from './Logo.styled';
import Image from 'next/image'

export type LogoProps = {
  href: string;
};

export const Logo = ({ href }: LogoProps) => {
  return (
    <LogoAsLink href={href}>
      <Image width={120} height={80} src="/assets/images/logo/logo.png" alt="logo" />
    </LogoAsLink>
  );
};
