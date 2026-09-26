import React from 'react';
import { Box, Typography } from '@mui/material';

interface BrandLogoProps {
  compact?: boolean;
  inverse?: boolean;
}

export default function BrandLogo({
  compact = false,
  inverse = false,
}: Readonly<BrandLogoProps>) {
  const ink = inverse ? '#FFFFFF' : '#0F172A';
  const accent = inverse ? '#93C5FD' : '#2152FF';

  return (
    <Box
      aria-label="Ajay Ram Kumar"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        minWidth: compact ? 50 : 175,
        height: compact ? 34 : 42,
        position: 'relative',
      }}
    >
      <Typography
        component="span"
        sx={{
          color: ink,
          fontFamily: 'Allura, cursive',
          fontSize: compact ? '2.35rem' : '2.7rem',
          fontWeight: 400,
          letterSpacing: 0,
          lineHeight: 0.8,
          whiteSpace: 'nowrap',
          textShadow: inverse ? '0 2px 14px rgba(147, 197, 253, 0.25)' : '0 2px 10px rgba(15, 23, 42, 0.08)',
        }}
      >
        {compact ? (
          <>
            Ajay<Box component="span" sx={{ color: accent }}>.</Box>
          </>
        ) : (
          <>
            Ajay <Box component="span" sx={{ color: accent }}>Ram</Box> Kumar
          </>
        )}
      </Typography>
      {!compact && (
        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            right: -3,
            bottom: 0,
            width: 8,
            height: 8,
            backgroundColor: accent,
            clipPath: 'polygon(50% 0%, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0% 50%, 38% 38%)',
          }}
        />
      )}
    </Box>
  );
}
