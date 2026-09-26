'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  Alert,
  Chip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import confetti from 'canvas-confetti';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: Readonly<ContactModalProps>) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web & Micro-frontend',
    budget: '$5k - $15k',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitted(true);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2152FF', '#38BDF8', '#818CF8', '#10B981'],
      });
    }

    setTimeout(() => {
      // Reset after a delay
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setFormData({
          name: '',
          email: '',
          projectType: 'Web & Micro-frontend',
          budget: '$5k - $15k',
          message: '',
        });
      }, 2500);
    }, 500);
  };

  const projectTypes = [
    'Web & Micro-frontend',
    'Enterprise System / BO',
    'Mobile Application',
    'AI Copilot / Dashboard',
    'Cloud / API Architecture',
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: '28px',
            padding: '16px',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.25)',
          },
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h5" component="div" sx={{ fontWeight: 800, color: '#0F172A' }}>
            Let&apos;s build something great.
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748B', mt: 0.5 }}>
            Reach out to Ajay Ram Kumar for high-scale frontend, full-stack or mobile engineering.
          </Typography>
        </Box>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: (theme) => theme.palette.grey[500],
            backgroundColor: '#F1F5F9',
            '&:hover': { backgroundColor: '#E2E8F0' },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent dividers sx={{ py: 3, borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9' }}>
          {submitted ? (
            <Alert severity="success" sx={{ mb: 2, borderRadius: '16px' }}>
              Thank you! Your inquiry has been sent to Ajay Ram Kumar (ajayramkumar@yahoo.com). Expect a response within 24 hours.
            </Alert>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Box>
                <Typography variant="caption" sx={{ fontWeight: 700, color: '#475569', mb: 1, display: 'block' }}>
                  PROJECT TYPE
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {projectTypes.map((type) => (
                    <Chip
                      key={type}
                      label={type}
                      clickable
                      color={formData.projectType === type ? 'primary' : 'default'}
                      variant={formData.projectType === type ? 'filled' : 'outlined'}
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      sx={{
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        borderColor: '#E2E8F0',
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <TextField
                label="Your Name / Company"
                variant="outlined"
                fullWidth
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '14px' } }}
              />

              <TextField
                label="Your Email Address"
                type="email"
                variant="outlined"
                fullWidth
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '14px' } }}
              />

              <TextField
                label="Project Details & Timeline"
                multiline
                rows={3}
                variant="outlined"
                fullWidth
                placeholder="Tell me about your product, requirements, and tech stack..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '14px' } }}
              />

              <Box sx={{ p: 2, backgroundColor: '#F8FAFC', borderRadius: '16px', border: '1px dashed #CBD5E1' }}>
                <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                  Direct contact: <strong>ajayramkumar@yahoo.com</strong> • Phone: <strong>+91 8608895002</strong> • Location: <strong>Chennai, India</strong>
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>

        <DialogActions sx={{ p: 2.5 }}>
          <Button onClick={onClose} sx={{ color: '#64748B', borderRadius: 9999 }}>
            Cancel
          </Button>
          {!submitted && (
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon sx={{ fontSize: 16 }} />}
              sx={{
                borderRadius: 9999,
                px: 3.5,
                py: 1.2,
                backgroundColor: '#2152FF',
                '&:hover': { backgroundColor: '#133CD8' },
              }}
            >
              Send Message
            </Button>
          )}
        </DialogActions>
      </form>
    </Dialog>
  );
}
