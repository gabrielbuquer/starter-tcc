import { MenuItem } from "./MenuItem";
import { NavigationList, NavigationRoot } from "./MenuDesktop.styled";

import { MENU_LINKS } from "../constants";

export const MenuDesktop = () => {
  return (
    <NavigationRoot>
      <NavigationList>
        {MENU_LINKS.map((item) => <MenuItem key={item.title} {...item} />)}
      </NavigationList>
    </NavigationRoot>
  );
}
