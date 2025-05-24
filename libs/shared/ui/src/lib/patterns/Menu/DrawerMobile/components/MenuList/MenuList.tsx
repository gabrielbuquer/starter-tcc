import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Logout, Person } from '@mui/icons-material';
import { signOut } from 'next-auth/react';

import { getBaseUrls } from '@monetix/shared/config';

export const MenuList = () => {
  const { LOGIN } = getBaseUrls();
  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary={'Perfil'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
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
