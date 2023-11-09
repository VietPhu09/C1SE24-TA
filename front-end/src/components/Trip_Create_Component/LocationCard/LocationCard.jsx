import React from 'react'
import {GrLocation} from 'react-icons/gr'
import {FaUmbrellaBeach, FaCity} from 'react-icons/fa'

import {useDispatch, useSelector} from 'react-redux'
import { setLocationItem } from '../../../redux/tripSlice'

const LocationCard = (props) => {

    const dispatch = useDispatch()
    const day = useSelector((state) => state.tripCreate.day)
    const test = useSelector((state) => state.tripCreate)

    const tags = props.tags
    const data = props

    const handelAddData = () => {
        const newData = {
            id: data.id,
            name: data.name,
            address: data.address,
            url: data.url,
            latitude: data.latitude,
            longitude: data.longitude,
            day: day
          };
        dispatch(setLocationItem(newData))
        console.log("Data", test)
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
            <div className='flex items-center'>
                <p className=' text-lg font-bold text-slate-800'>{props.name}</p>
            </div>
            {/* Address */}
            <div className='flex items-center mx-2'>
                <GrLocation/>
                <p className=' text-base text-slate-800 font-semibold ml-3'>{props.address}</p>
            </div>
            {/* Distance */}
            <div className='mx-2 flex items-center'>
                <div className='flex items-center'>
                    <FaUmbrellaBeach/>
                    <p className=' text-sm text-slate-900 ml-2'> Cach bien 1,6km</p>
                </div>
                <div className='flex items-center ml-5'>
                    <FaCity/>
                    <p className=' text-sm text-slate-900 ml-2'> Cach trung tam thanh pho 1,6km</p>
                </div>
            </div>
            {/* Descriptoion */}
            <div className='flex items-start mx-2'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
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
        <div className='w-1/4 h-5/6 flex items-center'>
            <button onClick={handelAddData} className='w-full h-full bg-green-400 rounded-xl text-white text-xl font-bold'>Add</button>
        </div>
    </div>
  )
}

export default LocationCard