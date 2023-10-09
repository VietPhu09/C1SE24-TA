import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TripCard from './HomeCard/TripCard';
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
            id={item.id}
            name={item.namePlace}
            url={item.imageUrl}
            location={item.placeLocated}
            stars={item.rateStarts}
        />)

    return (
        <Carousel responsive={responsive} className='mt-8 container mx-auto pb-6'>
            {tripCards}
            {/* <div><TripCard /></div>
            <div><TripCard /></div>
            <div><TripCard /></div>
            <div><TripCard /></div> */}
        </Carousel>
    )
}

export default HomeCarousel