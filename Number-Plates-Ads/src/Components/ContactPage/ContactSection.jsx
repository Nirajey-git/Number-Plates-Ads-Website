import React from 'react'
import { ContactForm } from './ContactForm.jsx'
import { ContactHead } from './ContactHead.jsx'
import { Navbar } from '../HomeSection/Navbar.jsx'
import { Footer } from '../HomeSection/Footer.jsx'
import { ContactFormPage } from './ContactFormPage.jsx'

export const ContactSection = () => {
  return (
    <div>
        <Navbar />
        <ContactHead />
        <ContactFormPage/>
        <ContactForm />
        <Footer />

    </div>
  )
}
