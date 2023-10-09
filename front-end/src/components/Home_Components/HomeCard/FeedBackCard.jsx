import React from 'react'
import note from '../../../assets/img/note.png'
const FeedBackCard = (props) => {
  return (
    <div className='flex mt-5 justify-center w-full'>
            <div className='flex flex-col items-center justify-center bg-blue-500 w-80 py-5 rounded-lg relative'>
                <div className=' h-36 w-36 rounded-full'><img src={props.url} alt='avt' className='object-cover w-36 h-36 rounded-full'/></div>
                <h2 className='text-slate-100 text-2xl font-semibold my-5'>{props.name}</h2>
                <div className=' bg-white mx-5 py-5 rounded-lg'>
                    <p className=' text-lg font-medium mx-2 my-2'>"{props.feedback}"</p>
                </div>
                <img src={note} alt='note' className=' h-20 w-20 absolute right-1 top-48'/>
            </div>
        </div>
  )
}

export default FeedBackCard