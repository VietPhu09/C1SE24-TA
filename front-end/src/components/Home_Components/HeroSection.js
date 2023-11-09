import React from 'react'
import airplaneLogo from '../../assets/HomeImg/airplane.png'
import mapLogo from '../../assets/HomeImg/tablet.png'
import { NavLink } from "react-router-dom";

const HeroSection = (props) => {
    const user_id = props.user_id
    const active = () => {
        if(user_id)
            return props.activeTripInitial()
        return props.activeLoginRequired()
    }
    return (
        <section className="max-w-7xl p-7 md:grid grid-cols-2 mx-auto pt-8">
            <div className="md:flex items-center sm:flex sm:justify-center sm:mb-8">
                <img src={airplaneLogo} className=" w-16 h-16 md:w-64 md:h-64 sm:w-64 sm:h-64" alt="Airplane Logo" />
                <img src={mapLogo} className="lg:block md:hidden sm:hidden w-16 h-16 md:w-48 md:h-48 md:relative top-10 right-10" alt="Map Logo" />
            </div>
            <div className="flex flex-col lg:text-3xl font-bold md:text-2xl space-y-7 md:text-center md:space-y-5 sm:text-5xl sm:text-center">
                TRAVEL IS EASY WITH <span className='text-sky-600' >TRAVEL ADVISOR</span>
                <p className='lg:text-xl font-semibold md:text-lg lg:px-10 md:px-16 sm:text-xl sm:text-center'>Get a personalized itinerary just for you, guided by traveler tips and reviews.</p>
                    <button 
                        onClick={() => active()}
                        className="bg-[#3662ff] lg:text-xl md:text-lg sm:text-base hover:bg-[#4d73fa] text-white font-semibold lg:py-3 md:py-2 sm:py-4 px-4 border-b-4 border-[#000000] hover:border-[#000000] rounded-full lg:m-11 md:m-16">
                        Start your trip now
                    </button>

            </div>
        </section>

    )
}

export default HeroSection