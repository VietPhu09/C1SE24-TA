import React from 'react'
import HeroSection from '../components/Home_Components/HeroSection'
import HomeCarousel from '../components/Home_Components/HomeCarousel';
import InfoSection from '../components/Home_Components/InfoSection';
import FeedBackSection from '../components/Home_Components/FeedBackSection';
import FAQSection from '../components/Home_Components/FAQSection';
import Footer from '../components/Home_Components/Footer';

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
        <InfoSection/>
      </section>

      {/* Blog Section */}
      <section className="blog-container">

      </section>

      {/* FeedBack */}
      <section className="feedback-container">
        <FeedBackSection/>
      </section>

      {/* FAQ Section */}
      <section className="faq-container">
        <FAQSection/>
      </section>

      {/* Footer Section */}
      <section className="info-container">
        <Footer/>
      </section>
    </div>

  )
}


