import React from 'react'
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../../utils/motion'
import styles from './AboutUs_Style/style'
import { TypingText } from './CustomText'

function AboutContent() {
    return (
        <section className={`max-w-7xl mx-auto`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
            >
                <TypingText title="| About Trip Advisor" textStyles="text-center" className="text-black" />
                <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className="mt-[8px] font-normal sm:text-[24px] text-[12px] text-center text-black px-20">
                    <span className="font-extrabold text-black">Metaverse</span> is a new
                    thing in the future, where you can enjoy the virtual world by feeling
                    like it's really real, you can feel what you feel in this metaverse
                    world, because this is really the{' '}
                    <span className="font-extrabold text-black">
                        madness of the metaverse
                    </span>{' '}
                </motion.p>
            </motion.div>
            About Section
        </section >
    )
}

export default AboutContent