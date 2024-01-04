import React from 'react'
import {GrLocation} from 'react-icons/gr'
import {ImAirplane} from 'react-icons/im'
import { FaHotel } from "react-icons/fa";
import { IoRestaurantSharp } from "react-icons/io5";
import { TfiMoney } from "react-icons/tfi";
import { IoIosArrowForward } from "react-icons/io";


import {useDispatch, useSelector} from 'react-redux'
import { setLocationItem, activeButton, getLocationArray } from '../../../redux/tripSlice'
import { NavLink } from 'react-router-dom'

import toast from 'react-hot-toast'

const LocationCard = (props) => {

    const dispatch = useDispatch()
    const day = useSelector((state) => state.tripCreate.day)
    const isDuplicate = useSelector((state) => state.tripCreate.isDuplicate)
    

    const tags = props.tags
    const data = props

    const HandelAddData = async() => {
        const newData = {
            id: data.id,
            name: data.name,
            address: data.address,
            url: data.url,
            latitude: data.latitude,
            longitude: data.longitude,
            category: data.category,
            day: day
          };
        await dispatch(setLocationItem(newData))
        console.log('hello',isDuplicate)
        isDuplicate ? toast.error('This item is already in your list to day!') : toast.success(`Adding ${data.name} successfully!`)
        dispatch(getLocationArray(day))
        props.active()
    }
    

    const active = () => {
        dispatch(activeButton(true))
    }


  return (
    <div key={props.id} className='w-full h-60 border border-slate-400 rounded-xl flex items-center my-5'>
        {/* Image */}
        <div className='w-1/4 h-5/6 rounded-xl overflow-hidden mx-5'>
            <img src={props.url} alt='hoian' className=' w-full h-full object-cover'/>
        </div>
        {/* Content */}
        <div className='flex flex-col justify-between w-2/4 h-5/6'>
            {/* Name */}
            <NavLink to={`/detail/${props.id}`} onClick={() => { window.scrollTo({top:0,behavior: 'smooth'})}}>
                <div onClick={active} className='flex items-center hover:underline'>
                    <p className=' text-lg font-bold text-slate-800'>{props.name}</p>
                </div>
            </NavLink>         
            {/* Address */}
            <div className='flex items-center mx-2'>
                <GrLocation/>
                <p className=' text-base text-slate-800 font-semibold ml-3'>{props.address}</p>
            </div>
            {/* Distance */}
            <div className='mx-2 flex items-center'>
                {
                    props.airport_distance > 0 &&
                    <div className='flex items-center'>
                        <ImAirplane/>
                        <p className=' text-sm text-slate-900 ml-2 font-semibold'> Airport Distance: {props.airport_distance} km</p>
                    </div>
                }
            </div>
            {/* Descriptoion */}
            {
                props.category === 'Hotel' ?
                (
                <div className='flex items-start mx-2'>
                    <FaHotel/>
                    <p className=' text-sm text-slate-900 ml-2 font-semibold'>Hotel type: {props.subcategory} star</p>
                </div>
                )
                :
                (
                    props.category === 'Restaurant' ?
                    (
                        <div className='flex items-start mx-2'>
                            <IoRestaurantSharp />
                            <p className=' text-sm text-slate-900 ml-2 font-semibold'>Restaurant type: {props.subcategory}</p>
                        </div>
                    )
                    :
                    (
                        <div className='flex items-start mx-2'>
                            <TfiMoney />
                            <p className=' text-sm text-slate-900 ml-2 font-semibold'>Price: {props.subcategory} </p>
                        </div>
                    )
                )

            }
            
            {/* Tags */}
            <div className='flex items-center'>
            {
                tags.map((item, index) => (
                        <span key={index} className='text-base font-semibold text-slate-900 border border-slate-400 rounded-xl py-2 px-4 mx-2' id={item.id}>{item.name}</span> 
                ))
            }
            </div>

        </div>
        {/* Add */}
        <div className='w-1/4 h-full flex items-center justify-center'>
        <button
            onClick={HandelAddData}
            className='relative w-full h-full rounded-xl text-slate-900 text-xl font-semibold flex items-center justify-center overflow-hidden group'
            >
            <span className="relative z-10 transition-transform transform translate-x-0 group-hover:translate-x-10">Add to list</span>
            <IoIosArrowForward className='h-10 w-10 ml-8 text-slate-900 transition-transform transform translate-x-0 group-hover:translate-x-full'/>
            <span className="absolute inset-0transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
        </button>

        </div>
    </div>
  )
}

export default LocationCard