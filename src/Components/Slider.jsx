import React from 'react'
import Marquee from "react-fast-marquee";

export default function Slider() {
  return (
    <>
    <div className='fixed top-0 z-50'>
        <div className="slider-container">
        <Marquee speed={100} gradient={false} pauseOnHover={true} className='slider-text hover:cursor-pointer'>
            <p>
            For US passports: Infants under 3 years old can apply Monday to Friday (8 AM to 10 AM only) — excluding Canadian passport photos. 
            </p>
        </Marquee>

      </div>
    </div>

    </>
  )
}
