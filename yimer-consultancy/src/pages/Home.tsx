// pages/Home.tsx
import React from 'react';
import { Hero } from '../components/Hero';
import { WhoWeHelp } from '../components/WhoWeHelp';
import { WhatWeDo } from '../components/WhatWeDo';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { SuccessHighlights } from '../components/SuccessHighlights';
import { CallToAction } from '../components/CallToAction';

export const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatWeDo />
      <WhoWeHelp />
      <WhyChooseUs />
      <SuccessHighlights />
      <CallToAction />
    </main>
  );
};

export default Home;