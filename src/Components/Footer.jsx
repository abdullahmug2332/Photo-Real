import React from "react";
import { IoIosMail } from "react-icons/io";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";

export default function Footer() {
  return (
    <>
      <footer className="  items-center bg-[#91816c] text-white pt-[40px]">
        <div className="w-[93%] md:w-[80%] mx-auto mt-[20px]">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col gap-[10px] w-[100%] md:w-[50%]">
              <p className="text-[30px] md:text-[35px] h uppercase tracking-wider">Contact US</p>
              <p className="text-[15px] md:text-[18px] ">
                If you need any service related to photo, film or digital stuff,
                please contact us, we may be able to help you with it!
              </p>
              <div className="flex items-center">
                <IoIosMail className="inline mr-3 text-[30px]" />
                <p className="text-[15px] md:text-[18px] ">
                  photoreal52@gmail.com
                </p>
              </div>
              <div className="flex items-center">
                <BsTelephoneInboundFill className="inline mr-4 text-[20px] relative left-1" />
                <p className="text-[15px] md:text-[18px] relative left-1">
                  (718) 875-1776
                </p>
              </div>
              <div className="flex items-start md:items-center ">
                <IoLocation className="inline mr-3 self-start  text-[20px] relative top-1 left-1" />
                <p className="inline text-[15px] md:text-[18px] relative left-2">
                  {" "}
                  52 Court Street, 2nd floor, Brooklyn, NY 11201, USA.
                </p>
              </div>
            </div>
            <div className="w-[100%] md:w-[40%] ml-auto mt-[30px] md:mt-[0px] ">
            <iframe
            className="w-[100%] h-[250px]  rounded-[5px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.1618517830902!2d-73.99001928344659!3d40.69243293208334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a491f8cd38d%3A0x6d83b64e40f5470a!2sPhotoreal!5e0!3m2!1sen!2s!4v1745843725958!5m2!1sen!2s"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
            </div>
          </div>
          <hr className="text-white mt-5" />
          <p className="text-center mt-[20px] text-[15px] md:text-[17px] pb-[20px]">
            All Copyright Reserved © 2025 | Photoreal
          </p>
        </div>
      </footer>
    </>
  );
}
