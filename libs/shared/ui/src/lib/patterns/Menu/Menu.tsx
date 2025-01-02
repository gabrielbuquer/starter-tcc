
import { DesktopView, MobileView } from "../../utils";
import { MENU_LINKS } from "./constants";
import { DrawerMobile } from "./DrawerMobile";
import { MenuDesktop } from "./MenuDesktop";

export const Menu = () => {
  return (
    <>
    <DesktopView>
      <MenuDesktop content={MENU_LINKS} />
    </DesktopView>
    <MobileView>
      <DrawerMobile />
    </MobileView>
    </>
  );
};
