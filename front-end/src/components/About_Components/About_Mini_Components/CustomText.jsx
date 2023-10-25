'use client';
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../../../utils/motion';

export const TypingText = ({ title, textStyles }) => {
    return (
        <motion.p
            variants={textContainer}
            className={`font-bold text-[24px] text-secondary-white mb-2 ${textStyles}`}
        >
            {Array.from(title).map((letter, index) => (
                <motion.span variants={textVariant2} key={index}>
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </motion.p>
    );
}

export const TitleText = ({ title, textStyles }) => {
    return (
        <motion.p
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className={`mt-[8px] font-semibold md:text-[28px] text-[20px] text-[#7a7a7a] ${textStyles}`}
        >
            {title}
        </motion.p>
    )
}
