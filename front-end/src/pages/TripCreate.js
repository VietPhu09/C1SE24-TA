import React, { useState, useEffect } from 'react'
import TripInfo from '../components/Trip_Create_Component/TripCreateCard/Trip_List_Component/TripInfo'
import TripList from '../components/Trip_Create_Component/TripCreateCard/TripList'
import TripCreateModel from '../components/Trip_Create_Component/TripCreateModel'
import TripCancel from '../components/Trip_Create_Component/TripCancel'
import Map from '../components/Trip_Create_Component/TripCreateCard/Map'

import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'

import { useNavigate } from 'react-router-dom'

import axios from 'axios'



const TripCreate = () => {

    const navigate = useNavigate()

    const tripCreateAPI = process.env.REACT_APP_SERVER_DOMAIN

    const initialData = useSelector((state) => state.tripCreate)
    
    const formatDateTripInfo = (input) => {
        const date = new Date(input)
        const options = {month: 'short', day: 'numeric'}
        return date.toLocaleDateString('en-US', options)
    }    

    const [isActive, setIsActive] = useState(false)
    const [cancelIsActive, setCancelIsActive] = useState(false)

    const handleActive = () => {setIsActive((prev) => !prev)}
    const handleCancelActive = () => {setCancelIsActive((prev) => !prev)}


    const handleTripCreate = async(e) => {
        e.preventDefault()
        const data = {
            name: initialData.name,
            days: initialData.days,
            user: initialData.user,
            items: initialData.items.map((item) => {
                return{
                    ...item,
                    day: item.day,
                    locations: item.locations.map((location) => location.id)
                }
            })
        }

        if (data) {
          const token = localStorage.getItem('accessToken')
            try {
              const response = await axios.post(
                `${tripCreateAPI}tripcreate/`,
                data,
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  },
                }
              );
          
              const dataRes = response.data;
          
              if (dataRes.message) {
                toast.success(dataRes.message);
                navigate('/');
              } else if (dataRes.error) {
                toast.error(dataRes.error);
              }
            } catch (error) {
              // Handle errors here
              console.error(error);
              toast.error("Login again!")
            }
          }
    }

    useEffect(() => {
        const handleBeforeUnload = (e) => {
          // Customize the confirmation message
          const confirmationMessage = 'Are you sure you want to leave this page?';
    
          // Display the confirmation message when the user tries to reload or leave the page
          e.returnValue = confirmationMessage;
    
          // Some additional action you want to perform before unloading the page
          // For example, saving data, making an API call, etc.
          // You can put your code here.
    
          // Note: Some browsers may not display the custom message.
        };
    
        // Attach the beforeunload event handler when the component mounts
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, []);


    //   Map

    


  return (
    <div className='mt-8 mx-8 flex'>
        {
            isActive && 
            <TripCreateModel
            active = {handleActive}
        />
        }
        {
            cancelIsActive &&
            <TripCancel
                active= {handleCancelActive}
            />
        }
        <div className='w-2/3 mx-8'>
            <div className='w-full'>
                <TripInfo
                    name = {initialData.name}
                    firstDay = {formatDateTripInfo(initialData.items[0].day)}
                    lastDay = {formatDateTripInfo(initialData.items[initialData.items.length-1].day)}
                    days = {initialData.days}
                />
                <TripList
                    days = {initialData.items}
                    data = {initialData}
                    active = {handleActive}
                />
            </div>
            <div className='flex items-center border-t border-t-slate-900 py-5 mb-10'>
            <button onClick={handleTripCreate} className='mt-5 border border-slate-700 py-2 px-6 rounded-lg text-base font-bold text-slate-800 hover:bg-slate-900 hover:text-white'>Complete</button> 
            <button onClick={handleCancelActive} className='mt-5 ml-12 border border-slate-700 py-2 px-6 rounded-lg text-base font-bold text-slate-800 hover:bg-slate-900 hover:text-white'>Cancel</button> 
            </div>
        </div>
        <div className='w-1/3 h-full mx-8 mb-8 rounded-lg overflow-hidden sticky top-4 '>
            <Map/>
        </div>
    </div>
  )
}

export default TripCreate