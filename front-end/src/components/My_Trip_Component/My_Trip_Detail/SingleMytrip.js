import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BgSingleMytrip from './BgSingleMytrip';
import { useSelector } from 'react-redux';


const SingleMytrip = () => {
    const { filterby } = useParams();
    const myTripDetail = useSelector((state) => state.myTrip.mytripList)
    const singleMytrip = myTripDetail.filter(trip => trip.id === parseInt(filterby))[0];
    console.log(singleMytrip)
    const { name, items } = singleMytrip;
    const [selectedDay, setSelectedDay] = useState(items[0].day);

    return (
        <div className='flex justify-around'>
            <div className='w-3/5 '>
                <BgSingleMytrip />
                <div className="flex">
                    {items.map(item => (
                        <button
                            key={item.day}
                            className={`${selectedDay === item.day ? 'bg-gray-200' : ''} px-4 py-2`}
                            onClick={() => setSelectedDay(item.day)}
                        >
                            {item.day}
                        </button>
                    ))}
                </div>

                <div className="pt-4 border-t-4">
                    {items.find(item => item.day === selectedDay).locations.map((location, index) => (
                        <div className='flex' key={location.id}>
                            <div className='flex flex-col items-center'>
                                <h4 className='p-8 h-6 mr-3 bg-gray-200 flex items-center'>{index + 1}</h4>
                                <div class="border-l-2 border-dotted border-gray-400 w-0 h-full"></div>
                            </div>

                            <div className='w-full'>
                                <h1>{location.name}</h1>
                                <img className='h-[350px] w-full rounded-xl' src={location.image} alt='' />
                                <p>Adress: {location.address}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div >
{/* 
            <div className=' '>
                <img className='rounded-lg w-[500px] h-[700px]' src={bando2} alt='' />

            </div> */}
        </div >
    );
};

export default SingleMytrip;
