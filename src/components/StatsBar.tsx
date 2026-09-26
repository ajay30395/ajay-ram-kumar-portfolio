'use client';

import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

export default function StatsBar() {
  const stats = [
    { value: '9+', label: 'Years Experience' },
    { value: '50k+', label: 'Active Users Served' },
    { value: '15+', label: 'Enterprise Systems Built' },
    { value: '99.9%', label: 'Application Uptime Gate' },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 7 },
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          {stats.map((stat) => (
            <Grid size={{ xs: 6, md: 3 }} key={stat.label} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '2.5rem', sm: '3.2rem', md: '3.8rem' },
                  color: '#0F172A',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  display: 'inline-flex',
                  alignItems: 'baseline',
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#64748B',
                  fontWeight: 500,
                  mt: 1,
                  fontSize: { xs: '0.85rem', sm: '0.95rem' },
                }}
              >
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
