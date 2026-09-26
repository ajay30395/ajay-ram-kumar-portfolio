'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { SpringCoil, StarburstBadge } from './Doodles';

interface CtaSectionProps {
  onContactClick: () => void;
}

export default function CtaSection({ onContactClick }: Readonly<CtaSectionProps>) {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Main Title */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            fontSize: { xs: '2.8rem', sm: '3.8rem', md: '4.8rem' },
            color: '#0F172A',
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            mb: { xs: 6, md: 8 },
          }}
        >
          Anything in Mind? <br />
          <span style={{ color: '#0F172A' }}>Let&apos;s Talk</span>
        </Typography>

        {/* Coiled springs on sides + Center Starburst Badge */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            maxWidth: 820,
            mx: 'auto',
          }}
        >
          {/* Left Spring Doodle */}
          <Box
            sx={{
              width: { xs: 100, sm: 160, md: 220 },
              opacity: 0.85,
              transform: 'scaleX(-1)',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <SpringCoil />
          </Box>

          {/* Center Dark Starburst Stamp */}
          <Box sx={{ mx: { xs: 2, sm: 4 } }}>
            <StarburstBadge onClick={onContactClick} size={160} />
          </Box>

          {/* Right Spring Doodle */}
          <Box
            sx={{
              width: { xs: 100, sm: 160, md: 220 },
              opacity: 0.85,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <SpringCoil />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
