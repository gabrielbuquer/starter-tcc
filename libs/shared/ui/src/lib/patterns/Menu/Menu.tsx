import { DesktopView, MobileView } from '../../utils';

import { DrawerMobile } from './DrawerMobile';
import { MenuDesktop } from './MenuDesktop';

export const Menu = () => {
  return (
    <>
      <DesktopView>
        <MenuDesktop />
      </DesktopView>
      <MobileView>
        <DrawerMobile />
      </MobileView>
    </>
  );
};
