import React from 'react'
import Hero from '../components/Hero'
import FeaturedMenu from '../components/FeatureMenu'
import AboutMini from '../components/AboutMini'
import ContactSection from '../components/Contact'

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedMenu />
      <AboutMini />
      <ContactSection />
    </div>
  )
}

export default Home
