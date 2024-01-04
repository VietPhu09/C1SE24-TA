import React from 'react'
import { motion } from 'framer-motion';
import { socials } from '../About_Constant_Data/About_Data';
import styles from '../AboutUs_Style/style';
import { footerVariants } from '../../../utils/motion';
import startLogo from '../About_Constant_Data/power-on.png'
import { useNavigate } from 'react-router-dom';
const AboutFooter = () => {
    const navigate = useNavigate()
    return (
        <motion.footer
            variants={footerVariants}
            initial="hidden"
            whileInView="show"
            className={`${styles.xPaddings} py-8 relative`}
        >
            <div className="footer-gradient" />
            <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
                <div className="flex items-center justify-between flex-wrap gap-5">
                    <h4 className="font-bold md:text-[64px] text-[44px] text-black">
                        Enter the Travel Adisor
                    </h4>
                    <motion.button
                        type="button"
                        className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] hover:bg-[#6d8efa] hover:font-bold"
                        whileHover={{ scale: [null, 1.5, 1.4] }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={startLogo}
                            alt="headset"
                            className="w-[24px] h-[24px] object-contain"
                        />
                        <span  onClick={() => 
                            {
                                navigate('/') 
                                window.scrollTo({top:0,behavior: 'smooth'})
                            }
                                } className="font-normal text-[16px] text-white">
                            Enter Travel Adisor
                        </span>
                    </motion.button>
                </div>

                <div className="flex flex-col">
                    <div className="mb-[50px] h-[2px] bg-white opacity-10" />

                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <h4 className="font-extrabold text-[24px] text-black">
                            TRAVEL ADVISOR
                        </h4>
                        <p className="font-normal text-[14px] text-black opacity-50">
                            Copyright © 2023 - 2024 Travel Adisor. All rights reserved.
                        </p>

                        <div className="flex gap-4">
                            {socials.map((social) => (
                                <img
                                    key={social.name}
                                    src={social.url}
                                    alt={social.name}
                                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}

export default AboutFooter
