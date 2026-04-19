// pages/Services.tsx
import React from 'react';
import { ServicesHero } from '../components/ServicesHero';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AthleteConsulting } from '../components/AthleteConsulting';
import { StartupConsulting } from '../components/StartupConsulting';
import { BusinessConsulting } from '../components/BusinessConsulting';
import { CustomConsulting } from '../components/CustomConsulting';

export const Services: React.FC = () => {
  return (
    <main className="min-h-screen">
        <Navbar/>
        <ServicesHero />
        <AthleteConsulting/>
        <StartupConsulting/>
        <BusinessConsulting/>
        <CustomConsulting/>
        <Footer/>
    </main>
  );
};