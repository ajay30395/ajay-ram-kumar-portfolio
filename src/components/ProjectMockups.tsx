'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

// Mockup 1: Enterprise Data Grid / Open Source Database Card
export function EnterpriseMockup() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 520,
        height: 340,
        borderRadius: '28px',
        backgroundColor: '#070D1E',
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(33, 82, 255, 0.35) 0%, transparent 60%)',
        boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.4), 0 0 30px rgba(33, 82, 255, 0.25)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        overflow: 'hidden',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        '&:hover': {
          transform: 'translateY(-6px) rotate(-0.5deg)',
          boxShadow: '0 30px 60px -12px rgba(15, 23, 42, 0.5), 0 0 45px rgba(33, 82, 255, 0.4)',
        },
      }}
    >
      {/* Top Browser / Window header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#EF4444' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#F59E0B' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10B981' }} />
          <Typography variant="caption" sx={{ color: '#94A3B8', ml: 1, fontFamily: 'monospace', fontSize: '0.75rem' }}>
            walmart-converge-bo.internal
          </Typography>
        </Box>
        <Box sx={{ px: 1.5, py: 0.4, borderRadius: 9999, backgroundColor: 'rgba(33,82,255,0.25)', border: '1px solid #2152FF' }}>
          <Typography variant="caption" sx={{ color: '#93C5FD', fontWeight: 700, fontSize: '0.7rem' }}>
            MICROSITE ACTIVE
          </Typography>
        </Box>
      </Box>

      {/* Main Bold Visual Title */}
      <Box sx={{ my: 'auto' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            color: '#FFFFFF',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            fontSize: { xs: '1.8rem', sm: '2.4rem' },
          }}
        >
          ENTERPRISE <br />
          <span style={{ color: '#38BDF8', textShadow: '0 0 20px rgba(56, 189, 248, 0.6)' }}>
            RETAIL SUITE
          </span>
        </Typography>
        <Typography variant="body2" sx={{ color: '#94A3B8', mt: 1, maxWidth: 360, fontSize: '0.85rem' }}>
          Real-time payroll state engine, high-density data tables, and automated incident RCA diagnostics.
        </Typography>
      </Box>

      {/* Mini data metrics bar */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1.5, pt: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <Box>
          <Typography variant="caption" sx={{ color: '#64748B', display: 'block', fontSize: '0.68rem' }}>
            UPTIME GATE
          </Typography>
          <Typography variant="body2" sx={{ color: '#34D399', fontWeight: 700 }}>
            99.98%
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" sx={{ color: '#64748B', display: 'block', fontSize: '0.68rem' }}>
            THROUGHPUT
          </Typography>
          <Typography variant="body2" sx={{ color: '#F8FAFC', fontWeight: 700 }}>
            2.4M req/day
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" sx={{ color: '#64748B', display: 'block', fontSize: '0.68rem' }}>
            STATE ARCH
          </Typography>
          <Typography variant="body2" sx={{ color: '#60A5FA', fontWeight: 700 }}>
            Redux Toolkit
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

// Mockup 2: Mobile Application Double Phone UI Mockup
export function MobileAppMockup() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 520,
        height: 340,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Phone 1 (Tilted Back Left) */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: '5%', sm: '12%' },
          top: '15px',
          width: 210,
          height: 310,
          borderRadius: '32px',
          backgroundColor: '#090D1A',
          border: '3px solid #1E293B',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          overflow: 'hidden',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transform: 'rotate(-6deg)',
          transition: 'transform 0.3s ease',
          zIndex: 1,
          '&:hover': { transform: 'rotate(-3deg) scale(1.02)' },
        }}
      >
        <Box sx={{ width: 40, height: 4, backgroundColor: '#334155', borderRadius: 9999, mx: 'auto', mb: 1 }} />
        <Box>
          <Typography variant="caption" sx={{ color: '#38BDF8', fontWeight: 800, fontSize: '0.65rem' }}>
            TATA INVENTORY MOBILE
          </Typography>
          <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 700, mt: 0.5, fontSize: '0.82rem', lineHeight: 1.2 }}>
            Offline-first stock tracking & fulfillment
          </Typography>
        </Box>
        <Box sx={{ p: 1.5, backgroundColor: 'rgba(33,82,255,0.15)', borderRadius: '16px', border: '1px solid rgba(33,82,255,0.3)' }}>
          <Typography variant="caption" sx={{ color: '#93C5FD', display: 'block', fontSize: '0.65rem' }}>
            Sync Status
          </Typography>
          <Typography variant="body2" sx={{ color: '#34D399', fontWeight: 700, fontSize: '0.75rem' }}>
            ● Instant SQLite Sync
          </Typography>
        </Box>
        <Box sx={{ py: 1, backgroundColor: '#2152FF', borderRadius: 9999, textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: '#FFFFFF', fontWeight: 800 }}>
            Dispatch Order ↗
          </Typography>
        </Box>
      </Box>

      {/* Phone 2 (Front Right) */}
      <Box
        sx={{
          position: 'absolute',
          right: { xs: '5%', sm: '12%' },
          bottom: '10px',
          width: 210,
          height: 310,
          borderRadius: '32px',
          backgroundColor: '#0F172A',
          border: '3px solid #334155',
          boxShadow: '0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(56, 189, 248, 0.25)',
          overflow: 'hidden',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transform: 'rotate(4deg)',
          transition: 'transform 0.3s ease',
          zIndex: 2,
          '&:hover': { transform: 'rotate(1deg) scale(1.02)' },
        }}
      >
        <Box sx={{ width: 40, height: 4, backgroundColor: '#475569', borderRadius: 9999, mx: 'auto', mb: 1 }} />
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="caption" sx={{ color: '#64748B', fontSize: '0.65rem' }}>
              ASATO.AI COPILOT
            </Typography>
            <Typography variant="caption" sx={{ color: '#38BDF8', fontWeight: 700 }}>
              v2.4
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 800, mt: 0.5, fontSize: '0.85rem' }}>
            Enterprise CIO Analytics
          </Typography>
        </Box>
        <Box sx={{ p: 1.5, backgroundColor: '#1E293B', borderRadius: '14px' }}>
          <Typography variant="caption" sx={{ color: '#94A3B8', fontSize: '0.65rem' }}>
            IT Spend Optimization
          </Typography>
          <Typography variant="h6" sx={{ color: '#F8FAFC', fontWeight: 800, fontSize: '1rem' }}>
            $38.7M
          </Typography>
          <Typography variant="caption" sx={{ color: '#34D399', fontWeight: 700, fontSize: '0.7rem' }}>
            ↑ +14.2% Saved
          </Typography>
        </Box>
        <Box sx={{ py: 1, backgroundColor: '#38BDF8', borderRadius: 9999, textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: '#0F172A', fontWeight: 800 }}>
            Inspect AI Insights ↗
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

