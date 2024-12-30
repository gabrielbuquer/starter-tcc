import { AccountMenu } from '../AccountMenu';
import { Menu } from '../Menu';
import { Actions, HeaderWrapper } from './Header.styled';
import { Logo } from './Logo';
import { getBaseUrls } from '@monetix/shared/config';
import { DesktopView, MobileView } from "../../utils";

export type HeaderPropsType = {
  string: string;
}

export const Header = () => {
  const { HOME } = getBaseUrls();

  return (
    <HeaderWrapper>
      <Logo href={HOME} />

      <Menu />

      <Actions>
        <DesktopView>
          <AccountMenu />
        </DesktopView>
        <MobileView>
          <div> menu </div>
        </MobileView>
      </Actions>
    </HeaderWrapper>
  )
};
