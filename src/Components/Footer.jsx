import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";


export default function Footer() {
  return (
    <>
      <div className='footerup relative top-2'>
            contact
      </div>
      <div className="  items-center bg-[#20b2aa] text-white">
        <div className="w-[80%] mx-auto flex flex-col gap-[40px] ">
        <p className='text-[30px] md:text-[50px] text-center'>Contact US</p>
        <p className='text-[20px] md:text-[25px] text-center'>If you need any service related to photo, film or digital stuff, please contact us, we may be able to help you with it!</p>
         <div className="flex flex-col  w-[80%] justify-start gap-2 ">
            <p className='text-[15px] md:text-[20px] '> <IoIosMail className='inline mr-3 text-[30px]'/>photoreal52@gmail.com</p>
            <p className='text-[15px] md:text-[20px] '><BsTelephoneInboundFill className='inline mr-4 text-[20px]' />(718) 875-1776</p>
            <p className='text-[15px] md:text-[20px] '><IoLocation className='inline mr-3  text-[20px]' /> 52 Court Street, 2nd floor, Brooklyn, NY 11201, USA.</p>
        </div> 
        <hr className='text-white' />
        <p className='text-center text-[15px] md:text-[17px] pb-[20px]'>All Copyright Reserved © 2025 | Photoreal</p>
          
      </div>
      </div>
    </>
  )
}
