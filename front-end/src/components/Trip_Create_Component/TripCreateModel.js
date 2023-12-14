import React, { useState, useEffect } from 'react'
import LocationCard from './LocationCard/LocationCard'
import {  useSelector } from 'react-redux';
import {GrClose} from 'react-icons/gr'

const TripCreateModel = (props) => {

  const locationData = useSelector((state) => state.location.locationList)
  const hotelList = locationData.filter(location => location.category.name === 'Hotel')
  const restaurantList = locationData.filter(location => location.category.name === 'Restaurant')

  const [choicesActive, setChoicesActive] = useState(false)
  const handleActiveChoices = () => {
    setChoicesActive((prev) => !prev)
   }

  const [selectedValue, setSelectedValue] = useState(1);

  const handleChange = (event) => {
    setSelectedValue(parseInt(event.target.value, 10));
    console.log(selectedValue)
  };


  const [listType, setListType] = useState(hotelList)
  const [selectedCategory, setSelectedCategory] = useState('Hotel');

  const changeCategory = (category) => {
    if (category === 'Hotel') setListType(hotelList)
    if (category === 'Restaurant') setListType(restaurantList)

    setSelectedCategory(category)
  }

  return (
    <div className='fixed inset-0 z-50  '>
      {/* Overlay */}
      <div class="absolute inset-0 bg-black opacity-40"></div>
      {/* Main Contain */}
      <div className='w-full h-full'>
        <div className='py-4 pt-0 px-10 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-xl overflow-y-scroll custom-scrollbar-style'>
            <div className=' sticky top-0 bg-white z-50 py-4 shadow-lg -mt-8'>
              <div onClick={props.active} className='absolute top-4 right-4 cursor-pointer rounded-full hover:bg-slate-200 p-2'>
                <GrClose/>
              </div>
              <div className='flex items-center'>
                  <button onClick={() => changeCategory('Hotel')} className={`py-1 px-4 border border-slate-400 rounded-lg mr-8 ${selectedCategory === 'Hotel' ? 'bg-slate-900 text-white' : ''} `}>Hotel</button>
                  <button onClick={() => changeCategory('Restaurant')} className={`py-1 px-4 border border-slate-400 rounded-lg mr-8 ${selectedCategory === 'Restaurant' ? 'bg-slate-900 text-white' : ''} `}>Restaurant</button>
                  <button className='py-1 px-4 border border-slate-400 rounded-lg mr-8'>Sight Seeing</button>
                  <button className='py-1 px-4 border border-slate-400 rounded-lg mr-8'>Hotel</button>
              </div>                         
            </div>
                <div className=' h-px bg-slate-400  mt-5'></div>
                <div className='my-5'>
                  <span className='text-lg font-bold'>Top Recomendation</span>
                </div>
                {/* Dropdonw */}
                <div className=' w-1/6 relative mb-5'>
                  {/* Drop down list */}
                  <div>
                    <button onClick={handleActiveChoices} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      Hotel Star
                      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  {/* Choices */}
                  {
                     choicesActive &&
                     (
                      <div className='relative mb-5'>
                          <input type="range" 
                             min="1" 
                             max="5" 
                             defaultValue={selectedValue} 
                             step="1" 
                             class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                             onChange={handleChange}
                             ></input>
                          <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">1</span>
                          <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">2</span>
                          <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-2/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">3</span>
                          <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-3/4 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">4</span>
                          <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">5</span>
                      </div>
                        
                     )
                  }   
                </div>
              <div className=''>
               {
                listType.map((item, index) =>
                (
                  <div key={index}>
                    <LocationCard 
                    id = {item.id}
                    name = {item.name}
                    address = {item.address}
                    url = {item.image}
                    tags = {item.tag}
                    category = {item.category.name}
                    subcategory = {item.subcategory}
                    latitude = {item.latitude}
                    longitude = {item.longitude}
                    airport_distance = {item.airport_distance}
                    active = {props.active}
                  />   
                  </div>
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