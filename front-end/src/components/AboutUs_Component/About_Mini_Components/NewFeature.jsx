import React from 'react'
import styles from '../AboutUs_Style/style'
import { motion } from "framer-motion"
import { slideIn } from '../../../utils/motion'

const NewFeature = ({ imgUrl, title, subtitle, number }) => {
    return (
        <motion.div
            variants={slideIn('up', 'tween', number * 0.4, 1.2)}
            className='flex-1 flex flex-col sm:max-w-[400px] min-w-[180px]'>
            <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#5ce9fc] shadow-md mb-3`}>
                <img src={imgUrl} alt={title} className="w-1/2 h-1/2 object-contain" />
            </div>
            <h1 className='mt-[16px] font-bold text-[24px] leading-[12px] text-black'>{title}</h1>
            <p className='flex-1 mt-[16px] font-normal text-[14px] text-slate-500 leading-[24px]'>{subtitle}</p>
        </motion.div>
    )
}
export default NewFeature
