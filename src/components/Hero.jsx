import React from 'react'
import '../styles/Hero.css'
import '../styles/aos.css'
import furniture1 from "../assets/furniture1.png"
import BannerDetails from './BannerDetails';
function Hero() {
  return (
    <div className='hero-container'>
      <section className="first">
         
        <div className='tagline'>
          <p>Dematerialization
at the service of your business</p>
        </div>
        </section><section className='harsh'>
        <div className='quote'>
          <p>Esalink supports you in the digitalization of your B2B flows</p>
        </div>
        <br></br>
      </section>
      <div >
      <section className="second">
     
        <div className='left'>
          
          <div className="btn-area">
            <button>Property</button>
            <button>Real Estate</button>
            <button>Furniture</button>
            <button>Minimalist</button>
          </div>
          <div className='img-container' style={{aspectRatio:"103 / 46"}}>
            <img  src={furniture1} alt="" srcset="" />
          </div>
       
        </div>
         

        <div className="right">
          <BannerDetails />
          <div className='right-content'>
                <p>No One Has More Experience Or Expertise To Help You Than An Agent Who is A Realtor </p>
            </div>
            <button className='explore-btn'>Explore</button>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Hero;