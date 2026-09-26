'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import CareerTimeline from '@/components/CareerTimeline';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#0F172A' }}>
      <Navbar onContactClick={() => setContactOpen(true)} />
      <main>
        <HeroSection onContactClick={() => setContactOpen(true)} />
        <StatsBar />
        <ServicesSection onContactClick={() => setContactOpen(true)} />
        <ProjectsSection onContactClick={() => setContactOpen(true)} />
        <CareerTimeline onContactClick={() => setContactOpen(true)} />
        <TestimonialsSection onContactClick={() => setContactOpen(true)} />
        <CtaSection onContactClick={() => setContactOpen(true)} />
      </main>
      <Footer onContactClick={() => setContactOpen(true)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </Box>
  );
}
