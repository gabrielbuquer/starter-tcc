import { HeaderWrapper } from './Header.styled';
import { Logo } from './Logo';
import { getBaseUrls } from '@monetix/shared/config';

export type HeaderPropsType = {
  string: string;
}

export const Header = () => {
  const { HOME } = getBaseUrls();

  return (
    <HeaderWrapper>
      <Logo href={HOME} />
      <div> menu </div>
      <div> account </div>
    </HeaderWrapper>
  )
};
