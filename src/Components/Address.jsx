import React from "react";
import img1 from "../assets/address1.png";
import img2 from "../assets/address2.png";
import { useEffect } from "react";

export default function Address() {
   useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <section className=" ah mt-[80px] w-[90%] 2xl:w-[75%] mx-auto ">
      <h1 className="h1 text-center">
        Address<span className="text-[#3E4349]"> &</span> Business Hours
      </h1>
      <iframe
        className="w-[100%] h-auto min-h-[80vh] rounded-[20px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.1618517830902!2d-73.99001928344659!3d40.69243293208334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a491f8cd38d%3A0x6d83b64e40f5470a!2sPhotoreal!5e0!3m2!1sen!2s!4v1745843725958!5m2!1sen!2s"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>

      <div></div>
      <div className="flex flex-col md:flex-row justify-between my-[20px]  ">
        <div className="text-center md:text-start my-[10px] md:my-[30px] w-[70%] mx-auto md:w-[30%]  shadow-xl  p-7 rounded-lg duration-500 hover:scale-[1.02] cursor-pointer">
          <p className="text-[#20b2aa] text-[20 px] md:text-[25px]">
            <strong>Phone, Fax, Email</strong>
          </p>
          <p className="p  ">
            <strong>Tel.</strong>: (718) 875-1776
          </p>
          <p className="p  ">
            <strong>Fax:</strong> (718) 222-0844
          </p>
          <p className="p  ">
            (fax is always on for receiving your faxes)
          </p>
          <p className="p  ">
            <strong>Email</strong>: photoreal52@gmail.com
          </p>
        </div>
        <div className="text-center md:text-start my-[10px] md:my-[30px] w-[70%] mx-auto md:w-[30%]  shadow-xl   p-7 rounded-lg duration-500 hover:scale-[1.02] cursor-pointer">
          <p className="text-[#20b2aa] text-[20 px] md:text-[25px]">
            <strong>Business Hours</strong>
          </p>
          <p className="p  ">Monday – Friday: 8 am – 3 pm</p>
          <p className="p  ">(passport photos – until 3 pm!)</p>
          <p className="p  ">
            <strong>Saturday:</strong> closed
          </p>
          <p className="p  ">
            <strong>Sunday:</strong> closed
          </p>
        </div>
        <div className="text-center md:text-start my-[10px] md:my-[30px] w-[70%] mx-auto md:w-[30%]  shadow-xl   p-7 rounded-lg duration-500 hover:scale-[1.02] cursor-pointer">
          <p className="text-[#20b2aa] text-[20 px] md:text-[25px]">
            <strong>Address</strong>
          </p>
          <p className="p  ">52 Court Street, 2nd floor,</p>
          <p className="p  ">Brooklyn Heights,</p>
          <p className="p  ">Brooklyn, NY 11201.</p>
        </div>
      </div>
      <img src={img1} className="w-[100%] rounded-[15px]" />
      <div className="flex  my-[50px] justify-between">
        <div className="w-[100%] md:w-[50%]  ">
          <div className=" p-7 rounded-lg shadow-xl   duration-500 hover:scale-[1.02] cursor-pointer ">
            <p className="text-[#20b2aa] text-[20px] md:text-[25px]">
              <strong>Location</strong>
            </p>
            <p className="p ">
              We are located on Court St between Joralemon and Livingston St.
            </p>
            <p className="p">
              Entrance to the store is between “Starbucks” and “Dunkin Donuts.”
            </p>
          </div>
          <br />
          <div className=" p-7 rounded-lg shadow-xl  duration-500 hover:scale-[1.02] cursor-pointer">
            <p className="text-[#20b2aa] text-[20 px] md:text-[25px]">
              <strong>How to get to us by subway:</strong>
            </p>
            <ul className="list-disc">
              <li className="my-[10px] p">
                From Brooklyn: <br />
                2, 3, 4 or 5 train to “Borough Hall” station,
                <br />
                R train to “Court St” station,
                <br />
                F train to “Jay St – Metro Tech” station,
                <br />G train to “Hoyt St” station.
              </li>
              <li className="my-[10px] p ">
                From Manhattan: <br />
                A, C, F train to “Jay St – Metro Tech”, <br />
                2, 3, 4 or 5 train to “Borough Hall” station, <br />R train to
                “Court St” station.
              </li>
            </ul>
          </div><br />

          <div className=" p-7 rounded-lg shadow-xl   duration-500 hover:scale-[1.02] cursor-pointer">
            <p className="text-[#20b2aa] text-[20 px] md:text-[25px]">
              <strong>Parking:</strong>
            </p>
            <p className="p e">
              Most of the time there is no parking near us. You can call ahead
              and double park for a few minutes to drop off or pick up your
              order. Sorry for the inconvenience!
            </p>
          </div>
          <br />

          <div className="p-7 rounded-lg shadow-xl  duration-500 hover:scale-[1.02] cursor-pointer">
            <p className="text-[#20b2aa] text-[20 px] md:text-[25px]">
              <strong>Wheelchair:</strong>
            </p>
            <p className="p">
              We are located on the second floor, so if you can’t go up the
              stairs, call the store at (718) 875-1776 and we’ll help{" "}
              (Preferred infant passport photo hours
              are 8–10am.)
            </p>
          </div>
          <br />
        </div>
        <img
          className="md:w-[400px] h-auto hidden md:block rounded-[15px]"
          src={img2}
        />
      </div>
    </section>
  );
}
