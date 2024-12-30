import { MenuLinksProps } from "../types";

import { Arrow, MenuContent, MenuContentItem, NavigationCaret, NavigationContent, NavigationIndicator, NavigationItem, NavigationLink, NavigationTrigger } from "./MenuDesktop.styled";


export const MenuItem = (option: MenuLinksProps) => {
  const hasSubmenu = !!option?.submenu?.length;
  return (
    <NavigationItem>
      <NavigationTrigger>
        <NavigationLink href={option.link}>
          {option.title}
        </NavigationLink>
        {hasSubmenu && (
          <NavigationCaret sx={{ fontSize: 18 }}  />
        )}
      </NavigationTrigger>
      {hasSubmenu && (
        <NavigationContent>
          <NavigationIndicator>
            <Arrow />
          </NavigationIndicator>
          <MenuContent>
            {option.submenu.map((item) => (
                <MenuContentItem key={item.title}>{item.title}</MenuContentItem>
            ))}
          </MenuContent>
        </NavigationContent>
      )}
    </NavigationItem>
  );
}
