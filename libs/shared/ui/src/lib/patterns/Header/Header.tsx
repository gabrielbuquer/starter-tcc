import { getBaseUrls } from '@monetix/shared/config';

import { AccountMenu } from '../Menu/AccountMenu';
import { DrawerMobile, MenuDesktop } from '../Menu';
import { DesktopView, MobileView } from '../../utils';

import { Actions, HeaderWrapper } from './Header.styled';
import { Logo } from './Logo';

export type HeaderPropsType = {
  simpleHeader?: boolean;
};

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
  );
};
