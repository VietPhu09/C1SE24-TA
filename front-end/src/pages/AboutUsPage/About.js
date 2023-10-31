import React from 'react'
import AboutHero from '../../components/About_Components/About_Section/AboutHero'
import AboutContent from '../../components/About_Components/About_Section/AboutContent'
import AboutExplore from '../../components/About_Components/About_Section/AboutExplore'
import AboutGetStarted from '../../components/About_Components/About_Section/AboutGetStarted'
import AboutWhatsNew from '../../components/About_Components/About_Section/AboutWhatsNew'
import AboutWorld from '../../components/About_Components/About_Section/AboutWorld'
import AboutInsight from '../../components/About_Components/About_Section/AboutInsight'
import AboutFeedback from '../../components/About_Components/About_Section/AboutFeedBack'
import AboutFooter from '../../components/About_Components/About_Section/AboutFooter'
const About = () => {
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

export default About