import React from 'react'
import HeroSection from '../components/Home_Components/HeroSection'

import HomeCarousel from '../components/Home_Components/HomeCarousel';

export const Home = () => {



  return (
    <div>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300 '>
        <HeroSection />
      </div>

      {/* Carousel Section */}
      <section>
        <HomeCarousel />
      </section>

      {/* Info Section */}
      <section className="info-container">

      </section>

      {/* Blog Section */}
      <section className="blog-container">

      </section>

      {/* Blog Section */}
      <section className="blog-container">

      </section>

      {/* FAQ Section */}
      <section className="faq-container">

      </section>

      {/* Footer Section */}
      <section className="info-container">

      </section>
    </div>

  )
}


