import React from 'react'
import BlogCard from './HomeCard/BlogCard'
import next from '../../assets/img/next.png'
import CarouselData from '../Home_Components/CarouselData'

const BlogSection = () => {
  return (
    <div className=' mt-8 mx-8'>
      <div className='flex items-center justify-between'>
          <h1 className=' font-bold text-3xl'>Many AMAZING TRIP BLOG posts</h1>
          <div className='flex items-center justify-center'>
            <span className=' text-lg font-bold text-blue-400' >See more</span>  <img src={next} alt='next' className=' h-4'/>
          </div>
      </div>
      <div className='grid grid-cols-2 grid-rows-3 gap-4 mt-8'>
        {
          CarouselData.map((item) =>(
            <BlogCard
              id = {item.id}
              url = {item.imageUrl}
              name = {item.namePlace}
              des = {item.feedback}
            />
          ))
        }
      </div>

    </div>
  )
}

export default BlogSection