import React from 'react'
import styles from '../AboutUs_Style/style'
import { motion } from "framer-motion"
import { fadeIn } from '../../../utils/motion'

const StartSteps = ({ number, text }) => {
    return (
        <motion.div variants={fadeIn('up', 'tween', number * 0.4, 1)}
            className={`${styles.flexCenter} flex-row`}>
            <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#5ce9fc] text-white font-bold text-[1.7rem] shadow-md`}>
                {number}
            </div>
            <p className='flex-1 ml-[30px] font-normal text-[20px] text-[#4e4e4e]'>
                {text}
            </p>
        </motion.div>
    )
}

export default StartSteps