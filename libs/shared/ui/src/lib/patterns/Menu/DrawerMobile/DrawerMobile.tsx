import { useState } from "react"

import { Drawer, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { MenuList } from "./components";

export const DrawerMobile = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <Menu />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <MenuList />
        </Box>
      </Drawer>
    </div>
  );
}
