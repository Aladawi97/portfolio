import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../assets/logo.png';

const sections = [
  { label: 'Home', id: 'home' },
  { label: 'About Me', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact Me', id: 'contact' },
];

export default function NavBar() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    handleCloseMenu();
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 10 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: '#242424',
          boxShadow: 'none',
          color: '#ffffff',
          borderBottom: 'none',
          backdropFilter: 'none',
        }}
      >
        <Toolbar>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <img src={logo} alt="logo" style={{ width: 80, height: 70 }} />
          </Box>

          {/* Mobile menu icon */}
          {isMobile && (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: 'auto' }}
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                {sections.map((section) => (
                  <MenuItem
                    key={section.id}
                    onClick={() => handleScroll(section.id)}
                    sx={{ fontWeight: 500, letterSpacing: 1 }}
                  >
                    {section.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}

          {/* Desktop buttons */}
          {!isMobile && (
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              {sections.map((section) => (
                <Button
                  key={section.id}
                  color="inherit"
                  onClick={() => handleScroll(section.id)}
                  sx={{
                    fontWeight: 500,
                    letterSpacing: 1,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {section.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Spacer to prevent content hiding behind navbar */}
      <Box sx={{ height: { xs: 64, sm: 70 } }} />
    </Box>
  );
}
