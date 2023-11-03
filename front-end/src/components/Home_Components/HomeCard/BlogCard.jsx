import React from 'react'
import next from '../../../assets/img/next.png'

const BlogCard = (props) => {
  return (
        props.id ===1 ? (
            <div className=' col-span-1 row-span-3 w-full h-full relative'>
                <div className=' rounded-xl overflow-hidden relative w-full h-full '>
                    <img src={props.url} className=' object-cover w-full h-full' alt='img'/>
                    <div className='absolute bg-gradient-to-r from-black to-transparent h-full w-full top-0 right-0 opacity-40'></div>
                </div>
                <div className=' absolute w-1/3 top-10 left-10'>
                    <p className=' text-3xl font-bold text-white'>{props.name}</p>
                    <p className=' text-lg text-white font-semibold mt-5'>{props.des}</p>
                </div>
            </div>

        ) :
       (
        <div className=' col-span-1 row-span-1 h-[200px] w-full flex items-start justify-between ml-5 relative  '>
            <div className=' rounded-xl overflow-hidden h-full w-1/2'>
                <img src={props.url} alt='img' className=' w-full h-full object-cover '/>
            </div>
            <div className='ml-5 w-1/2'>
                <p className=' text-xl font-semibold '>{props.name}</p>
                <p className='text-sm font-semibold text-slate-600'>Writen by: Admin , Sep 14 2023</p>
                <p className=' text-base font-semibold mt-8'>{props.des}</p>
                <div className='flex items-center justify-center mt-5 absolute right-0 top-40 '>
                     <span className=' text-lg font-bold text-blue-300' >Read more</span>  <img src={next} alt='next' className=' h-4'/>
                 </div>
            </div>
        </div>
       )
        
    
  )
}

export default BlogCard