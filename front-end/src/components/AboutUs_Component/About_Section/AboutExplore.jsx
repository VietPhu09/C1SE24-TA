import React from 'react'
import { useState } from 'react'
import styles from '../AboutUs_Style/style'
import { motion } from "framer-motion"
import { staggerContainer } from '../../../utils/motion'
import { ExploreCard, TitleText, TypingText } from '../About_Mini_Components/index'
import { exploreWorlds } from '../About_Constant_Data/About_Data'

function AboutExplore() {
    const [active, setActive] = useState('world-2')

    return (
        <section className={`max-w-7xl mx-auto py-20`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
            >
                <TypingText title="| The Magic of Travel Advisor" textStyles="text-center" />
                <TitleText title={<>Travel anywhere you desire <br className='md:block hidden'></br> and explore</>} textStyles="text-center" />

                <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] w-full sm:px-7 md:px-5 lg:px-3 gap-5'>
                    {
                        exploreWorlds.map((item, index) => (
                            <ExploreCard
                                key={item.id}
                                {...item}
                                index={index}
                                active={active}
                                handleClick={setActive}
                            />
                        ))
                    }
                </div>
            </motion.div>
        </section >
    )
}

export default AboutExplore