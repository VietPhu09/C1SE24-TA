import React from 'react'
import { NavLink } from 'react-router-dom'

const FAQSection = () => {
  return (
    <div className='flex flex-col items-center mt-20 py-20 bg-slate-200'>
        <div className='flex flex-col items-center mt-8  '>
            <h1 className=' text-4xl font-bold uppercase'>any question?,</h1>
            <h1 className=' text-4xl font-bold uppercase'>let us help you discover the world</h1>
        </div>
        <NavLink>
            <button className='border border-black  rounded-2xl py-2 px-5 mt-20 text-xl font-normal hover:bg-slate-300 '>Contact Us</button>
        </NavLink>
    </div>
  )
}

export default FAQSection