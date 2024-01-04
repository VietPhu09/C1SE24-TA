import React from 'react'
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, planetVariants } from '../../../utils/motion'
import styles from '../AboutUs_Style/style'
import planetLogo from '../About_Constant_Data/travel.png'
import { TypingText, TitleText, StartSteps } from '../About_Mini_Components'
import { startingFeatures } from '../About_Constant_Data/About_Data'

const About_GetStarted = () => {
    return (
        <section className={` ${styles.yPaddings} max-w-7xl mx-auto `}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} ${styles.xPaddings}mx-auto flex lg:flex-row flex-col gap-8`}
            >
                <motion.div
                    variants={planetVariants('left')}
                    className={`flex-1 ${styles.flexCenter}`}
                >
                    <img
                        src={planetLogo}
                        alt='get-started'
                        className='w-[90%] h-[90%] object-contain' />
                </motion.div>
                <motion.div
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    className="flex-[0.75] flex justify-center flex-col mt-0 sm:mt-10 ">
                    <TypingText title="| How Travel Advisor works" />
                    <TitleText title={<>Get started with just a few clicks</>} />
                    <div className='mt-[30px] flex flex-col max-w-[370px] gap-[24px]'>
                        {startingFeatures.map((item, index) => (
                            <StartSteps
                                key={item}
                                number={index + 1}
                                text={item}
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default About_GetStarted