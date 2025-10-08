import React, { useState } from 'react';
import { HomeSection } from './Components/HomeSection/HomeSection';
import { AboutSection } from './Components/AboutSection/AboutSection';
import { ContactSection } from './Components/ContactPage/ContactSection';
import { Products } from './Components/Products/Products';
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
      <Route path='/products' element={<Products />} />

    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
