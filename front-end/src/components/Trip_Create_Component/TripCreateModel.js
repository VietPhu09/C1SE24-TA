import React, { useState, useEffect, useRef, useCallback } from 'react'
import LocationCard from './LocationCard/LocationCard'
import {  useSelector } from 'react-redux';
import {GrClose} from 'react-icons/gr'
import './MultiRangeSlider/MultiRangeSlider.css'

const TripCreateModel = (props) => {

  const locationData = useSelector((state) => state.location.locationList)
  const hotelList = locationData.filter(location => location.category.name === 'Hotel')
  const restaurantList = locationData.filter(location => location.category.name === 'Restaurant')
  const sightSeeingList = locationData.filter(location => location.category.name === 'Sight Seeing')

  const [choicesActive, setChoicesActive] = useState(false)
  const handleActiveChoices = () => {
    setChoicesActive((prev) => !prev)
   }

  const [selectedValue, setSelectedValue] = useState(1);

  const handleChange = (event) => {
    setSelectedValue(parseInt(event.target.value, 10));
    console.log(selectedValue)
  };

  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(5);
  let min = 1
  let max = 5
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    value => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);


  const [listType, setListType] = useState(hotelList)
  const [selectedCategory, setSelectedCategory] = useState('Hotel');

  const changeCategory = (category) => {
    if (category === 'Hotel') setListType(hotelList)
    if (category === 'Restaurant') setListType(restaurantList)
    if (category === 'SightSeeing') setListType(sightSeeingList)

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
                  <button onClick={() => changeCategory('SightSeeing')} className={`py-1 px-4 border border-slate-400 rounded-lg mr-8 ${selectedCategory === 'SightSeeing' ? 'bg-slate-900 text-white' : ''} `}>Sight Seeing</button>
              </div>                         
            </div>
                <div className=' h-px bg-slate-400  mt-5'></div>
                <div className='my-5'>
                  <span className='text-lg font-bold'>Top Recomendation</span>
                </div>
                {/* Dropdonw */}
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