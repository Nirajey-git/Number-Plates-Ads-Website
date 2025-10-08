import React from 'react'
import { PremiumPlates} from './PremiumPlates'
import { StandardPlates } from './StandardPlates'
import { EuroPlates } from './EuroPlates'

import {Navbar} from '../HomeSection/Navbar'
import {Footer} from '../HomeSection/Footer'


export const Products = () => {
  return (
    <div>
        <Navbar />
        <PremiumPlates />
        <StandardPlates />
        <EuroPlates />
        <Footer />
    </div>
  )
}
