import { Box, Divider, IconButton, ListItemIcon, MenuItem, Tooltip, Typography } from "@mui/material";
import { Person, Logout } from '@mui/icons-material';
import { useState } from "react";
import { Avatar } from "../../../components";

import { UserMenu, UserWrapper } from './AccountMenu.styled';

export const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', textAlign: 'center' }}>
        <Tooltip title="Minha conta">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar acronym="GB" />
          </IconButton>
        </Tooltip>
      </Box>
      <UserMenu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <UserWrapper>
          <Typography variant="h4">Olá, Gabriel!</Typography>
          <Typography variant="body1">email@email.com</Typography>
        </UserWrapper>
        <Divider sx={{ mb: 1}}/>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          Perfil
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sair
        </MenuItem>
      </UserMenu>
    </>
  )
};
