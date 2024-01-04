'use client';

import React from 'react'
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../../../utils/motion'
import styles from '../AboutUs_Style/style'
import { TypingText } from '../About_Mini_Components/CustomText'

function AboutContent() {
    return (
        <section className={`max-w-7xl mx-auto py-10`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
            >
                <TypingText title="| About Travel Advisor" textStyles="text-center" className="text-black" />

                <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className="mt-[8px] font-normal sm:text-[20px]  md:text-[20px] text-[12px] text-center text-black px-20">
                    <span className="font-normal  text-[#7a7a7a] ">
                        TravelAdvisor is a popular travel platform that helps travelers plan their trips.
                        It provides reviews, ratings, and recommendations for hotels, restaurants, and attractions.
                        Travelers rely on TravelAdvisor to make informed decisions for their journeys, ensuring memorable and enjoyable experiences.
                    </span>{' '}
                </motion.p>
            </motion.div>
        </section >
    )
}

export default AboutContent