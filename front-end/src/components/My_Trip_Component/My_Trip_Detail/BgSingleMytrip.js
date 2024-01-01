import React from 'react'
// import { useParams, useLocation } from 'react-router-dom'
// import resdata from '../../../data/resdata.json'
import hoian from '../../../assets/TripImg/hoian.jpg'


const BgSingleMytrip = () => {
    // const { search } = useLocation();
    // const queryParams = new URLSearchParams(search);
    // const firstDay = queryParams.get('firstDay');
    // const lastDay = queryParams.get('lastDay');

    // const { MytripID } = useParams();
    // const singleMytrip = resdata.results.find(trip => trip.id === parseInt(MytripID));
    // const { id, name, image } = singleMytrip;

    return (
        <div className='mb-6 '>
            <img src={hoian} alt='' className='rounded-2xl w-[100%] h-[28rem]' />
            <div className='text-xl mt-[-60px] text-slate-100 font-bold flex justify-between mx-6'>
                <span>
                  a
                </span>
                <span>
                    Da Nang, Viet Nam
                </span>
            </div>
        </div>
    )
}

export default BgSingleMytrip
