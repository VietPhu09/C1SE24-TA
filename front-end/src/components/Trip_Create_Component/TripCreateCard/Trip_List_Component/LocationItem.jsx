import React from 'react'
import img from '../../../../assets/img/hoian.jpg'
import {GrLocation} from 'react-icons/gr'
import trashcan from '../../../../assets/TripImg/trashbin.png'
import { deleteLocationItem, getLocationArray } from '../../../../redux/tripSlice'
import { useDispatch } from 'react-redux'

const LocationItem = (props) => {

    const dispatch = useDispatch()

    const deleteLocation = {
        id: props.id,
        day: props.day
    }

    const handleDelete = () => {
        dispatch(deleteLocationItem(deleteLocation))
        dispatch(getLocationArray(deleteLocation.day))
    }
  return (
    <div className=' cursor-pointer'>
        <div className='flex mt-5'>
            {/* Index item */}
            <div className='flex flex-col items-center'>
                <p className='py-2 px-4 bg-black text-white rounded-full'>{props.index+1}</p>
                <div class="border-l-2 border-dotted border-gray-400 w-0 h-full"></div>
            </div>
            {/* Item info */}
            <div className='flex ml-8 relative w-full h-[150px]'>
                {
                    props.url ? 
                    (
                        <div className='w-1/4 h-full rounded-xl overflow-hidden'>
                            <img src={props.url} alt='Trip Image' className='object-cover w-full h-full'/>
                        </div>
                    )
                    :
                    (
                        <div className='w-1/4 rounded-xl overflow-hidden'>
                            <img src={img} alt='Trip Image' className='object-cover w-full h-full'/>
                        </div>
                    )
                }
               
                <div className='ml-5 w-3/4'>
                    <h1 className='text-xl font-bold'>{props.name}</h1>
                    <div className='flex items-center'>
                        <GrLocation/>
                    <p className=' text-base font-semibold ml-3'>{props.address}</p>
                    </div>
                </div>
                <div onClick={handleDelete} className='absolute top-0 right-0 h-7 w-7 cursor-pointer'>
                    <img src={trashcan} alt='trash'/>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default LocationItem