import React from 'react'
import { Navbar } from './Navbar.jsx';
import { HeroSection } from './HeroSection.jsx';
import { BrandBanners } from './BrandBanners.jsx';

export const HomeSection = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <BrandBanners />
    </div>
    
  )
};
