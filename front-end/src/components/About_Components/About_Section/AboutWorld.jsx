import React from 'react'
import styles from '../AboutUs_Style/style'
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from '../../../utils/motion'
import { TypingText, TitleText } from '../About_Mini_Components'
import mapLogo from '../About_Constant_Data/map.png'
import vacationLogo1 from '../About_Constant_Data/beach-bar.png'
import vacationLogo2 from '../About_Constant_Data/beach-chair.png'
import vacationLogo3 from '../About_Constant_Data/summer.png'


const About_World = () => {
    return (
        <section className={` ${styles.yPaddings} max-w-7xl mx-auto `}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} ${styles.xPaddings} mx-auto flex flex-col `}
            >
                <TypingText title="| Amazing places on the world" textStyles="text-center" />
                <TitleText title={<>Travel around the world with exciting moments and experience waiting for you</>} textStyles="text-center lg:text-[36px] px-12" />
                <motion.div
                    variants={fadeIn('up', 'tween', 0.3, 1)}
                    className="relative mt-[68px] flex w-full h0-[550px]">
                    <img
                        src={mapLogo}
                        alt="Map img"
                        className='w-full h-full object-contain' />

                    <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-blue-800 shadow-lg'>
                        <img
                            src={vacationLogo1}
                            alt='trip1'
                            className='h-full w-full'
                        />
                    </div>

                    <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-blue-800 shadow-lg'>
                        <img
                            src={vacationLogo2}
                            alt='trip1'
                            className='h-full w-full'
                        />
                    </div>

                    <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-blue-800 shadow-lg'>
                        <img
                            src={vacationLogo3}
                            alt='trip1'
                            className='h-full w-full'
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section >
    )
}

export default About_World
