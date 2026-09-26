'use client';

import React, { useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
  Tooltip,
} from '@mui/material';
import ThreeHeroCanvas from './ThreeHeroCanvas';
import HeroPortraitCard from './HeroPortraitCard';
import { RockAndRollBadge, StarburstBadge, CurvedUnderline } from './Doodles';
import { useGsapHeroAnimation } from '@/utils/useGsapAnimations';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: Readonly<HeroSectionProps>) {
  const titleRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGsapHeroAnimation(titleRef, badgeRef, contentRef);

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: 'relative',
        pt: { xs: 4, md: 8 },
        pb: { xs: 8, md: 12 },
        overflow: 'hidden',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Three.js 3D Interactive Canvas Layer */}
      <ThreeHeroCanvas />

      {/* Hero Glow & Radial Background */}
      <Box
        className="hero-glow-bg"
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
          {/* Top Left: Main Display Headline */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box ref={titleRef}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3.4rem', sm: '4.8rem', md: '5.8rem', lg: '6.4rem' },
                  fontWeight: 900,
                  color: '#0F172A',
                  lineHeight: 0.98,
                  letterSpacing: '-0.04em',
                }}
              >
                Full-Stack
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3.4rem', sm: '4.8rem', md: '5.8rem', lg: '6.4rem' },
                  fontWeight: 900,
                  color: '#2152FF',
                  lineHeight: 0.98,
                  letterSpacing: '-0.04em',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 1.5,
                }}
              >
                Coder &amp;
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3.4rem', sm: '4.8rem', md: '5.8rem', lg: '6.4rem' },
                  fontWeight: 900,
                  color: '#0F172A',
                  lineHeight: 0.98,
                  letterSpacing: '-0.04em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                more
                <Box
                  component="span"
                  sx={{
                    color: '#2152FF',
                    fontSize: { xs: '2.6rem', md: '4rem' },
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                >
                  +
                </Box>
              </Typography>
            </Box>

            {/* Let's Talk Pill Button */}
            <Box sx={{ mt: { xs: 3, md: 4 } }}>
              <Button
                variant="contained"
                onClick={onContactClick}
                sx={{
                  backgroundColor: '#2152FF',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  px: 3.5,
                  py: 1.4,
                  borderRadius: 9999,
                  boxShadow: '0 8px 24px rgba(33, 82, 255, 0.3)',
                  '&:hover': {
                    backgroundColor: '#1238C8',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.25s ease',
                }}
              >
                Let&apos;s Talk ↗
              </Button>
            </Box>
          </Grid>

          {/* Top Right: "LET'S ROCK & ROLL" Badge + Portrait Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: 'relative', textAlign: 'center' }}>
              {/* Rock & Roll Floating Badge */}
              <Box
                ref={badgeRef}
                sx={{
                  position: 'absolute',
                  top: { xs: -20, md: -10 },
                  right: { xs: 10, md: 30 },
                  zIndex: 10,
                }}
              >
                <RockAndRollBadge />
              </Box>

              {/* Developer Hero Portrait Card with 3D Tilt */}
              <HeroPortraitCard />
            </Box>
          </Grid>
        </Grid>

        {/* Lower Row: Intro Bio + Socials + Starburst Badge */}
        <Box
          ref={contentRef}
          sx={{
            mt: { xs: 6, md: 8 },
            pt: { xs: 4, md: 6 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            gap: 4,
          }}
        >
          {/* Bio text */}
          <Box sx={{ maxWidth: 680 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 800,
                color: '#64748B',
                letterSpacing: '0.08em',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 0.5,
              }}
            >
              HI, I&apos;M <span style={{ fontSize: '1.2rem' }}>👋</span>
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                color: '#0F172A',
                letterSpacing: '-0.03em',
                fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.6rem' },
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Ajay Ram Kumar
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                color: '#334155',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', sm: '1.28rem' },
              }}
            >
              I&apos;m a senior full stack developer with over{' '}
              <Box component="span" sx={{ position: 'relative', display: 'inline-block', fontWeight: 600, color: '#0F172A' }}>
                9+ years experience
                <CurvedUnderline color="#2152FF" width={170} />
              </Box>
              , architecting enterprise-scale applications for{' '}
              <Box component="span" sx={{ position: 'relative', display: 'inline-block', fontWeight: 600, color: '#0F172A' }}>
                Fortune 1 clients (Walmart)
                <CurvedUnderline color="#60A5FA" width={220} />
              </Box>{' '}
              and AI copilot platforms, based in Chennai, India.
            </Typography>

            {/* Social Links Row */}
            <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="caption" sx={{ fontWeight: 800, color: '#0F172A', letterSpacing: '0.05em' }}>
                Follow Me
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Tooltip title="LinkedIn: linkedin.com/in/ajay-ram-kumar">
                  <IconButton
                    component="a"
                    href="https://linkedin.com/in/ajay-ram-kumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: 38,
                      height: 38,
                      border: '1.5px solid #CBD5E1',
                      borderRadius: '50%',
                      color: '#0F172A',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      '&:hover': {
                        borderColor: '#2152FF',
                        backgroundColor: '#2152FF',
                        color: '#FFFFFF',
                      },
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Tooltip>

                <Tooltip title="GitHub">
                  <IconButton
                    component="a"
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: 38,
                      height: 38,
                      border: '1.5px solid #CBD5E1',
                      borderRadius: '50%',
                      color: '#0F172A',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      '&:hover': {
                        borderColor: '#2152FF',
                        backgroundColor: '#2152FF',
                        color: '#FFFFFF',
                      },
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Email: ajayramkumar@yahoo.com">
                  <IconButton
                    component="a"
                    href="mailto:ajayramkumar@yahoo.com"
                    sx={{
                      width: 38,
                      height: 38,
                      border: '1.5px solid #CBD5E1',
                      borderRadius: '50%',
                      color: '#0F172A',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      '&:hover': {
                        borderColor: '#2152FF',
                        backgroundColor: '#2152FF',
                        color: '#FFFFFF',
                      },
                    }}
                  >
                    <EmailIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Phone: +91 8608895002">
                  <IconButton
                    component="a"
                    href="tel:+918608895002"
                    sx={{
                      width: 38,
                      height: 38,
                      border: '1.5px solid #CBD5E1',
                      borderRadius: '50%',
                      color: '#0F172A',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      '&:hover': {
                        borderColor: '#2152FF',
                        backgroundColor: '#2152FF',
                        color: '#FFFFFF',
                      },
                    }}
                  >
                    <CodeIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Box>

          {/* Right Floating Starburst Badge */}
          <Box sx={{ alignSelf: { xs: 'center', md: 'flex-end' }, mb: { xs: 2, md: 0 } }}>
            <StarburstBadge onClick={onContactClick} size={150} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
