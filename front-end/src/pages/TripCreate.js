import React, { useState } from 'react'
import TripInfo from '../components/Trip_Create_Component/TripCreateCard/Trip_List_Component/TripInfo'
import TripList from '../components/Trip_Create_Component/TripCreateCard/TripList'
import TripCreateModel from '../components/Trip_Create_Component/TripCreateModel'

import { useSelector } from 'react-redux'

const TripCreate = () => {

    const initialData = useSelector((state) => state.tripCreate)
    
    const formatDateTripInfo = (input) => {
        const date = new Date(input)
        const options = {month: 'short', day: 'numeric'}
        return date.toLocaleDateString('en-US', options)
    }    

    const [isActive, setIsActive] = useState(false)

    const handleActive = () => {setIsActive((prev) => !prev)}

  return (
    <div className='mt-8 mx-8 flex'>
        {
            isActive && 
            <TripCreateModel
            active = {handleActive}
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
        </div>
        <div className='w-1/3 mx-8'>Hi</div>
    </div>
  )
}

export default TripCreate