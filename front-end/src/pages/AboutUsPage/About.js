import React from 'react'
import { motion } from "framer-motion"
import About_Hero from '../../components/About_Components/About_Section/About_Hero'
import AboutContent from '../../components/About_Components/About_Section/AboutContent'
import Explore from '../../components/About_Components/About_Section/Explore'
const About = () => {
  return (
    <>
      <About_Hero />
      <AboutContent />
      <Explore />
    </>
  )
}

export default About