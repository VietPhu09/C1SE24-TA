import React from 'react'
import styles from '../AboutUs_Style/style'
import { motion } from "framer-motion"
import { staggerContainer } from '../../../utils/motion'
import { TypingText, TitleText, InsightCard } from '../About_Mini_Components'
import { insights } from '../About_Constant_Data/About_Data'

const AboutInsight = () => {
    return (
        <section className={` ${styles.yPaddings} max-w-7xl mx-auto mt-[20px]`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} ${styles.xPaddings}mx-auto flex flex-col`}
            >
                <TypingText title="| Insight" textStyles="text-center" />
                <TitleText title={<>Insight about Travel Advisor</>} textStyles="text-center lg:text-[30px] px-12" />
                <div className='mt-[50px] flex flex-col gap-[24px]'>
                    {insights.map((item, index) => (
                        <InsightCard
                            key={`insight-${index}`}
                            {...item}
                            index={index + 1} />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default AboutInsight
