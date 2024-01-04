import React from 'react'
import styles from '../AboutUs_Style/style'
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, planetVariants } from '../../../utils/motion'
import suggestLogo from '../About_Constant_Data/discussion.png'
import { TypingText, TitleText, NewFeature } from '../About_Mini_Components'
import { newFeatures } from '../About_Constant_Data/About_Data'

const About_WhatsNew = () => {
    return (
        <section className={`${styles.yPaddings} max-w-7xl mx-auto `}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} ${styles.xPaddings} mx-auto flex lg:flex-row flex-col gap-8`}
            >

                <motion.div
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    className="flex-[0.75] flex justify-center flex-col">
                    <TypingText title="| How Travel Advisor works" />
                    <TitleText title={<>What's new about Travel Advisor</>} />
                    <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
                        {newFeatures.map((item, index) => (
                            <NewFeature
                                key={item.title}
                                {...item}
                                number={index + 1}
                            />
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    variants={planetVariants('right')}
                    className={`flex-1 ${styles.flexCenter}`}
                >
                    <img
                        src={suggestLogo}
                        alt='get-started'
                        className='w-[90%] h-[90%] object-contain mt-0 sm:mt-10 ' />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default About_WhatsNew