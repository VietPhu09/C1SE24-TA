import React, {useRef} from 'react'
import TripItem from './Trip_List_Component/TripItem'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TripList = (props) => {
    const days = props.days
    const data = props.data
    // console.log(data)

    // const tripItemRefs = Array.from({ length: days.length }, () => useRef(null));
    // const handleScroll = (index) => {
    //     if (tripItemRefs[index] && tripItemRefs[index].current) {
    //       tripItemRefs[index].current.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   };
    
    const formatDateTripList = (input) => {
        const date = new Date(input)
        const options = {month: 'long', day: 'numeric'}
        return date.toLocaleDateString('en-US', options)
    }

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


    const buttonCarousel = days.map((item, index) => {
        return(
            index === 0 ?
            (
                <button 
                    key={index}
                    id={index} 
                    className='hover:text-blue-600 text-lg font-semibold text-slate-800'>{formatDateTripList(item.day)}</button>
            )
            :
            (
                <button 
                    key={index}
                    id={index} 
                    className='hover:text-blue-600 text-lg font-semibold text-slate-800'>{formatDateTripList(item.day)}</button>
            )
        )
    })
  return (
    <div className='my-8'>
        <div className='border-b border-b-slate-900 pb-6'>
            <Carousel responsive={responsive} className='container mx-auto'>
                {buttonCarousel}
            </Carousel>
        </div>
        <div>
            <TripItem
                data = {data}    
                active = {props.active}
            />
        </div>
    </div>
  )
}

export default TripList