import { useState } from 'react';
import BottomNav from '@mui/material/BottomNavigation';
import BottomNavAction from '@mui/material/BottomNavigationAction';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { getMenuLinks } from '../constants';

export const BottomNavigation = () => {
  const [value, setValue] = useState(0);
  const { data } = useSession();
  const menu = getMenuLinks(data?.user?.type);
  const router = useRouter();

  return (
    <BottomNav
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      {menu.map((option) => (
        <BottomNavAction
          key={option.title}
          label={option.title}
          icon={option?.icon ?? null}
          onClick={() => router.push(option.link)}
        />
      ))}
    </BottomNav>
  );
};
