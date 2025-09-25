import React from 'react'
import { Navbar } from './Navbar.jsx';
import { HeroSection } from './HeroSection.jsx';
import { BrandBanners } from './BrandBanners.jsx';
import { Hero } from './Hero-Section.jsx';
import {Faq} from './Faq.jsx';
import { Footer } from './Footer.jsx';

export const HomeSection = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <BrandBanners />
        <HeroSection/>
        <Faq/>
        <Footer />

    </div>
    
  )
};
