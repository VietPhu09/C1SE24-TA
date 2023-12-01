import React from 'react'
import { useNavigate } from 'react-router-dom'

const TripCancel = (props) => {
    const navigate = useNavigate()

    const exit = () => {
        navigate('/')
    }
  return (
    <div className='fixed inset-0 z-50 '>
        {/* Overlay */}
        <div class="absolute inset-0 bg-black opacity-40"></div>
         {/* Main contain */}
         <div className='w-full h-full relative'>
            <div className='bg-white rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 flex flex-col items-center py-4'>
                <h1 className=' text-2xl font-bold text-slate-900 mx-8 '>Do you want to exit?</h1>
                <h2 className='text-lg font-semibold text-slate-900  mx-8'>This change may not be saved!</h2>
                <div className='flex items-center justify-around w-full'>
                <button onClick={exit} className='mt-5  border border-slate-700 py-2 px-10 rounded-lg text-base font-bold text-slate-800 hover:bg-red-600 hover:border-red-600 hover:text-white'>Yes</button> 
                <button onClick={props.active} className='mt-5  border border-slate-700 py-2 px-10 rounded-lg text-base font-bold text-slate-800 hover:bg-slate-900 hover:text-white'>No</button> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default TripCancel