// Mockup 3: Figma to Next.js / Algorithmic Dashboard
export function BrowserMockup() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 520,
        height: 340,
        borderRadius: '28px',
        backgroundColor: '#0A0F1D',
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(33, 82, 255, 0.25) 0%, transparent 70%)',
        boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.4), 0 0 35px rgba(33, 82, 255, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.4s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#EF4444' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#F59E0B' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10B981' }} />
          <Typography variant="caption" sx={{ color: '#94A3B8', ml: 1, fontFamily: 'monospace', fontSize: '0.75rem' }}>
            quant-trading-engine.ai
          </Typography>
        </Box>
        <Typography variant="caption" sx={{ color: '#38BDF8', fontWeight: 700, fontSize: '0.7rem' }}>
          WEBSOCKET LIVE
        </Typography>
      </Box>

      <Box sx={{ my: 'auto', textAlign: 'center', position: 'relative' }}>
        {/* Glowing concentric rings */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 200,
            height: 200,
            borderRadius: '50%',
            border: '1px solid rgba(33, 82, 255, 0.3)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 140,
            height: 140,
            borderRadius: '50%',
            border: '1px dashed rgba(56, 189, 248, 0.4)',
            pointerEvents: 'none',
          }}
        />

        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            fontSize: { xs: '1.4rem', sm: '1.8rem' },
          }}
        >
          Algorithmic Trading &amp; <br />
          <span style={{ color: '#60A5FA' }}>Quantitative Pipelines</span>
        </Typography>
        <Typography variant="body2" sx={{ color: '#94A3B8', mt: 1, fontSize: '0.85rem' }}>
          Sub-millisecond data execution, Python &amp; JavaScript backtesting models.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 2, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <Typography variant="caption" sx={{ color: '#94A3B8', fontFamily: 'monospace' }}>
          Backtest Sharpe: 2.84
        </Typography>
        <Box sx={{ px: 2, py: 0.6, borderRadius: 9999, backgroundColor: '#2152FF', color: '#FFFFFF' }}>
          <Typography variant="caption" sx={{ fontWeight: 800 }}>
            Live Stream ↗
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
