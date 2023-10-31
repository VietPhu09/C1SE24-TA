
import { motion } from 'framer-motion';

import styles from '../AboutUs_Style/style';
import { fadeIn, staggerContainer } from '../../../utils/motion';

const AboutFeedback = () => (
    <section className={`py-10 ${styles.xPaddings}`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6 mb-2`}
        >
            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-[0.5] flex justify-start flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[2px] border-[#c7c7c7] "
            >
                <div>
                    <img
                        src="https://www.technopat.net/sosyal/eklenti/unnamed-jpg.1229777/" alt=""
                        className="w-full  h-auto  object-cover rounded-[40px] mb-6" />
                </div>
                <div>
                    <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-slate-900">
                        Team 24
                    </h4>
                    <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-slate-900">
                        Team member developer
                    </p>
                </div>

                <p className="mt-[24px] font-normal sm:text-[20px] text-[18px] sm:leading-[35.6px] leading-[39.6px] text-slate-900">
                    “With the development of today's technology, trip advisor is very
                    useful for today's vacation plan, by using
                    Trip Advisor you can travel to places with ease”
                </p>
            </motion.div>

            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="relative flex-1 flex justify-center items-center"
            >
                <img
                    src="https://img.freepik.com/premium-photo/travel-concept-3d-illustration-airplane-flying-map-pin_73903-1181.jpg"
                    alt="planet-09"
                    className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
                />
            </motion.div>
        </motion.div>
    </section >
);

export default AboutFeedback;
