import { useSession } from 'next-auth/react';

import { getMenuLinks } from '../constants';

import { MenuItem } from './MenuItem';
import { NavigationList, NavigationRoot } from './MenuDesktop.styled';

export const MenuDesktop = () => {
  const { data: session } = useSession();
  const menu = getMenuLinks(session?.user?.type);
  return (
    <NavigationRoot>
      <NavigationList>
        {menu.map((item) => (
          <MenuItem key={item.title} {...item} />
        ))}
      </NavigationList>
    </NavigationRoot>
  );
};
