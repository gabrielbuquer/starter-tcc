import { AccountMenu } from '../AccountMenu';
import { MenuDesktop, DrawerMobile } from '../Menu';
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


      <DesktopView>
        <MenuDesktop />
      </DesktopView>

      <Actions>
        <DesktopView>
          <AccountMenu />
        </DesktopView>
        <MobileView>
          <DrawerMobile />
        </MobileView>
      </Actions>
    </HeaderWrapper>
  )
};
