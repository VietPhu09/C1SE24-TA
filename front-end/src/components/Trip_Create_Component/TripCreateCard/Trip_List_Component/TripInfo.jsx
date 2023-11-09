import React from 'react'
import bana from '../../../../assets/TripImg/bana.jpg'
import hoian from '../../../../assets/TripImg/hoian.jpg'
import dragonBridge from '../../../../assets/TripImg/dragonbrigde.jpeg'
import francevillage from '../../../../assets/TripImg/francevillage.jpg'
import pagoda from '../../../../assets/TripImg/pagoda.jpg'
import nguhanhson from '../../../../assets/TripImg/nguhanhson.jpg'

const TripInfo = (props) => {
  const imgList = [hoian, bana, dragonBridge, francevillage, pagoda, nguhanhson]
  const randomItem = imgList[Math.floor(Math.random() * imgList.length)]       
  return (
    <div className='relative'> 
        <div className='rounded-xl overflow-hidden h-80 relative'>
            <img src={randomItem} alt='Trip Image' className='object-cover w-full h-full'/>
            <div className='absolute bg-gradient-to-r from-black to-transparent h-full w-full top-0 right-0 opacity-40'></div>
        </div>
        <div className='absolute bottom-2 w-1/3 mx-8 my-8'>
            <h1 className=' text-3xl text-white font-bold'>{props.name}</h1>
            <div className='text-white flex items-center justify-between mt-4'>
                <h2 className='text-xl font-semibold'>{props.firstDay} - {props.lastDay}</h2>
                <h2 className='text-xl font-semibold'>Duration: {props.days} days</h2>
            </div>
        </div>
    </div>
  )
}

export default TripInfo