'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  IconButton,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BrandLogo from './BrandLogo';

interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: Readonly<FooterProps>) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        pt: { xs: 8, md: 12 },
        pb: 4,
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle blue bottom spray glow */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: '25%',
          width: 380,
          height: 180,
          background: 'radial-gradient(circle, rgba(33, 82, 255, 0.12) 0%, transparent 70%)',
          filter: 'blur(35px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 5, md: 8 }} sx={{ justifyContent: 'space-between' }}>
          {/* Left Column: Brand & Tagline */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 3 }}>
              <BrandLogo />
            </Box>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.6rem', md: '3rem' },
                color: '#0F172A',
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                mb: 3,
                maxWidth: 480,
              }}
            >
              Today, improve your business with quality.
            </Typography>

            <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.7, maxWidth: 440 }}>
              Ajay Ram Kumar H C — Senior Full Stack Developer &amp; Architect. <br />
              Based in Chennai, India. Available worldwide for remote and enterprise engagements.
            </Typography>
            <Typography variant="body2" sx={{ color: '#0F172A', fontWeight: 600, mt: 1 }}>
              ajayramkumar@yahoo.com • +91 8608895002
            </Typography>
            <Box sx={{ mt: 1.5 }}>
              <Button
                variant="text"
                onClick={onContactClick}
                sx={{
                  color: '#2152FF',
                  fontWeight: 700,
                  p: 0,
                  fontSize: '0.9rem',
                  '&:hover': { background: 'none', textDecoration: 'underline' },
                }}
              >
                Start a conversation ↗
              </Button>
            </Box>
          </Grid>

          {/* Right Column: Newsletter & Socials */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
              Join Our Newsletter
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubscribe}
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #0F172A',
                borderRadius: '12px',
                p: '4px',
                maxWidth: 420,
                mb: 3,
              }}
            >
              <TextField
                variant="standard"
                placeholder="rakabir@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                slotProps={{
                  input: {
                    disableUnderline: true,
                    sx: { px: 2, fontSize: '0.9rem', color: '#0F172A' },
                  },
                }}
                fullWidth
              />
              <IconButton
                type="submit"
                sx={{
                  backgroundColor: '#0F172A',
                  color: '#FFFFFF',
                  borderRadius: '8px',
                  width: 40,
                  height: 40,
                  '&:hover': {
                    backgroundColor: '#2152FF',
                  },
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>

            {/* Circular Social Buttons */}
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {[
                { label: 'In', icon: <LinkedInIcon sx={{ fontSize: 16 }} />, href: 'https://linkedin.com/in/ajay-ram-kumar' },
                { label: 'Gh', icon: <GitHubIcon sx={{ fontSize: 16 }} />, href: 'https://github.com' },
                { label: 'Ml', icon: <EmailIcon sx={{ fontSize: 16 }} />, href: 'mailto:ajayramkumar@yahoo.com' },
                { label: 'Ph', icon: <PhoneIcon sx={{ fontSize: 16 }} />, href: 'tel:+918608895002' },
              ].map((s) => (
                <IconButton
                  key={s.label}
                  component="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    border: '1.5px solid #CBD5E1',
                    color: '#0F172A',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#2152FF',
                      borderColor: '#2152FF',
                      color: '#FFFFFF',
                    },
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar Divider */}
        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            pt: 4,
            borderTop: '1px solid #E2E8F0',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 500 }}>
            @2026. All Right Reserved. Designed &amp; Engineered by <strong>Ajay Ram Kumar</strong>
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            {['About', 'Work', 'Experience', 'Contact'].map((item) => (
              <Typography
                key={item}
                component="a"
                href={`#${item.toLowerCase()}`}
                variant="caption"
                sx={{
                  color: '#64748B',
                  fontWeight: 600,
                  textDecoration: 'none',
                  '&:hover': { color: '#2152FF' },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={subscribed}
        autoHideDuration={4000}
        onClose={() => setSubscribed(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ borderRadius: '16px' }}>
          Thank you for subscribing to updates!
        </Alert>
      </Snackbar>
    </Box>
  );
}
