import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaLocationDot } from 'react-icons/fa6'
import {AiOutlineHeart} from 'react-icons/ai'
import { activeButton } from '../../../redux/tripSlice'
import { useDispatch } from 'react-redux'


const TripCard = (props) => {

    const dispatch = useDispatch()
    
    const hide = () => {
        dispatch(activeButton(false))
    }

    return (
        <div key={props.id}
            onClick={hide}
            className="block rounded-lg bg-white drop-shadow-md hover:drop-shadow-xl mx-4 relative">
            <a href="#!">
                <img
                    className="rounded-t-lg h-64 object-cover w-full"
                    src={props.url}
                    alt="" />
            </a>
            <div className="p-6">
                <h5
                    class="mb-2 text-base font-medium leading-tight text-black">
                    {props.name}
                </h5>
                <div className='flex justify-between items-center'>
                    <p class="mb-4 text-sm text-slate-900 pr-12 flex items-center">
                        <FaLocationDot className='mr-2' />
                        {props.location}
                    </p>
                    <div className=''>
                        <button className='bg-[#1e80ff] px-5 py-2 rounded-full text-sm font-semibold text-white hover:bg-[#358cff] flex items-center justify-between'><AiFillStar className='mr-1' />{props.stars}</button>
                    </div>
                </div>

            </div>
            <div className='absolute top-3 right-3 bg-white py-3 px-3 rounded-full cursor-pointer hover:bg-red-500'>
                <AiOutlineHeart/>
            </div>
        </div>
    )
}

export default TripCard