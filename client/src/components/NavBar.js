import React, { useState } from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { Lock, LockClock, Mail, Menu, Notifications } from '@mui/icons-material';

import { useValue } from '../context/ContextProvider';
// import UserIcons from './user/UserIcons';
// import Sidebar from './sidebar/Sidebar';
import photoURL from '../fsts.png'
import UserMenu from './user/UserMenu';
import UserIcons from './user/UserIcons';


const user = { name: 'user', photoURL }
const NavBar = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useValue();



  const [anchorUserMenu, setAnchorUserMenu] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ mr: 1 }}>
              <IconButton
                size="large"
                color="inherit"
                onClick={() => setIsOpen(true)}
              >
                <Menu />
              </IconButton>
            </Box>
            <Typography
              variant="h6"
              component="h1"
              noWrap
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            >
              You Are Welcome
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              noWrap
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              YRW
            </Typography>
            <Button
              color="inherit"
              startIcon={<LockClock />}
              onClick={() => dispatch({ type: 'OPEN_LOGIN' })}
            >
              LG
            </Button>
            {!currentUser ? (
              <Button
                color="inherit"
                startIcon={<Lock />}
                onClick={() => dispatch({ type: 'UPDATE_USER', payload: user })}
              >
                Login
              </Button>
            ) : (
              <UserIcons />
              // <Box>
              //   <IconButton size="large" color="inherit">
              //     <Badge color="error" badgeContent={5}>
              //       <Mail />
              //     </Badge>
              //   </IconButton>
              //   <IconButton size="large" color="inherit">
              //     <Badge color="error" badgeContent={20}>
              //       <Notifications />
              //     </Badge>
              //   </IconButton>
              //   <Tooltip title="Open User Settings">
              //     <IconButton onClick={(e) => {
              //       // currentUser = user
              //       console.log(currentUser)
              //       dispatch({ type: 'UPDATE_USER', payload: null })
              //     }
              //     }>
              //       <Avatar src={currentUser?.photoURL} alt={currentUser?.name}>
              //         {currentUser?.name?.charAt(0).toUpperCase()}
              //       </Avatar>
              //     </IconButton>
              //   </Tooltip>
              //   <UserMenu {...{ anchorUserMenu, setAnchorUserMenu }} />
              // </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      {/* <Sidebar {...{ isOpen, setIsOpen }} /> */}
    </>
  );
};

export default NavBar;
