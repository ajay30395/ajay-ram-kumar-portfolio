'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import DevicesIcon from '@mui/icons-material/Devices';
import CodeIcon from '@mui/icons-material/Code';
import LayersIcon from '@mui/icons-material/Layers';

interface ServicesSectionProps {
  onContactClick: () => void;
}

export default function ServicesSection({ onContactClick }: Readonly<ServicesSectionProps>) {
  const services = [
    {
      title: 'Full-Stack Web & Microsites',
      subtitle: "I'm expert in scalable frontend & micro-apps",
      icon: <DevicesIcon sx={{ fontSize: 32 }} />,
      theme: 'blue', // Electric Blue
      bullets: [
        'React.js & Next.js SSR/SSG Architecture',
        'Modular Microsite & Decoupled Deployments',
        'State Management with Redux Toolkit & Saga',
        'High-density Enterprise Data Grids',
      ],
    },
    {
      title: 'Web & Mobile App Engineering',
      subtitle: "I'm expert in web & mobile cross-platform",
      icon: <CodeIcon sx={{ fontSize: 32 }} />,
      theme: 'light',
      bullets: [
        'React Native Cross-Platform iOS & Android',
        'Offline-First Sync & Local Storage',
        'RESTful & GraphQL API Integrations',
        'Google Play / App Store Deployment Pipelines',
      ],
    },
    {
      title: 'Interface Design & AI Dashboards',
      subtitle: "I'm expert in design systems & enterprise tools",
      icon: <LayersIcon sx={{ fontSize: 32 }} />,
      theme: 'light',
      bullets: [
        'Executive Analytics & Asato.ai Copilot Dashboards',
        'Material-UI, Tailwind CSS & Ant Design Systems',
        'Production RCA Diagnostics & Telemetry',
        'Cloud Services (AWS S3, EC2 & GCP)',
      ],
    },
  ];

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative gradient glow bottom-left */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 320,
          height: 320,
          background: 'radial-gradient(circle, rgba(33, 82, 255, 0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            mb: { xs: 5, md: 8 },
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.8rem' },
              color: '#0F172A',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            All kind of coding <br />
            solution.
          </Typography>

          <Button
            variant="contained"
            onClick={onContactClick}
            endIcon={<ArrowOutwardIcon />}
            sx={{
              backgroundColor: '#2152FF',
              color: '#FFFFFF',
              fontWeight: 700,
              px: 3,
              py: 1.2,
              borderRadius: 9999,
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#1238C8',
              },
            }}
          >
            Let&apos;s Talk
          </Button>
        </Box>

        {/* 3 Cards Grid */}
        <Grid container spacing={3.5}>
          {services.map((service) => {
            const isBlue = service.theme === 'blue';
            return (
              <Grid size={{ xs: 12, md: 4 }} key={service.title}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '28px',
                    p: { xs: 3, sm: 4 },
                    backgroundColor: isBlue ? '#2152FF' : '#EEF2FF',
                    color: isBlue ? '#FFFFFF' : '#0F172A',
                    boxShadow: isBlue
                      ? '0 20px 40px -10px rgba(33, 82, 255, 0.45)'
                      : '0 4px 20px rgba(0, 0, 0, 0.02)',
                    border: isBlue ? 'none' : '1px solid #E2E8F0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                    {/* Top Icon */}
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '18px',
                        backgroundColor: isBlue ? 'rgba(255, 255, 255, 0.15)' : '#FFFFFF',
                        color: isBlue ? '#FFFFFF' : '#2152FF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        boxShadow: isBlue ? 'none' : '0 4px 12px rgba(0, 0, 0, 0.04)',
                      }}
                    >
                      {service.icon}
                    </Box>

                    {/* Service Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        fontSize: '1.45rem',
                        lineHeight: 1.25,
                        mb: 1.5,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: isBlue ? 'rgba(255, 255, 255, 0.8)' : '#64748B',
                        mb: 3,
                        fontWeight: 500,
                        fontSize: '0.9rem',
                      }}
                    >
                      {service.subtitle}
                    </Typography>

                    {/* Bullet List */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.6, mb: 4 }}>
                      {service.bullets.map((bullet) => (
                        <Box key={bullet} sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                          <CheckIcon
                            sx={{
                              fontSize: 16,
                              color: isBlue ? '#FFFFFF' : '#2152FF',
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 500,
                              fontSize: '0.88rem',
                              color: isBlue ? 'rgba(255, 255, 255, 0.95)' : '#334155',
                            }}
                          >
                            {bullet}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>

                  {/* Bottom Action Arrow */}
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 1 }}>
                    <IconButton
                      onClick={onContactClick}
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        backgroundColor: isBlue ? 'rgba(255, 255, 255, 0.2)' : '#FFFFFF',
                        color: isBlue ? '#FFFFFF' : '#0F172A',
                        border: isBlue ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid #CBD5E1',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: isBlue ? '#FFFFFF' : '#2152FF',
                          color: isBlue ? '#2152FF' : '#FFFFFF',
                        },
                      }}
                    >
                      <ArrowOutwardIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
