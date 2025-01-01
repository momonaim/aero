import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Lock, LockClock, Menu } from '@mui/icons-material';

import { useValue } from '../context/ContextProvider';
import photoURL from '../fsts.png';
import UserIcons from './user/UserIcons';
import Sidebar from './sidebar/Sidebar';

const user = { name: 'user', photoURL };

const NavBar = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useValue();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Menu Icon for Sidebar */}
            <Box sx={{ mr: 1 }}>
              <IconButton
                size="large"
                color="inherit"
                onClick={() => setIsOpen(true)}
              >
                <Menu />
              </IconButton>
            </Box>

            {/* Brand Name */}
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

            {/* Desktop Navigation Links */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 2,
              }}
            >
              <Button color="inherit">Home</Button>
              <Button color="inherit">Flights</Button>
              <Button color="inherit">Destinations</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact</Button>
            </Box>

            {/* Space between buttons */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                marginLeft: { md: 2, xs: 1 },
              }}
            >
              {/* Login/Logout Buttons */}
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
                  onClick={() =>
                    dispatch({ type: 'UPDATE_USER', payload: user })
                  }
                >
                  Login
                </Button>
              ) : (
                <UserIcons />
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Offset for fixed AppBar */}
      <Toolbar />
      {/* Sidebar Component */}
      <Sidebar {...{ isOpen, setIsOpen }} />
    </>
  );
};

export default NavBar;
