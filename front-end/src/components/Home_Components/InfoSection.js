import React from 'react'
import map from '../../assets/img/map.png'
import choice from '../../assets/img/choice.png'
import car from '../../assets/img/travel.png'

const InfoSection = () => {
  return (
    <div className='flex flex-col items-center'>
        <h1 className=' font-bold text-3xl'>Plan your journey SO simple</h1>
        <div className='flex mt-5 justify-center w-full'>
            <div className='   rounded-2xl w-72 h-80 flex flex-col items-center shadow-lg hover:shadow-2xl '>
                <img src={map} alt='map' className=' h-20 w-20 mt-5 '/>
                <h2 className=' text-2xl font-semibold w-2/3 mt-10 '>Find Your Destination</h2>
            </div>
            <div className='  bg-sky-600 rounded-2xl w-72 h-80 flex flex-col items-center mx-24 shadow-lg hover:shadow-2xl '>
                <img src={choice} alt='choice' className=' h-20 w-20 mt-5 '/>
                <h2 className=' text-2xl font-semibold w-2/3 mt-10 text-slate-100 '>Find Your Destination</h2>
            </div>
            <div className='   rounded-2xl w-72 h-80 flex flex-col items-center shadow-lg hover:shadow-2xl '>
                <img src={car} alt='car' className=' h-20 w-20 mt-5 '/>
                <h2 className=' text-2xl font-semibold w-2/3 mt-10 '>Find Your Destination</h2>
            </div>
        </div>
    </div>
  )
}

export default InfoSection