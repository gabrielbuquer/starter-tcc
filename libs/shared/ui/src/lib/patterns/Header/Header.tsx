import { AccountMenu } from '../Menu/AccountMenu';
import { MenuDesktop, DrawerMobile } from '../Menu';
import { Actions, HeaderWrapper } from './Header.styled';
import { Logo } from './Logo';
import { getBaseUrls } from '@monetix/shared/config';
import { DesktopView, MobileView } from "../../utils";

export type HeaderPropsType = {
  simpleHeader?: boolean;
}

export const Header = ({ simpleHeader = false }: HeaderPropsType) => {
  const { HOME } = getBaseUrls();

  return (
    <HeaderWrapper>
      <Logo href={HOME} />

      {!simpleHeader && (
        <>
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
        </>
      )}

    </HeaderWrapper>
  )
};
