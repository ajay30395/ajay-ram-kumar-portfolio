'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { SquigglyArrow } from './Doodles';
import { EnterpriseMockup, MobileAppMockup, BrowserMockup } from './ProjectMockups';
import ProjectDetailModal, { ProjectData } from './ProjectDetailModal';

interface ProjectsSectionProps {
  onContactClick: () => void;
}

export default function ProjectsSection({ onContactClick }: Readonly<ProjectsSectionProps>) {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      title: 'Walmart Converge Microsite & UIP Back Office',
      category: 'Enterprise Retail Architecture',
      subtitle: 'Modular microsite architecture for Fortune 1 retail workflows and mission-critical payroll systems.',
      description: 'Architected and engineered high-density data tables, administrative control consoles, and payroll calculation engines at Tata Consultancy Services for Walmart.',
      bullets: [
        'Architected decoupled UI components for the Converge Microsite enabling lightweight, independent deployments.',
        'Engineered enterprise back-office capabilities within UIP Converge BO using React.js, TypeScript, and Redux Toolkit.',
        'Developed core Payroll System Modules with salary structure computations, tax deduction views, and complex validation forms.',
        'Maintained 99.9% application uptime via live telemetry tracing and root-cause analysis (RCA).',
      ],
      tags: ['React.js', 'TypeScript', 'Redux Toolkit', 'Microsites', 'REST APIs'],
      impact: '99.9% Uptime Gate • 2.4M Daily Transactions • Fortune 1 Retail Scale',
      techStack: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'RESTful Microservices', 'Rally', 'Jira'],
      mockupType: 'grid',
    },
    {
      title: 'Tata Consumer Products & Asato.ai Mobile Ecosystem',
      category: 'Cross-Platform Mobile Engineering',
      subtitle: 'Offline-first internal inventory and order tracking app + AI Copilot for Enterprise IT Executives.',
      description: 'Delivered cross-platform mobile solutions with offline SQLite data persistence, real-time sync, and enterprise analytics dashboards.',
      bullets: [
        'Built cross-platform internal inventory and order tracking application for Tata Consumer Products using React Native.',
        'Developed offline-first form validation, dynamic routing, and instant SQLite synchronization.',
        'Created executive analytics dashboard for Asato.ai (Enterprise CIO AI Copilot) with reusable Higher-Order Components (HOCs).',
        'Implemented scheduled push notification pipelines and Google Play Store billing flows.',
      ],
      tags: ['React Native', 'Offline-First', 'SQLite', 'HOC Architecture', 'Asato.ai'],
      impact: '50k+ Active Mobile Users • Sub-second Local Queries • Seamless Offline Workflows',
      techStack: ['React Native', 'React Native Elements', 'SQLite', 'Redux-Saga', 'Firebase', 'Chart.js'],
      mockupType: 'mobile',
    },
    {
      title: 'Algorithmic Trading & Full-Stack Cloud Platforms',
      category: 'Fintech & Modern Web Apps',
      subtitle: 'Quantitative trading strategies, backtesting pipelines, and high-performance SSR/SSG web platforms.',
      description: 'Engineered custom quantitative pipelines and performant modern platforms for Blox (real estate) and Popial (influencer marketing).',
      bullets: [
        'Developed custom quantitative trading strategies and backtesting pipelines using Python, JavaScript, and WebSockets.',
        'Delivered high-performance SSR/SSG pages for Blox and Popial using Next.js, Tailwind CSS, and Ant Design.',
        'Optimized Time to Interactive (TTI), Core Web Vitals, and accessibility across all web surfaces.',
        'Integrated secure cloud media storage on AWS S3 and real-time user messaging with Google Firebase.',
      ],
      tags: ['Next.js', 'Python', 'WebSockets', 'AWS S3', 'Three.js'],
      impact: 'Top Tier Core Web Vitals (98+ Lighthouse) • Low-latency Data Feeds',
      techStack: ['Next.js', 'Python', 'Tailwind CSS', 'Ant Design', 'AWS S3', 'MySQL', 'Three.js'],
      mockupType: 'dashboard',
    },
  ];

  return (
    <Box
      id="work"
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        backgroundColor: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'flex-end' },
            mb: { xs: 6, md: 10 },
            gap: 2,
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
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
                Explore My Top <br />
                Creations
              </Typography>
              <Box sx={{ mt: 'auto', mb: 1 }}>
                <SquigglyArrow />
              </Box>
            </Box>
          </Box>

          <Button
            variant="contained"
            onClick={() => setSelectedProject(projects[0])}
            endIcon={<ArrowOutwardIcon />}
            sx={{
              backgroundColor: '#2152FF',
              color: '#FFFFFF',
              fontWeight: 700,
              px: 3,
              py: 1.2,
              borderRadius: 9999,
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#1238C8' },
            }}
          >
            View Work
          </Button>
        </Box>

        {/* Project 1: Text Left, Mockup Right */}
        <Box sx={{ mb: { xs: 8, md: 14 }, pt: 2, borderTop: '1px solid #E2E8F0' }}>
          <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="overline"
                sx={{
                  color: '#64748B',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  fontSize: '0.82rem',
                }}
              >
                {projects[0].category}
              </Typography>
              <Typography
                variant="h3"
                onClick={() => setSelectedProject(projects[0])}
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.8rem', sm: '2.4rem', md: '2.8rem' },
                  color: '#0F172A',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  mt: 1,
                  mb: 3,
                  cursor: 'pointer',
                  '&:hover': { color: '#2152FF' },
                  transition: 'color 0.2s ease',
                }}
              >
                {projects[0].title}.
              </Typography>

              <IconButton
                onClick={() => setSelectedProject(projects[0])}
                sx={{
                  width: 52,
                  height: 52,
                  border: '1.5px solid #CBD5E1',
                  borderRadius: '50%',
                  color: '#0F172A',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: '#2152FF',
                    borderColor: '#2152FF',
                    color: '#FFFFFF',
                    transform: 'translate(3px, -3px)',
                  },
                }}
              >
                <ArrowOutwardIcon sx={{ fontSize: 24 }} />
              </IconButton>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <EnterpriseMockup />
            </Grid>
          </Grid>
        </Box>

        {/* Project 2: Mockup Left, Text Right (Alternating) */}
        <Box sx={{ mb: { xs: 8, md: 14 }, pt: 4, borderTop: '1px solid #E2E8F0' }}>
          <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 2, md: 1 } }}>
              <MobileAppMockup />
            </Grid>
            <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 1, md: 2 } }}>
              <Typography
                variant="overline"
                sx={{
                  color: '#64748B',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  fontSize: '0.82rem',
                }}
              >
                {projects[1].category}
              </Typography>
              <Typography
                variant="h3"
                onClick={() => setSelectedProject(projects[1])}
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.8rem', sm: '2.4rem', md: '2.8rem' },
                  color: '#0F172A',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  mt: 1,
                  mb: 3,
                  cursor: 'pointer',
                  '&:hover': { color: '#2152FF' },
                  transition: 'color 0.2s ease',
                }}
              >
                {projects[1].title}.
              </Typography>

              <IconButton
                onClick={() => setSelectedProject(projects[1])}
                sx={{
                  width: 52,
                  height: 52,
                  border: '1.5px solid #CBD5E1',
                  borderRadius: '50%',
                  color: '#0F172A',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: '#2152FF',
                    borderColor: '#2152FF',
                    color: '#FFFFFF',
                    transform: 'translate(3px, -3px)',
                  },
                }}
              >
                <ArrowOutwardIcon sx={{ fontSize: 24 }} />
              </IconButton>
            </Grid>
          </Grid>
        </Box>

        {/* Project 3: Text Left, Mockup Right */}
        <Box sx={{ pt: 4, borderTop: '1px solid #E2E8F0' }}>
          <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="overline"
                sx={{
                  color: '#64748B',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  fontSize: '0.82rem',
                }}
              >
                {projects[2].category}
              </Typography>
              <Typography
                variant="h3"
                onClick={() => setSelectedProject(projects[2])}
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.8rem', sm: '2.4rem', md: '2.8rem' },
                  color: '#0F172A',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  mt: 1,
                  mb: 3,
                  cursor: 'pointer',
                  '&:hover': { color: '#2152FF' },
                  transition: 'color 0.2s ease',
                }}
              >
                {projects[2].title}.
              </Typography>

              <IconButton
                onClick={() => setSelectedProject(projects[2])}
                sx={{
                  width: 52,
                  height: 52,
                  border: '1.5px solid #CBD5E1',
                  borderRadius: '50%',
                  color: '#0F172A',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: '#2152FF',
                    borderColor: '#2152FF',
                    color: '#FFFFFF',
                    transform: 'translate(3px, -3px)',
                  },
                }}
              >
                <ArrowOutwardIcon sx={{ fontSize: 24 }} />
              </IconButton>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <BrowserMockup />
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Detail Dialog */}
      <ProjectDetailModal
        project={selectedProject}
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        onContactClick={onContactClick}
      />
    </Box>
  );
}
