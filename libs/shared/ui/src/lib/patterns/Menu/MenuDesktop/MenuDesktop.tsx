import { MenuItem } from "./MenuItem";
import { MenuLinksProps } from "../types";
import { NavigationList, NavigationRoot } from "./MenuDesktop.styled";

type MenuDesktopProps = {
  content: MenuLinksProps[];
}

export const MenuDesktop = ({ content }: MenuDesktopProps) => {
  return (
    <NavigationRoot>
      <NavigationList>
        {content.map((item) => <MenuItem key={item.title} {...item} />)}
      </NavigationList>
    </NavigationRoot>
  );
}
