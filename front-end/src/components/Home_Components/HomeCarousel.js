import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TripCard from './HomeCard/TripCard';
import {  useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const HomeCarousel = () => {
    const locationData = useSelector((state) => state.location.locationList)
    // console.log(locationData)
    // const data = locationData.map((item, index) => {
    //     return(
    //         item.tag.map((item, index) => {return item.name})
    //     )
    // })
    // console.log(data)
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


    const tripCards = locationData.map((item) =>
    <NavLink to={`/detail/${item.id}`}>
    <TripCard
                id={item.id}
                name={item.name}
                url = {item.image}
                location={item.address}
                tag={ item.tag.map((item, index) => {return item.name})}
            />
    </NavLink>
    )
       

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