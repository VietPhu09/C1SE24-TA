import React from 'react'

const TripCard = () => {
    return (
        <div
            class="block rounded-lg bg-white drop-shadow-md hover:drop-shadow-xl bg-white mx-4">
            <a href="#!">
                <img
                    class="rounded-t-lg h-64 object-cover w-full"
                    src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                    alt="" />
            </a>
            <div class="p-6">
                <h5
                    class="mb-2 text-base font-medium leading-tight text-black">
                    Card title
                </h5>
                <div className='flex'>
                    <p class="mb-4 text-sm text-slate-900 pr-12">
                        Some quick example text to build on the card.
                    </p>
                    <div className=''>
                        <button className='bg-[#1e80ff] px-4 py-1 rounded-full text-sm font-semibold text-white hover:bg-[#358cff]'>Button</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TripCard