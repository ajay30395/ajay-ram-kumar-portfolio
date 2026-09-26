'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: Readonly<NavbarProps>) {
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <Box
      component="header"
      sx={{
        py: 2.5,
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(12px)',
        zIndex: 100,
        borderBottom: '1px solid rgba(226, 232, 240, 0.6)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo */}
          <Box
            component="a"
            href="#home"
            aria-label="Ajay Ram Kumar home"
            sx={{ display: 'flex', textDecoration: 'none' }}
          >
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <BrandLogo />
            </Box>
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
              <BrandLogo compact />
            </Box>
          </Box>

          {/* Center Pill Nav Bar (Desktop) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid #E2E8F0',
              borderRadius: 9999,
              p: '4px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
            }}
          >
            {navItems.slice(0, 4).map((item) => {
              const isActive = activeTab === item.label;
              return (
                <Box
                  key={item.label}
                  component="a"
                  href={item.href}
                  onClick={() => setActiveTab(item.label)}
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: 9999,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    color: isActive ? '#2152FF' : '#64748B',
                    border: isActive ? '1.5px solid #2152FF' : '1.5px solid transparent',
                    backgroundColor: isActive ? 'rgba(33, 82, 255, 0.04)' : 'transparent',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: '#2152FF',
                    },
                  }}
                >
                  {item.label}
                </Box>
              );
            })}
          </Box>

          {/* Right Action Button */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Button
              variant="outlined"
              onClick={onContactClick}
              sx={{
                borderRadius: 9999,
                borderColor: '#0F172A',
                color: '#0F172A',
                fontWeight: 700,
                fontSize: '0.88rem',
                px: 2.8,
                py: 0.9,
                '&:hover': {
                  borderColor: '#2152FF',
                  backgroundColor: '#2152FF',
                  color: '#FFFFFF',
                },
              }}
            >
              Let&apos;s Talk ↗
            </Button>

            {/* Mobile Hamburger */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#0F172A' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 280, p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <BrandLogo />
            <IconButton onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  component="a"
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.label);
                    setMobileOpen(false);
                  }}
                  sx={{ borderRadius: '12px' }}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: {
                        sx: {
                          fontWeight: activeTab === item.label ? 700 : 500,
                          color: activeTab === item.label ? '#2152FF' : '#0F172A',
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              setMobileOpen(false);
              onContactClick();
            }}
            sx={{
              mt: 3,
              borderRadius: 9999,
              backgroundColor: '#2152FF',
              fontWeight: 700,
            }}
          >
            Let&apos;s Talk ↗
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
