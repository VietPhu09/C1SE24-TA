import React from 'react'
import AboutExplore from '../components/AboutUs_Component/About_Section/AboutExplore'
import AboutContent from '../components/AboutUs_Component/About_Section/AboutContent'
import AboutHero from '../components/AboutUs_Component/About_Section/AboutHero'
import AboutGetStarted from '../components/AboutUs_Component/About_Section/AboutGetStarted'
import AboutWhatsNew from '../components/AboutUs_Component/About_Section/AboutWhatsNew'
import AboutWorld from '../components/AboutUs_Component/About_Section/AboutWorld'
import AboutInsight from '../components/AboutUs_Component/About_Section/AboutInsight'
import AboutFeedback from '../components/AboutUs_Component/About_Section/AboutFeedBack'
import AboutFooter from '../components/AboutUs_Component/About_Section/AboutFooter'
const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <AboutExplore />
      <AboutGetStarted />
      <AboutWhatsNew />
      <AboutWorld />
      <AboutInsight />
      <AboutFeedback />
      <AboutFooter />
    </>
  )
}

export default AboutUs