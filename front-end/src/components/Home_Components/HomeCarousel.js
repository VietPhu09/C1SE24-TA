import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TripCard from './TripCard';
import CarouselData from '../Home_Components/CarouselData'

const HomeCarousel = () => {
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

    const tripCards = CarouselData.map((item) =>
        <TripCard
            name={item.namePlace}
            url={item.imageUrl}
            location={item.placeLocated}
            stars={item.rateStarts}
        />)

    return (
        <div className='max-w-7xl p-7 mx-auto'>
            <h1 class="mb-4 sm:text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl text-center pt-6">We invest in the world’s potential</h1>
            <p class="mb-9 text-base font-normal text-gray-500 lg:text-base sm:px-16 xl:px-48 dark:text-gray-400 text-center py-2 px-8 ">Where ever you want to go , let us make it happens.</p>
            <Carousel responsive={responsive} className='mt-8 container mx-auto pb-10' showDots={true}>
                {tripCards}
            </Carousel>
        </div>
    )
}

export default HomeCarousel