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
  Avatar,
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { SquigglyArrow } from './Doodles';

interface TestimonialsSectionProps {
  onContactClick: () => void;
}

export default function TestimonialsSection({ onContactClick }: Readonly<TestimonialsSectionProps>) {
  const testimonials = [
    {
      quote:
        'Game-changer! Engineered modular UI components for Walmart Converge that boosted team efficiency and streamlined cross-retail workflows. Highly recommended!',
      author: 'Rashes Ka',
      role: 'Engineering Lead, Retail Operations',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    },
    {
      quote:
        'Quick solutions coupled with great performance—a recommendation that’s unequivocal. Ajay delivered our executive AI copilot dashboard with flawless precision.',
      author: 'Shamol Cina',
      role: 'VP of Engineering & Product Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    },
  ];

  const clientLogos = [
    { name: 'Walmart', font: 'system-ui, sans-serif', weight: 800 },
    { name: 'TCS', font: 'system-ui, sans-serif', weight: 700 },
    { name: 'Tata Products', font: 'Georgia, serif', weight: 600 },
    { name: 'Asato.ai', font: 'monospace', weight: 800 },
    { name: 'Blox Real Estate', font: 'sans-serif', weight: 700 },
    { name: 'Popial', font: 'sans-serif', weight: 800 },
    { name: 'AWS Cloud', font: 'sans-serif', weight: 700 },
  ];

  return (
    <Box
      id="feedback"
      component="section"
      sx={{
        backgroundColor: '#2152FF',
        color: '#FFFFFF',
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow and subtle dots */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'flex-end' },
            mb: { xs: 6, md: 8 },
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.8rem' },
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
              }}
            >
              See My Client <br />
              Feedback
            </Typography>
            <Box sx={{ mt: 'auto', mb: 1, filter: 'invert(1)' }}>
              <SquigglyArrow />
            </Box>
          </Box>

          <Button
            variant="outlined"
            onClick={onContactClick}
            endIcon={<ArrowOutwardIcon />}
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.4)',
              color: '#FFFFFF',
              fontWeight: 700,
              px: 3,
              py: 1.2,
              borderRadius: 9999,
              '&:hover': {
                borderColor: '#FFFFFF',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Let&apos;s Talk
          </Button>
        </Box>

        {/* Testimonial Cards */}
        <Grid container spacing={3.5} sx={{ mb: { xs: 8, md: 12 } }}>
          {testimonials.map((item) => (
            <Grid size={{ xs: 12, md: 6 }} key={item.author}>
              <Card
                sx={{
                  borderRadius: '28px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  p: { xs: 3.5, sm: 4.5 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  },
                }}
              >
                <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                  {/* Quote icon */}
                  <FormatQuoteIcon
                    sx={{
                      fontSize: 44,
                      color: 'rgba(255, 255, 255, 0.6)',
                      transform: 'rotate(180deg)',
                      mb: 2,
                    }}
                  />

                  <Typography
                    variant="body1"
                    sx={{
                      color: '#FFFFFF',
                      fontSize: { xs: '1.05rem', sm: '1.2rem' },
                      lineHeight: 1.6,
                      fontWeight: 400,
                      mb: 4,
                    }}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </Typography>
                </CardContent>

                {/* Author Info */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
                      {item.author}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.8rem' }}>
                      {item.role}
                    </Typography>
                  </Box>
                  <Avatar
                    src={item.avatar}
                    alt={item.author}
                    sx={{ width: 48, height: 48, border: '2px solid rgba(255, 255, 255, 0.6)' }}
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Client Logos Row */}
        <Box
          sx={{
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'space-between' },
            gap: 4,
          }}
        >
          {clientLogos.map((client) => (
            <Typography
              key={client.name}
              sx={{
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                fontWeight: client.weight,
                fontFamily: client.font,
                letterSpacing: '-0.03em',
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: '#FFFFFF',
                  transform: 'scale(1.08)',
                },
              }}
            >
              {client.name}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
