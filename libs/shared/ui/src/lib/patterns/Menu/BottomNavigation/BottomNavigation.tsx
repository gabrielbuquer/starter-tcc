import { useState } from 'react';

import BottomNav from '@mui/material/BottomNavigation';
import BottomNavAction from '@mui/material/BottomNavigationAction';

import { MENU_LINKS } from '../constants';

export const BottomNavigation = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNav
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      {MENU_LINKS.map(option => (
        <BottomNavAction key={option.title} label={option.title} icon={option?.icon ?? null} />
      ))}
    </BottomNav>
  );
}
