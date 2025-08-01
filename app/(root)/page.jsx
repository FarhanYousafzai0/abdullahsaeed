import React from 'react'
import Hero from './components/Hero'

import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import AboutSnapshot from './components/AboutSnapshot'


const page = () => {
  return (
    <>
   <div className='bg-gray-50'>
  <Hero/>
    <AboutSnapshot/>
    <Testimonials/>
    <CTA/>

   </div>
    </>
  )
}

export default page
