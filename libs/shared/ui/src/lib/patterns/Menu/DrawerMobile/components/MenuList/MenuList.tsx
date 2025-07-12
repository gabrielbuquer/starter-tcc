import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Logout } from '@mui/icons-material';
import { signOut } from 'next-auth/react';

import { getBaseUrls } from '@monetix/shared/config';

export const MenuList = () => {
  const { LOGIN } = getBaseUrls();
  return (
    <>
      <List>
        <ListItem
          disablePadding
          onClick={() => signOut({ callbackUrl: LOGIN })}
        >
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary={'Sair'} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};
