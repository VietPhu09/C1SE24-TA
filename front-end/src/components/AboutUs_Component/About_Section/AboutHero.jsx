import React from 'react'
import { motion } from "framer-motion"
import { slideIn, staggerContainer, textVariant } from '../../../utils/motion'
import styles from '../AboutUs_Style/style'
function About_Hero() {
    return (
        // Hero Section About us Page
        // Container
        <section className={`${styles.yPaddings} max-w-7xl mx-auto `}>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}>

                {/* Container Content */}
                <div className='flex justify-center items-center z-10 space-x-5'>
                    <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
                        Travel
                    </motion.h1>
                    <motion.h1 variants={textVariant(1.2)} className={styles.heroHeading}>
                        Advisor
                    </motion.h1>
                </div>

                {/* Animation Picture */}
                <motion.div
                    variants={slideIn('right', 'tween', 0.2, 1)}
                    className=" w-full md:-mt-[30px] -mt-[12px] ">
                    <div className=' w-full  rounded-tl-[140px] z-[0] sm:-top-[10px] md:-top-[4px] mt-4 md:mt-5 sm:px-3'>
                        <img
                            src='https://s19538.pcdn.co/wp-content/uploads/2021/07/road-trip.jpg'
                            alt='About us Pic'
                            className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] rounded-br-[140px] z-10 relative'
                        >
                        </img>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default About_Hero