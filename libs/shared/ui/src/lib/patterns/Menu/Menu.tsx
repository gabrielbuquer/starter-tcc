
import { DesktopView } from "../../utils";
import { MENU_LINKS } from "./constants";
import { MenuDesktop } from "./MenuDesktop";

export const Menu = () => {
  return (
    <>
    <DesktopView>
      <MenuDesktop content={MENU_LINKS} />
    </DesktopView>
    </>
  );
};
