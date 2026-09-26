'use client';

import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Chip,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

export interface ProjectData {
  title: string;
  category: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tags: string[];
  impact: string;
  techStack: string[];
  mockupType: 'grid' | 'mobile' | 'code' | 'dashboard';
}

interface ProjectDetailModalProps {
  project: ProjectData | null;
  open: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export default function ProjectDetailModal({
  project,
  open,
  onClose,
  onContactClick,
}: Readonly<ProjectDetailModalProps>) {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: '28px',
            padding: '12px',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.25)',
          },
        },
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Chip
            label={project.category}
            size="small"
            sx={{
              backgroundColor: '#EFF6FF',
              color: '#2152FF',
              fontWeight: 700,
              fontSize: '0.75rem',
              mb: 1,
            }}
          />
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F172A', fontSize: { xs: '1.5rem', sm: '1.9rem' } }}>
            {project.title}
          </Typography>
        </Box>
        <IconButton
          onClick={onClose}
          sx={{
            backgroundColor: '#F1F5F9',
            '&:hover': { backgroundColor: '#E2E8F0' },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ py: 3, borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9' }}>
        <Typography variant="subtitle1" sx={{ color: '#475569', mb: 3, fontWeight: 500 }}>
          {project.subtitle}
        </Typography>

        <Box sx={{ p: 2.5, backgroundColor: '#F8FAFC', borderRadius: '20px', mb: 3, border: '1px solid #E2E8F0' }}>
          <Typography variant="overline" sx={{ fontWeight: 800, color: '#2152FF', letterSpacing: '0.08em' }}>
            KEY ARCHITECTURAL HIGHLIGHTS
          </Typography>
          <Box sx={{ mt: 1.5, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {project.bullets.map((bullet) => (
              <Box key={bullet} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <CheckCircleOutlinedIcon sx={{ color: '#2152FF', fontSize: 20, mt: 0.3 }} />
                <Typography variant="body2" sx={{ color: '#334155', lineHeight: 1.6 }}>
                  {bullet}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: '#0F172A' }}>
            Technologies & Tools
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {project.techStack.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                variant="outlined"
                sx={{
                  borderColor: '#CBD5E1',
                  color: '#1E293B',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                }}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ p: 2, backgroundColor: '#EFF6FF', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="caption" sx={{ fontWeight: 700, color: '#1E40AF', display: 'block' }}>
              IMPACT / METRICS
            </Typography>
            <Typography variant="body2" sx={{ color: '#1E3A8A', fontWeight: 600 }}>
              {project.impact}
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              onClose();
              onContactClick();
            }}
            endIcon={<LaunchIcon sx={{ fontSize: 14 }} />}
            sx={{
              borderRadius: 9999,
              backgroundColor: '#2152FF',
              fontWeight: 700,
              px: 2.5,
            }}
          >
            Inquire Details
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
