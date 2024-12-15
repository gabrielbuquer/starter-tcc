import { HeaderWrapper } from './Header.styled';
import { Logo } from './Logo';

export type HeaderPropsType = {
  string: string;
}

export const Header = () => {
  return (
    <div>
      <Logo />
      <div> menu </div>
      <div> account </div>
    </div>
  )
};
