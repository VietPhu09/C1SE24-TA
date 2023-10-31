import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from '../../../utils/motion'
import seeMoreLogo from '../About_Constant_Data/more.png'

const Insight_Card = ({ imgUrl, title, subtitle, index }) => {
    return (
        <motion.div
            variants={fadeIn('left', 'string', index * 0.5, 1)}
            className="flex md:flex-row flex-col gap-4 bg-[#bcdefd] rounded-full mb-2 hover:cursor-pointer hover:bg-[#cbe5fd]"
        >
            <img
                src={imgUrl}
                alt={`planet-0${index}`}
                className="md:w-[220px] w-full h-[220px] rounded-[32px] object-cover"
            />
            <div className="w-full flex justify-between items-center ">
                <div className="flex-1 md:ml-[40px] flex flex-col max-w-[650px]">
                    <h4 className="font-semibold lg:text-[24px] text-[20px] text-black pr-3">
                        {title}
                    </h4>
                    <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white pr-6 lg:text-left md:text-left sm:text-center">
                        {subtitle}
                    </p>
                </div>

                <div
                    className="lg:flex hidden items-center justify-center w-[80px] h-[80px] rounded-full bg-transparent border-[1px] border-[#8bc6fd] mr-5"
                >
                    <img
                        src={seeMoreLogo}
                        alt="arrow"
                        className="w-[40%] h-[40%] object-contain "
                    />
                </div>
            </div>
        </motion.div >
    )
}

export default Insight_Card
