// pages/About.tsx
import React from 'react';
import { OurStory } from '../components/OurStory';
import { OurApproach } from '../components/OurApproach';
import { CoreValues } from '../components/CoreValues';
import { Team } from '../components/Team';

export const About: React.FC = () => {
  return (
    <main className="min-h-screen">
      <OurStory/>
      <OurApproach/>
      <CoreValues/>
      <Team/>
    </main>
  );
};

export default About;