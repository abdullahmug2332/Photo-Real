import React from 'react'
import Marquee from "react-fast-marquee";

export default function Slider() {
  return (
    <>
    <div className='fixed top-0 z-50'>
        <div className="slider-container">
        <Marquee speed={80} gradient={false} pauseOnHover={false} className='slider-text hover:cursor-pointer'>
            For US passports: Infants under 3 years old can apply Monday to Friday (8 AM to 10 AM only) — excluding Canadian passport photos. For ages 3 years to adults: Applications are accepted Monday to Friday, 8 AM to 3 PM.
        </Marquee>

      </div>
    </div>

    </>
  )
}
