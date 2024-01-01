import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setDataMyTrip } from '../redux/mytripSlice'
import Slideshow from '../components/My_Trip_Component/SlideShow'
import { AiOutlineSchedule } from 'react-icons/ai'
import { SlLocationPin } from 'react-icons/sl'
import { Link, useParams } from 'react-router-dom';

import bana from '../assets/TripImg/bana.jpg'
import hoian from '../assets/TripImg/hoian.jpg'
import dragonBridge from '../assets/TripImg/dragonbrigde.jpeg'
import francevillage from '../assets/TripImg/francevillage.jpg'
import pagoda from '../assets/TripImg/pagoda.jpg'
import nguhanhson from '../assets/TripImg/nguhanhson.jpg'

import trashcan from '../assets/TripImg/trashbin.png'

const MyTrip = () => {
    const {filterby} = useParams()
    console.log('filterby:', filterby)
    const API = process.env.REACT_APP_SERVER_DOMAIN;
    const dispatch = useDispatch();
    const myTripData = useSelector((state) => state.myTrip.mytripList)
    const token = localStorage.getItem('accessToken');

    const imgList = [hoian, bana, dragonBridge, francevillage, pagoda, nguhanhson]
    console.log(myTripData)

    const fetchData = async () => {
        try {
            const res = await axios.get(`${API}mytrips/`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Data:', res.data);
            dispatch(setDataMyTrip(res.data.data))
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchData()
    }, [API]);

    const handleDeleteTrip = async(id) => {
        try{
          const res = await axios.delete(`${API}deletetrip/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
          })
          console.log(res.data)
        }
        catch(err){
            console.error(err)
        }
        finally{
            fetchData()
        }
    }
  return (
    <div>
    <div className='flex justify-center mb-10'>
        <Slideshow/>
    </div>

    <div className='flex justify-center text-4xl font-bold mb-3'>My Trips</div>

    <div className='flex flex-col items-center'>
        {myTripData.map((trip, index) => {
            const randomItem = imgList[Math.floor(Math.random() * imgList.length)]  
            const firstDay = trip.items[0].day;
            const lastDay = trip.items[trip.items.length - 1].day;
            return (
                <div className='flex w-3/5 mb-3 border border-slate-400 rounded relative' key={trip.id}>
                    <img className='w-[200px] h-[150px] object-cover' src={randomItem} alt='' />
                    <div className='ml-3 mt-3'>
                        <div className='text-2xl font-semibold'>{trip.name}</div>
                        <div className='flex items-center mb-2'>
                            <AiOutlineSchedule />
                            <span>{firstDay} ---- {lastDay}</span>
                        </div>
                        <div className='flex items-center mb-2'>
                            <SlLocationPin />
                            <span>Đà Nẵng</span>
                        </div>
                        <Link to={`/mytripdetail/${trip.id}`}>Details &#8594;</Link> 
                    </div>
                    <div onClick={() => handleDeleteTrip(trip.id)} className=' absolute right-4 top-4 h-7 w-7 cursor-pointer'>
                        <img src={trashcan}/>
                    </div>
                </div>
            )
        })}
    </div>
</div>
  )
}

export default MyTrip