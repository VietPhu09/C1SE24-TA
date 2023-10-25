import React from 'react'
import { useState } from 'react'
import styles from '../AboutUs_Style/style'
import { motion } from "framer-motion"
import { staggerContainer } from '../../../utils/motion'
import { ExploreCard, TitleText, TypingText } from '../About_Mini_Components/index'
import { exploreWorlds } from '../About_Constant_Data/About_Data'

function Explore() {
    return (
        <section className={`max-w-7xl mx-auto py-20`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
            >
                <TypingText title="| The Magic of Trip Advisor" textStyles="text-center" />
                <TitleText title="Travel anywhere you desire" textStyles="text-center" />
            </motion.div>
        </section >
    )
}

export default Explore