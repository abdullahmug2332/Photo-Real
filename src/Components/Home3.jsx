import React from 'react'
import {data} from "../data/index"
import { Link } from 'react-router-dom'


export default function Home3() {
  return (
    <section id='services' className='home2 bg-[#25292c] py-[40px]'>
      <div className=' w-[93%] 2xl:w-[75%] mx-auto '>
        <p className='text-[30px] md:text-[58px] font-[700] tracking-tighter mb-[20px] text-white uppercase h tracking-wider'><span className='text-[#91816c]'>Our </span>Services</p>
        <p className='p text-[17px] md:text-[20px] mb-[15px] text-white pf'>Our services include passport and ID photo printing for any country. We specialize in film and disposable camera development, along with digital photo printing and scanning for slides and negatives. Enhance your memories with a photo slideshow on DVD and video or audio tape digitizing. We also offer CD/DVD duplication and fax services for your convenience.</p>
        <hr className="text-white hover mt-[30px]" />
        <div className="cards grid grid-cols-2 md:grid-cols-5 gap-3 mt-[20px] text-center ">
            {data.map(({id,service,heading,text})=>{
                    return <Link  to ={`/${service}`}  className='bg-[white] hover:bg-[transparent] border border-white rounded-[5px] w-[100%] hover:text-white h-[200px] hover:scale-[1.02] cursor-pointer duration-500 flex flex-col justify-center items-center p-2 ' key={id}>
                        <p className='text-[13px] sm:text-[18px] md:text-[13px] text-[#91816c] font-black '>{heading}</p>
                        <p className='text-[11px]  sm:text-[16px] md:text-[11px] '>{text}</p>
                    </Link>
                }
            )

            }
        </div>

    </div>
    </section>
  )
}
