import React from 'react'
import Carousel from "react-multi-carousel";
import FeedBackCard from './HomeCard/FeedBackCard';
import CarouselData from '../Home_Components/CarouselData'
import vali from '../../assets/img/vali.png'
import earth from '../../assets/img/earth.png'

const FeedBackSection = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const feedbackCards = CarouselData.map((item) =>
    <FeedBackCard
        name={item.namePlace}
        url={item.imageUrl}
        feedback={item.feedback}
    />)
  return (
    <div className='flex flex-col items-center mt-8'>
         <h1 className=' font-bold text-3xl'>Feedback From Our Customer</h1>
         <Carousel responsive={responsive} className='mt-5 container mx-auto pb-6'>
            {feedbackCards}
        </Carousel>
        <div className='flex justify-center items-center mt-8 mx-32'>
            <div className='flex-1 flex items-center mr-10'>
                <img src={vali} alt='vali' className=' h-52 w-52'/>
                <span className='text-2xl font-semibold w-2/4 ml-5'>Explore the world with ease </span>
            </div>
            <div className='flex-1 flex items-center'>
                <img src={earth} alt='earth' className=' h-52 w-52'/>
                <span className='text-2xl font-semibold w-2/4 ml-5'>Trip Advisor alwayshere to help you ! </span>
            </div>
        </div>
    </div>
  )
}

export default FeedBackSection