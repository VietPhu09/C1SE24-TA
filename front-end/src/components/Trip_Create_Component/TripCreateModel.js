import React from 'react'
import LocationCard from './LocationCard/LocationCard'
import {  useSelector } from 'react-redux';
import {GrClose} from 'react-icons/gr'

const TripCreateModel = (props) => {
  const locationData = useSelector((state) => state.location.locationList)
  return (
    <div className='fixed inset-0 z-50  '>
      {/* Overlay */}
      <div class="absolute inset-0 bg-black opacity-40"></div>
      {/* Main Contain */}
      <div className='w-full h-full'>
        <div className='py-4 px-10 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-xl overflow-y-scroll custom-scrollbar-style'>
            <div className=' mt-8 flex'>
                <span className=' text-lg font-bold'>Goi y</span>
                <input placeholder='Type something...' className='mx-5 w-4/5 py-1 px-4 border border-slate-400 rounded-lg'/>
            </div>
            <div onClick={props.active} className='absolute top-4 right-4 cursor-pointer rounded-full hover:bg-slate-200 p-2'>
              <GrClose/>
            </div>
            <div className='mt-5  flex items-center'>
                <button className='py-1 px-4 border border-slate-400 rounded-lg mr-8'>Hotel</button>
                <button className='py-1 px-4 border border-slate-400 rounded-lg mr-8'>Hotel</button>
                <button className='py-1 px-4 border border-slate-400 rounded-lg mr-8'>Hotel</button>
                <button className='py-1 px-4 border border-slate-400 rounded-lg mr-8'>Hotel</button>
            </div>
                <div className=' h-px bg-slate-400  mt-5'></div>
                <div className='my-5'>
                  <span className='text-lg font-bold'>Top Recomendation</span>
                </div>
              <div className=''>
               {
                locationData.map((item) =>
                (
                    <LocationCard 
                    id = {item.id}
                    name = {item.name}
                    address = {item.address}
                    url = {item.image}
                    tags = {item.tag}
                    latitude = {item.latitude}
                    longitude = {item.longitude}
                  />   
                )
                )
               }
              </div>
        </div>            
      </div>
    </div>
  )
}

export default TripCreateModel