import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaLocationDot } from 'react-icons/fa6'


const TripCard = (props) => {
    return (
        <div
            class="block rounded-lg bg-white drop-shadow-md hover:drop-shadow-xl bg-white mx-4">
            <a href="#!">
                <img
                    class="rounded-t-lg h-64 object-cover w-full"
                    src={props.url}
                    alt="" />
            </a>
            <div class="p-6">
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
        </div>
    )
}

export default TripCard