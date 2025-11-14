import React from 'react'

export default function Homehero(props) {
  const data =props.data
  return (
    <>
    <section id='hero' className=' hero min-h-[739px] h-[100vh]  flex flex-col justify-center items-center' >
        <p className='font-bold text-[28px] md:text-[65px] text-white font-[Montserrat, "Trebuchet MS", sans-serif] h tracking-wider'>{data.title}</p>
        <p className='font-bold text-[18px] md:text-[30px] text-[#20B2AA] font-[Montserrat, "Trebuchet MS", sans-serif] '>{data.subTitle}</p>
    </section>
    </>
  )
}
