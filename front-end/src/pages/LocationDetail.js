import React, {useEffect, useState} from 'react'
import img from '../assets/img/hoian.jpg'
import check from '../assets/img/check.png'

import PieChart from '../components/Location_Detail_Component/PieChart'
import BarChart from '../components/Location_Detail_Component/BarChart'
import 'chartjs-plugin-datalabels'

import Table from '../components/Location_Detail_Component/Table'
import LoginRequired from '../components/Home_Components/LoginRequired'

import {useParams, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { setLocationItem, getLocationArray } from '../redux/tripSlice'

import {AiOutlineArrowUp} from 'react-icons/ai'





const LocationDetail = () => {


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user_id = useSelector((state) => state.user.id)
  const activeStatus = useSelector((state) => state.tripCreate.active)
  const day = useSelector((state) => state.tripCreate.day)

  const [loginRequiredActive, setLoginRequiredActive] = useState(false)
  const [scrollTopButtonActive, setScrollTopButton] = useState(false)
  const [choicesActive, setChoicesActive] = useState(false)

  const activeLoginRequired = () => {
    setLoginRequiredActive((prev) => !prev)
   }

   const handleActiveChoices = () => {
    setChoicesActive((prev) => !prev)
   }

  const {filterby} = useParams()
  const locationDetail = useSelector((state) => state.location.locationList)
  const locationDisplay = locationDetail.filter(location => location.id ===parseInt(filterby))[0]
  const total = locationDisplay.positive+locationDisplay.negative+locationDisplay.neutral


  //Category
  const hotelCategory = locationDetail.filter(location => location.category.name === 'Hotel')
  const hotel_id = hotelCategory.map(item => item.id)
  const restaurantCategory = locationDetail.filter(location => location.category.name === 'Restaurant')
  const restaurant_id = restaurantCategory.map(item => item.id)

  const pieDataSet = [
    ((locationDisplay.positive/total)*100).toFixed(2),
    ((locationDisplay.negative/total)*100).toFixed(2),
    ((locationDisplay.neutral/total)*100).toFixed(2),
  ]

  const barDataSet = [
  locationDisplay.convenient,
  locationDisplay.service,
  (locationDisplay.yummy && locationDisplay.yummy)
  ]

  const barLabels = [
    'Convenient',
    'Service',
    (locationDisplay.yummy && 'Yummy')
  ]

  const compareBarLables = locationDisplay.category.name === 'Hotel' ? hotelCategory.map(item => item.name) : restaurantCategory.map(item => item.name)

  // Compare to other location
  const tags = ['Positive','Convenient', 'Service', 'Yummy']
  if(locationDisplay.category.name === 'Hotel') {tags.pop()}
  const [compareLabel, setCompareLabel] = useState("Positive")
  const positiveCompare = locationDisplay.category.name === 'Hotel' ? hotelCategory.map(item => ((item.positive/(item.positive+item.negative+item.neutral))*100).toFixed(2)) : restaurantCategory.map(item => ((item.positive/(item.positive+item.negative+item.neutral))*100).toFixed(2))
  const positivePoint = ((locationDisplay.positive/total)*100).toFixed(2)
  const [compareBarDataSet, setCompareBarDataSet] = useState([...positiveCompare])
  const [comparePoint, setComparePoint] = useState(positivePoint)
  const sortedPositivePoint = locationDisplay.category.name === 'Hotel' 
    ? hotelCategory.map(item => ((item.positive/(item.positive+item.negative+item.neutral))*100).toFixed(2)).sort((a,b) => b-a) 
    : restaurantCategory.map(item => ((item.positive/(item.positive+item.negative+item.neutral))*100).toFixed(2)).sort((a,b) => b-a)
  const ranking = sortedPositivePoint.findIndex((value) => value === positivePoint)
  const [rank, setRank] = useState(ranking)
  console.log(compareLabel);

  
  const handleSetCompareLabel = async(label) => {
    setCompareLabel(label)
    setChoicesActive((prev) => !prev)
  }

  useEffect(() => {
  
    if (compareLabel === 'Service') {
      //Service points
      const serviceCompare = locationDisplay.category.name === 'Hotel'
        ? hotelCategory.map(item => ((item.service / item.positive) * 100).toFixed(2))
        : restaurantCategory.map(item => ((item.service / item.positive) * 100).toFixed(2));
      const servicePoint = ((locationDisplay.service/locationDisplay.positive)*100).toFixed(2)
      //Ranking point
      const sortedServicePoint = locationDisplay.category.name === 'Hotel' 
      ? hotelCategory.map(item => ((item.service / item.positive) * 100).toFixed(2)).sort((a,b) => b-a) 
      : restaurantCategory.map(item => ((item.service / item.positive) * 100).toFixed(2)).sort((a,b) => b-a)
      const rank = sortedServicePoint.findIndex((value) => value === servicePoint)
      setComparePoint(servicePoint)
      setRank(rank)
      setCompareBarDataSet([...serviceCompare]);
    }
    //convenient points
    else if (compareLabel === 'Convenient') {
      const convenientCompare = locationDisplay.category.name === 'Hotel'
        ? hotelCategory.map(item => ((item.convenient / item.positive) * 100).toFixed(2))
        : restaurantCategory.map(item => ((item.convenient / item.positive) * 100).toFixed(2));
      const convenientPoint = ((locationDisplay.convenient/locationDisplay.positive)*100).toFixed(2)
       //Ranking point
       const sortedConvenientPoint = locationDisplay.category.name === 'Hotel' 
       ? hotelCategory.map(item => ((item.convenient / item.positive) * 100).toFixed(2)).sort((a,b) => b-a) 
       : restaurantCategory.map(item => ((item.convenient / item.positive) * 100).toFixed(2)).sort((a,b) => b-a)
       const rank = sortedConvenientPoint.findIndex((value) => value === convenientPoint)
      setComparePoint(convenientPoint)
      setRank(rank)
      setCompareBarDataSet([...convenientCompare]);
    }
    //yummy points
    else if (compareLabel === 'Yummy') {
      const yummyCompare = restaurantCategory.map(item => ((item.yummy / item.positive) * 100).toFixed(2));
      const yummyPoint = ((locationDisplay.yummy/locationDisplay.positive)*100).toFixed(2)
       //Ranking point
       const sortedYummyPoint = restaurantCategory.map(item => ((item.yummy / item.positive) * 100).toFixed(2)).sort((a,b) => b-a)
       const rank = sortedYummyPoint.findIndex((value) => value === yummyPoint)
      setComparePoint(yummyPoint)
      setRank(rank)
      setCompareBarDataSet([...yummyCompare]);
    }
    //positive points 
    else if (compareLabel === 'Positive') {
      setCompareBarDataSet([...positiveCompare]);
      setComparePoint(positivePoint)
      setRank(ranking)
    }
  }, [compareLabel, comparePoint, positivePoint, ranking]);


  //
  const airportDistanceDataSet = hotelCategory.map(item => item.airport_distance)

  const sortedAirportDistance = hotelCategory.map(item => item.airport_distance).sort((a,b) => a-b)
  const airportDistanceRank = sortedAirportDistance.findIndex((value) => value === locationDisplay.airport_distance)

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 800) {
        setScrollTopButton(true);
      } else {
        setScrollTopButton(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handelAddData = () => {
    const newData = {
        id: locationDisplay.id,
        name: locationDisplay.name,
        address: locationDisplay.address,
        url: locationDisplay.url,
        latitude: locationDisplay.latitude,
        longitude: locationDisplay.longitude,
        category: locationDisplay.category.name,
        day: day
      };
    dispatch(setLocationItem(newData))
    dispatch(getLocationArray(day))
    navigate('/tripcreate')

}
  

  const pieData = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [
      {
        data: pieDataSet,
        backgroundColor: [ 
        'rgb(238, 108, 77, 1)',
        'rgb(23, 161, 205, 1)',
        'rgba(255, 191, 0, 1)',
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
        ],
      },
    ],
  }

  const pieOptions = {
    plugins: {
      datalabels: {
        display: true,
      },
    },
  }

  const barData = {
    labels: barLabels,
    datasets: [
      {
        label: locationDisplay.name,
        data: barDataSet,
        backgroundColor: 'rgb(238, 108, 77, 1)',
      },
    ],
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: locationDisplay.positive,
      }
    }
  }

  const compareBarData = {
    labels: compareBarLables,
    datasets: [
      {
        label: compareLabel,
        data: compareBarDataSet,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        hoverBackgroundColor: "#EC932F",
      },
    ],
  }

  const compareBarOptions = {
    plugins: {
      datalabels: {
        display: true,
        color: '#36A2EB',
        align: "end",
        anchor: "end",
        font: { size: "8" }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    },
    onclick: function(event, elements) {
      if(elements.length > 0) {
        const barIndex = elements[0]._index
        console.log('Clicked on bar', barIndex)
      }
    }
  }

  const airportDistanceBarData = {
    labels: compareBarLables,
    datasets: [
      {
        label: 'airport distance',
        data: airportDistanceDataSet,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        hoverBackgroundColor: "#EC932F",
      },
    ],
  }

  const airportDistanceBarOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 10
      }
    }
  }
  console.log(locationDisplay)
  


  return (
    <div className='mt-8 mx-8'>
      {
        loginRequiredActive &&
        <LoginRequired
          active = {activeLoginRequired}
        />
      }
      <div className='flex'>
        <div className='w-1/2 rounded-xl overflow-hidden relative'>
          {
            locationDisplay.image ?
            (
              <img src={locationDisplay.image} alt='location' className='w-full h-full object-cover'/>
            )
            :
            (
              <img src={img} alt='location' className='w-full h-full object-cover'/>
            )
          }
          {/* <div className='absolute flex items-center justify-between p-4 rounded-full bg-white top-1 right-1'>
            <span>Rating rate: 4.9</span>
          </div> */}
        </div>
        <div className='w-1/2 mx-8 flex flex-col justify-between'>
          {/* Name */}
          <h1 className=' text-4xl font-bold text-slate-900'>{locationDisplay.name}</h1>
          {/* Category */}
          <p className='mt-3 text-2xl font-bold text-slate-900'>Category: 
            <span className='text-2xl font-semibold'> {locationDisplay.category.name}</span>
          </p>
          {/* Subcategory */}
          {
            locationDisplay.category.name === 'Hotel' &&
            <p className='mt-3 text-2xl font-bold text-slate-900'>Rating: 
              <span className='text-2xl font-semibold'>  {locationDisplay.subcategory} stars</span>
            </p>
          }
          {
            locationDisplay.category.name === 'Restaurant' &&
            <p className='mt-3 text-2xl font-bold text-slate-900'>Restaurant type: 
              <span className='text-2xl font-semibold'>  {locationDisplay.subcategory} </span>
            </p>
          }
          {/* Adress */}
          <p className='mt-3 text-2xl font-bold text-slate-900'>Address: <span className='text-2xl font-semibold'>{locationDisplay.address}</span></p>
          {/* Airport Distance */}
          {
            locationDisplay.airport_distance !==0 &&
            <p className='mt-3 text-2xl font-bold text-slate-900'>Distance from airport: 
              <span className='text-2xl font-semibold'> {locationDisplay.airport_distance} km</span>
            </p>
          }
          {/* Tag */}
          <div className='mt-5 flex items-center '>
            {locationDisplay.tag.map((item, index) => {
              return(
                item.id &&  (
                  index === 0 ? (
                    <div className='flex items-center w-32 mr-5'>
                      <span className='text-slate-900 font-semibold border border-slate-900 rounded-full py-2 px-4 mr-2'>{item.name}</span>
                      <img src={check} alt='check' className='h-6 w-6'/>
                    </div>
                  )
                  :
                  <div key={index} className='flex items-center w-32 mx-5'>
                    <span className='text-slate-900 font-semibold border border-slate-900 rounded-full py-2 px-4 mr-2'>{item.name}</span>
                    <img src={check} alt='check' className='h-6 w-6'/>
                  </div>
                )
              )             
            })}
          </div>
          {/* Button */}
          <div className='flex items-center w-full mt-8'>
            {
                !user_id ? 
                (
                  <button onClick={activeLoginRequired} className='py-4 px-12 border border-slate-900 rounded-xl text-2xl font-semibold hover:bg-pink-600 hover:border-none hover:text-white'>Add to wishlist</button>
                )
                :
                (
                  <button className='py-4 px-12 border border-slate-900 rounded-xl text-2xl font-semibold hover:bg-pink-600 hover:border-pink-600 hover:text-white'>Add to wishlist</button>
                )
              }
            {
              activeStatus && 
              <button onClick={handelAddData} className='py-4 px-12 border border-slate-900 rounded-xl text-2xl font-semibold ml-16 hover:bg-slate-900 hover:text-white hover:font-bold'>Add to trip list</button>  
            }
          </div>
        </div>
      </div>
      {/* Analyze Result */}
      {/* Check if it is sight seeing */}
      {
        locationDisplay.category.name !== "Sight Seeing" && (

      <div className='mt-8'>
        <h1 className=' text-4xl font-bold text-slate-900'>Analyze Result</h1>
              {/* Comment  */}
          <div className='mt-5 flex flex-col items-center'>
            <div className='w-1/2 mb-10 mr-auto'>
              <Table
                name = {'Comment Analyze'}
                firtRowName = {'Positive'}
                firtRowValue = {locationDisplay.positive}
                secondRowName = {'Negative'}
                secondRowValue = {locationDisplay.negative}
                thirdRowName = {'Neutral'}
                thirdRowValue = {locationDisplay.neutral}
                fourthRowName = {'Total'}
                fourthRowValue = {total}
              />
            </div>
            {/* Pie Chart */}
            <div className='flex items-center justify-between w-full mx-96'>
              <div className='h-1/3 w-1/3'>
                <PieChart 
                  data = {pieData}
                  options = {pieOptions}
                  /> 
              </div>
              <div className='w-1/2'>
                <h1 className='text-2xl font-bold text-slate-900 mb-5'>Pie Chart About Positive Comment of {locationDisplay.name}</h1>
                <Table
                name = {'Legend'}
                firtRowName = {'Positive'}
                firtRowValue = {((locationDisplay.positive/total)*100).toFixed(2) + '%'}
                secondRowName = {'Negative'}
                secondRowValue = {((locationDisplay.negative/total)*100).toFixed(2) + '%'}
                thirdRowName = {'Neutral'}
                thirdRowValue = {((locationDisplay.neutral/total)*100).toFixed(2) + '%'}
                />
                <p class="text-lg text-slate-900 my-4">
                  Based on the feedback and sentiment analysis, it is clear that this place is
                  <span class="text-green-600 font-semibold"> highly recommended</span> for your trip. The
                  <span> overwhelmingly positive comments</span>, accounting for
                  <span class="text-blue-600 font-bold text-xl"> {((locationDisplay.positive/total)*100).toFixed(2)}%</span> of the total, reflect the positive experiences and satisfaction of visitors. This
                  <span class="text-green-600 font-semibold"> strong endorsement</span> makes it an
                  <span class="text-green-600 font-semibold"> ideal destination</span> for your next adventure.
                </p>
              </div>
            </div>
          </div>
          {/* Tag */}
          <h1 className=' text-4xl font-bold text-slate-900 mt-12'>Evaluation of Convenient, Service {(locationDisplay.yummy ? ', and Yummy comments' : 'comments')} at {locationDisplay.name}</h1>
          <div className='mt-8 flex flex-col items-center'>
            <div className='w-1/2 mr-auto'>
              <Table
                name = {'Tags'}
                firtRowName = {'Covenient'}
                firtRowValue = {locationDisplay.convenient + '/' + locationDisplay.positive + ' pcmts(*)'}
                secondRowName = {'Service'}
                secondRowValue = {locationDisplay.service + '/' + locationDisplay.positive + ' pcmts(*)'}
                thirdRowName = {'Yummy'}
                thirdRowValue = {locationDisplay.yummy && locationDisplay.yummy + '/' + locationDisplay.positive + ' pcmts(*)'}
              />
              <div className='flex flex-col mt-2'>
                <small className='font-semibold'>* positive comments</small>
                <small className='font-semibold'>Convenient stand for those seeking a beautiful, luxurious, spacious, and airy environment,...</small>
                <small className='font-semibold'>Service stand for a dedicated and attentive staff.</small>
                {
                  locationDisplay.yummy && 
                <small className='font-semibold'>yummy stand for savoring a delectable, clean, and rich culinary experience that is not only delicious but also suitable for discerning tastes. Our offerings are prepared with care and expertise, ensuring every bite is a delectable and excellent delight for your palate.</small>
                }
              </div>
              

            </div>
            {/* Bar Chart */}
            <div className=' w-full my-8 flex items-center justify-between'>
              <div className='w-[800px] h-[400px]' style={{pointerEvents: 'none'}}>
                <BarChart
                  data = {barData}
                  options = {barOptions}
                  total = {locationDisplay.positive}
                  /> 
              </div>
              <div className='w-1/2 pr-5'>
                  <h1 className='text-2xl font-bold text-slate-900 mb-5'>Bar Chart: Evaluation of Convenient, Service {(locationDisplay.yummy && ', and Yummy')} at {locationDisplay.name}</h1>
                  <Table
                  name = {'Legend'}
                  firtRowName = {'Convenient'}
                  firtRowValue = {((locationDisplay.convenient / locationDisplay.positive)*100).toFixed(2) + '%'}
                  secondRowName = {'Service'}
                  secondRowValue = {((locationDisplay.service / locationDisplay.positive)*100).toFixed(2) + '%'}
                  thirdRowName = {'Yummy'}
                  thirdRowValue = {locationDisplay.yummy && ((locationDisplay.yummy / locationDisplay.positive)*100).toFixed(2) + '%'}
                  />
                  {
                    (((((locationDisplay.convenient / locationDisplay.positive)*100).toFixed(2) > 40)) || (((locationDisplay.service / locationDisplay.positive)*100).toFixed(2)) >40) ?
                    (
                      <p class="text-lg text-slate-900 my-4">
                        After analyzing the feedback, it's clear that this place is
                        <span class="text-green-600 font-semibold"> highly recommended</span> for your trip. Over
                        <span class="text-blue-600 font-bold text-xl"> 40%</span> of the positive comments highlight its
                        <span> 
                          {(((locationDisplay.convenient / locationDisplay.positive)*100).toFixed(2) > 40) && <span> exceptional <span class="text-green-600 font-semibold"> convenience</span></span>}
                          {(((locationDisplay.service / locationDisplay.positive)*100).toFixed(2)) >40 && <span> outstanding <span class="text-green-600 font-semibold"> service</span></span> }
                          </span>, making it an
                        <span class="text-green-600 font-semibold"> ideal destination</span> for your next adventure.
                      </p>
                    )
                    :
                    (
                      <p class="text-lg text-slate-900 my-4">After analyzing the feedback, we found positive comments about this place, but it may not stand out for its convenience or service. Consider it for your next adventure based on your preferences.</p>
                    )
                  }
                  
              </div>
            </div>
          </div>
          {/* Compare */}
          <h1 className=' text-4xl font-bold text-slate-900 mt-12'>Compare To Other Location</h1>
          {/* Positive comments */}
          <div className='mt-5 flex items-center justify-between'>
            <div className='w-1/3'>
            {
              rank < 3 ? (
                <p class="text-lg text-slate-900 my-4">
                  With a remarkable 
                  <span class="text-blue-600 font-bold text-xl"> {comparePoint}% </span>
                  of {compareLabel} comments, this place ranks among the top 
                  <span class="text-blue-600 font-bold text-xl"> {rank + 1}</span>
                  <span class="text-green-600 font-semibold">
                    {locationDisplay.category.name === 'Restaurant' && ' restaurants '} 
                    {locationDisplay.category.name === 'Hotel' && ' hotels '} 
                  </span>
                  we've analyzed. It's our strong recommendation for your trip.
                </p>
              ) : rank + 1 > 10 ? (
                <p class="text-lg text-slate-900 my-4">
                  Unfortunately, despite being ranked at 
                  <span class="text-blue-600 font-bold text-xl"> #{rank + 1} </span>
                  with a commendable 
                  <span class="text-blue-600 font-bold text-xl"> {comparePoint}% </span>
                  of {compareLabel} comments, this place falls outside the top 10 rankings. 
                  We recommend exploring other options for your trip.
                </p>
              ) : (
                <p class="text-lg text-slate-900 my-4">
                  Despite being ranked at 
                  <span class="text-blue-600 font-bold text-xl"> #{rank + 1} </span>
                  with a commendable 
                  <span class="text-blue-600 font-bold text-xl"> {comparePoint}% </span>
                  of {compareLabel} comments, this place falls just outside the top three. 
                  Nevertheless, it's still a notable 
                  <span class="text-green-600 font-semibold">
                    {locationDisplay.category.name === 'Restaurant' && ' restaurant '} 
                    {locationDisplay.category.name === 'Hotel' && ' hotel '} 
                  </span>
                  in our analysis. Consider it as a viable option for your trip.
                </p>
              )
            }             
            </div>
            <div className='w-[800px] h-[400px]'>
                {/* Filter button */}
                <div className='w-1/4 relative mb-5'>
                  {/* Drop down list */}
                  <div>
                    <button onClick={handleActiveChoices} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      Compare by
                      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  {/* Choices */}
                  {
                    choicesActive && (
                      <div className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div className="py-1" role="none">
                          {
                            tags.map((item, index) => (
                              <button onClick={() => handleSetCompareLabel(item)} className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-200 w-full" role="menuitem" tabindex="-1" id={index}>{item}</button>
                            ))
                          }
                        </div>
                      </div>  
                    )
                  }         
                </div>
                <h1 className='text-2xl font-bold text-slate-900 mb-5'>{compareLabel} comments</h1>
                  <BarChart
                    data = {compareBarData}
                    options = {compareBarOptions}
                    name = {locationDisplay.name}
                    id = {locationDisplay.category.name === 'Hotel' ? hotel_id : restaurant_id}
                    /> 
            </div>
          </div>
          {/* Distance to airport */}
          {
            locationDisplay.category.name === 'Hotel' &&
            <div className='mt-14 flex items-center justify-between'>
            <div className='w-[800px] h-[400px]'>
                  <h1 className='text-2xl font-bold text-slate-900 mb-5'>Distance to aiport</h1>
                    <BarChart
                      data = {airportDistanceBarData}
                      options = {airportDistanceBarOptions}
                      name = {locationDisplay.name}
                      id = {hotel_id}
                      /> 
            </div>
            <div className='w-1/3'>
              <p class="text-lg text-slate-900 my-4">
              This location ranks 
              <span class="text-blue-600 font-bold text-xl"> {airportDistanceRank+1} </span>
              among the hotels we've analyzed in terms of its proximity to the airport, with a distance of only 
              <span class="text-blue-600 font-bold text-xl"> {locationDisplay.airport_distance} </span>
              kilometers from the airport.
              </p>
            </div>
          </div>
          }
      </div>
        )
      }
     {
      scrollTopButtonActive &&
      <div className='fixed right-5 bottom-5 hover:bottom-8 transition-all duration-300 ease-in-out'>
        <button onClick={scrollToTop} className='py-5 px-5  bg-slate-900 rounded-full'><AiOutlineArrowUp className=' text-white font-bold'/></button>
      </div>
     }
    </div>
  )
}

export default LocationDetail

