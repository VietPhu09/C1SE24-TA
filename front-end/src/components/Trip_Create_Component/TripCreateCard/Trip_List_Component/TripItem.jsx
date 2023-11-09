import React, { useState } from 'react'
import LocationItem from './LocationItem'

import { useDispatch } from 'react-redux'
import { updatedLocationOrder } from '../../../../redux/tripSlice'

import { setDay } from '../../../../redux/tripSlice'

import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'


const TripItem = (props) => {

    const dispatch = useDispatch()

    const data = props.data 
    const [getList, setGetList] = useState([])

    const handleGetList = (props) => {
      const findDay = data.items.find((item) => item.day === props)
      setGetList(findDay.locations)
    }
    
    const formatDateTripList = (input) => {
        const date = new Date(input)
        const options = {month: 'long', day: 'numeric'}
        return date.toLocaleDateString('en-US', options)
    }
    
    const getDate = (day) => {
        dispatch(setDay(day))
        return props.active()
    }

    const handleOnDragEnd =(result) => {
      
      const items = Array.from(getList)
      const [reorderdItem] = items.splice(result.source.index, 1)
      items.splice(result.destination.index, 0, reorderdItem)

      dispatch(updatedLocationOrder(items))

    }

  return (

  <div className='my-8'>
    {data.items.map((item, index) => {
      // const finDay = item.find((item) => item.day === 1)
      return (
        <div key={index}>
          {item.locations.length === 0 ? (
            // Empty items
            <div className='border-b border-b-slate-400 pb-8 mt-8'>
              <div>
                <h1 className='text-3xl font-bold'>{formatDateTripList(item.day)}</h1>
              </div>
              <div className='mt-5 flex flex-col items-center'>
                <p className='text-base font-light text-slate-900'>Nothing saved yet!</p>
                <button onClick={() => getDate(item.day)} className='mt-5 px-4 py-2 border border-slate-900 rounded-xl hover-bg-slate-900 hover-text-white'>Add items</button>
              </div>
            </div>
          ) : (
            // Trip items
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId={item.day}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <div>
                      <h1 className='text-3xl font-bold mt-5'>{formatDateTripList(item.day)}</h1>
                    </div>
                    <div className='flex flex-col mt-5'>
                      {item.locations.map((location, index) => {
                        return (
                          location.id && (
                            <Draggable
                              key={location.id}
                              draggableId={`${location.id}-${index}`}
                              index={index}                             
                            >
                              {(provided) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} onMouseDown={() => handleGetList(location.day)}>
                                  <LocationItem
                                    id={location.id}
                                    name={location.name}
                                    address={location.address}
                                    day={location.day}
                                    index={index}
                                  />
                                </div>
                              )}
                            </Draggable>
                          )
                        )
                      })}
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <button onClick={() => getDate(item.day)}  className='mt-5 border border-slate-700 py-2 px-6 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-900 hover:text-white'>+ Add</button> 
            </DragDropContext>
          )}
        </div>
      );
    })}
  </div>


  )
}

export default TripItem

