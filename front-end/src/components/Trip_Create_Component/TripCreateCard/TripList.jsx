import React, { useEffect, useState } from 'react'
import TripItem from './Trip_List_Component/TripItem'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from 'react-redux';
import { getLocationArray, setIndex } from '../../../redux/tripSlice';

const TripList = (props) => {

    const [active, setActive] = useState(false)

    const dispatch = useDispatch()
    const days = props.days
    const data = props.data
  
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


    const handleGetDay = (day, index) => {
        dispatch(getLocationArray(day))
        dispatch(setIndex(index))
    }


    const buttonCarousel = days.map((item, index) => {
        return(
            index === 0 ?
            (
                <button 
                    key={index}
                    id={index} 
                    className='hover:text-blue-600 text-lg font-semibold text-slate-800'
                    onClick={() => handleGetDay(item.day, index)}
                    >
                        {formatDateTripList(item.day)}
                    </button>
            )
            :
            (
                <button 
                    key={index}
                    id={index} 
                    className='hover:text-blue-600 text-lg font-semibold text-slate-800'
                    onClick={() => handleGetDay(item.day, index)}
                    >
                        {formatDateTripList(item.day)}
                    </button>
            )
        )
    })

    useEffect(() => {
        const handleScroll = () => {
            if(document.documentElement.scrollTop >400) {
                setActive(true)
            }
            else setActive(false)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    }, [])
  return (
    <div className='my-8'>
        {
            !active ?
            (
                <div className='border-b border-b-slate-900 pb-6'>
                    <Carousel responsive={responsive} className='container mx-auto'>
                        {buttonCarousel}
                    </Carousel>
                </div>
            )
            :
            (
                <div className=' shadow-xl pb-6 py-4 sticky top-0 bg-white z-40 '>
                    <Carousel responsive={responsive} className='container mx-auto'>
                        {buttonCarousel}
                    </Carousel>
                </div>
            )
        }
        
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