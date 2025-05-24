import { useSession } from 'next-auth/react';

import { getMenuLinks } from '../constants';

import { MenuItem } from './MenuItem';
import { NavigationList, NavigationRoot } from './MenuDesktop.styled';

export const MenuDesktop = () => {
  const { data } = useSession();
  const menu = getMenuLinks(data?.user?.type);
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
