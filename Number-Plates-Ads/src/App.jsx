import React, { useState } from 'react';
import { HomeSection } from './Components/HomeSection/HomeSection';
import { AboutSection } from './Components/AboutSection/AboutSection';
import { ContactSection } from './Components/ContactPage/ContactSection';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
  <div >
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeSection />} />
      <Route path='/about' element={<AboutSection />} />
      <Route path='/contact' element={<ContactSection />} />

    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
