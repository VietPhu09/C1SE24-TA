import React from 'react'
import earth from '../../assets/img/earth.png'

const Footer = () => {
  return (
    <div className='pt-20 bg-slate-300'>
        <div className='flex items-center justify-around pb-20'>
            {/* Item 1 */}
            <div className='flex-1 flex ml-20'>
                <img src={earth} alt='earth' className=' h-20 w-20'/>
                <div className='ml-5'>
                    <h1 className=' text-2xl font-semibold'>Trip Advisor</h1>
                    <p className=' text-lg font-normal text-slate-500'>Plan your trip easy and quick</p>
                </div>
            </div>
            {/* Item 2 */}
            <div className='flex-1 flex items-center justify-around mr-20'>
                <div className='flex flex-col items-center'>
                    <h2 className=' text-2xl font-semibold'>Company</h2>
                    <span className=' text-lg font-normal text-slate-500'>About us</span>
                    <span className=' text-lg font-normal text-slate-500'>About us</span>
                    <span className=' text-lg font-normal text-slate-500'>About us</span>
                    <span className=' text-lg font-normal text-slate-500'>About us</span>
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className=' text-2xl font-semibold'>Company</h2>
                    <span className=' text-lg font-normal text-slate-500'>About us</span>
                    <span className=' text-lg font-normal text-slate-500'>About us</span>
                    <span className=' text-lg font-normal text-slate-500'>About us</span>
                    <span className=' text-lg font-normal text-slate-500'>About us</span>
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className=' text-2xl font-semibold'>Company</h2>
                    <span className=' text-lg font-normal text-slate-500'>About us</span>
                    <span className=' text-lg font-normal text-slate-500'>About us</span>
                    <span className=' text-lg font-normal text-slate-500'>About us</span>
                    <span className=' text-lg font-normal text-slate-500'>About us</span>
                </div>
            </div>
        </div>
        <div className='w-full bg-blue-500 py-7 flex items-center justify-center mt-8'>
            <span className=' text-lg text-white font-normal'>@2023 Trip Advisor All Rights Reserved</span>
        </div>
    </div>
  )
}

export default Footer