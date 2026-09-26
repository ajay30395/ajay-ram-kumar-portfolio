import React from 'react';
import {
  Box,
  Button,
  Chip,
  Container,
  Typography,
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

interface CareerTimelineProps {
  onContactClick: () => void;
}

const roles = [
  {
    period: 'Jul 2024 - Present',
    company: 'Tata Consultancy Services',
    title: 'IT Analyst',
    client: 'Walmart | Retail Operations & Enterprise Platforms',
    summary:
      'Building modular microsites, high-density back-office workflows, and payroll modules for Fortune 1 retail systems.',
    impact: '99.9% uptime through telemetry tracing, production RCA, and resilient state management.',
    stack: ['React.js', 'TypeScript', 'Redux Toolkit', 'Microservices'],
    current: true,
  },
  {
    period: 'May 2022 - Apr 2024',
    company: 'Terralogic Software Solutions',
    title: 'Software Engineer',
    client: 'Asato.ai, Tata Consumer Products, Blox & Popial',
    summary:
      'Shipped responsive web and mobile products spanning executive AI analytics, inventory operations, and high-performance Next.js platforms.',
    impact: 'Delivered offline-first workflows, reusable dashboard architecture, and SEO-ready SSR/SSG experiences.',
    stack: ['Next.js', 'React Native', 'Redux Toolkit', 'Firebase'],
    current: false,
  },
  {
    period: 'Jul 2017 - May 2022',
    company: 'Websitica Technologies',
    title: 'Senior Web Developer',
    client: 'Product platforms across retail, networking & mentorship',
    summary:
      'Designed and deployed full-stack web and mobile applications, backend services, cloud media systems, and real-time communication features.',
    impact: 'Scaled customer-facing products serving 50,000+ active users.',
    stack: ['Node.js', 'PHP', 'MySQL', 'AWS S3', 'Firebase'],
    current: false,
  },
];

export default function CareerTimeline({ onContactClick }: Readonly<CareerTimelineProps>) {
  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: { xs: 9, md: 14 },
        backgroundColor: '#F8FAFC',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: { xs: 180, md: 440 },
          height: { xs: 180, md: 440 },
          background: 'radial-gradient(circle at top right, rgba(33, 82, 255, 0.13) 0%, transparent 66%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            gap: 3,
            mb: { xs: 6, md: 9 },
          }}
        >
          <Box sx={{ maxWidth: 680 }}>
            <Typography
              variant="overline"
              sx={{
                display: 'block',
                color: '#2152FF',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.11em',
                mb: 1,
              }}
            >
              CAREER TRAJECTORY
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: '#0F172A',
                fontSize: { xs: '2.5rem', sm: '3.3rem', md: '4rem' },
                fontWeight: 850,
                letterSpacing: '-0.04em',
                lineHeight: 1.04,
              }}
            >
              Nine years of building systems that have to work.
            </Typography>
          </Box>

          <Button
            onClick={onContactClick}
            variant="outlined"
            endIcon={<ArrowOutwardIcon />}
            sx={{
              borderColor: '#0F172A',
              color: '#0F172A',
              minHeight: 44,
              flexShrink: 0,
              '&:hover': {
                borderColor: '#2152FF',
                backgroundColor: '#2152FF',
                color: '#FFFFFF',
              },
            }}
          >
            Let&apos;s Talk
          </Button>
        </Box>

        <Box sx={{ position: 'relative' }}>
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              width: 2,
              top: 8,
              bottom: 8,
              left: { xs: 15, md: 'calc(25% + 28px)' },
              background: 'linear-gradient(#2152FF 0%, #93C5FD 70%, #CBD5E1 100%)',
            }}
          />

          {roles.map((role) => (
            <Box
              key={role.company}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '32px minmax(0, 1fr)', md: '25% 56px minmax(0, 1fr)' },
                position: 'relative',
                pb: { xs: 5, md: 7 },
                '&:last-child': { pb: 0 },
              }}
            >
              <Box
                sx={{
                  gridColumn: { xs: 2, md: 1 },
                  pr: { md: 6 },
                  pb: { xs: 1.5, md: 0 },
                  textAlign: { md: 'right' },
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: role.current ? '#2152FF' : '#475569',
                    fontWeight: 800,
                    fontSize: { xs: '0.82rem', md: '0.95rem' },
                  }}
                >
                  {role.period}
                </Typography>
              </Box>

              <Box
                aria-hidden="true"
                sx={{
                  gridColumn: { xs: 1, md: 2 },
                  gridRow: { xs: 1, md: 'auto' },
                  display: 'flex',
                  justifyContent: 'center',
                  pt: { xs: 0.4, md: 0.15 },
                  zIndex: 1,
                }}
              >
                <Box
                  className={role.current ? 'timeline-current-node' : undefined}
                  sx={{
                    width: role.current ? 22 : 16,
                    height: role.current ? 22 : 16,
                    borderRadius: '50%',
                    backgroundColor: role.current ? '#2152FF' : '#F8FAFC',
                    border: role.current ? '5px solid #DBEAFE' : '3px solid #64748B',
                    boxShadow: role.current ? '0 0 0 6px rgba(33, 82, 255, 0.12)' : 'none',
                  }}
                />
              </Box>

              <Box
                sx={{
                  gridColumn: { xs: 2, md: 3 },
                  gridRow: { xs: 2, md: 'auto' },
                  py: { xs: 2.5, md: 3 },
                  px: { xs: 0, md: 3 },
                  ml: { md: 1 },
                  borderTop: '1px solid #CBD5E1',
                  backgroundColor: role.current ? 'rgba(255, 255, 255, 0.82)' : 'transparent',
                  borderRadius: role.current ? '16px' : 0,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 1.5,
                    mb: 1,
                  }}
                >
                  <Box>
                    <Typography variant="h5" sx={{ color: '#0F172A', fontWeight: 800, letterSpacing: '-0.02em' }}>
                      {role.company}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#2152FF', fontWeight: 700, mt: 0.25 }}>
                      {role.title}
                    </Typography>
                  </Box>
                  {role.current && (
                    <Chip
                      label="Current role"
                      size="small"
                      sx={{
                        color: '#1D4ED8',
                        backgroundColor: '#DBEAFE',
                        fontWeight: 800,
                      }}
                    />
                  )}
                </Box>

                <Typography variant="body2" sx={{ color: '#475569', fontWeight: 650, mb: 1.5 }}>
                  {role.client}
                </Typography>
                <Typography variant="body1" sx={{ color: '#334155', lineHeight: 1.65, maxWidth: 690 }}>
                  {role.summary}
                </Typography>
                <Typography variant="body2" sx={{ color: '#1E40AF', fontWeight: 700, lineHeight: 1.5, mt: 1.5 }}>
                  {role.impact}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2.5 }}>
                  {role.stack.map((technology) => (
                    <Chip
                      key={technology}
                      label={technology}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderColor: '#CBD5E1',
                        color: '#334155',
                        backgroundColor: '#FFFFFF',
                        fontWeight: 650,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
