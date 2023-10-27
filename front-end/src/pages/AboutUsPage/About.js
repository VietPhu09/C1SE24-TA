import React from 'react'
import { motion } from "framer-motion"
import About_Hero from '../../components/About_Components/About_Section/About_Hero'
import AboutContent from '../../components/About_Components/About_Section/AboutContent'
import Explore from '../../components/About_Components/About_Section/Explore'
import About_GetStarted from '../../components/About_Components/About_Section/About_GetStarted'
import About_WhatsNew from '../../components/About_Components/About_Section/About_WhatsNew'
const About = () => {
  return (
    <>
      <About_Hero />
      <AboutContent />
      <Explore />
      <About_GetStarted />
      <About_WhatsNew />
    </>
  )
}

export default About