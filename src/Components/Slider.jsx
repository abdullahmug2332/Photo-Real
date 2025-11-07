import React from 'react'
import Marquee from "react-fast-marquee";

export default function Slider() {
  return (
    <>
    <div className='fixed top-0 z-50'>
        <div className="slider-container">
        <Marquee speed={100} gradient={false} pauseOnHover={true} className='slider-text hover:cursor-pointer'>
            <p className='text-[#FFA500]'>
            For US and other countries, we take passport photos for infants from 8 AM to 10 AM, and for adults from 8 AM to 3 PM, Monday to Friday. For Canadian passport photos, we only take photos for those aged 4 and above from 8 AM to 3 PM, Monday to Friday. 
            </p>
        </Marquee>

      </div>
    </div>

    </>
  )
}
