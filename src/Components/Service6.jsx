import React, { useEffect } from 'react'

import img1 from "../assets/service6.jpg";

export default function Service6() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="w-[95%] 2xl:w-[75%] mx-auto my-[90px]  py-[20px] px-[40px] ">
      <h1 className="h1 !text-[#3E4349] ">
       Photo slideshow with music on a DVD
      </h1>
      <br />
      <div>
        <img
          src={img1}
          className="w-[200px] md:w-[400px] xl:w-[500px] hidden md:block float-right my-7 ml-[20px] mt-[50px]"
        />
        <h1 className="h1 text-[#3E4349]">We offer scanning of:</h1>
        <hr />
        <br />
        <ul className="list-disc list-inside p">
          <li>Photos (up to 8.5″x11″) (one-sided and two-sided)</li>
          <li>35mm films (35mm color and black&white)</li>
          <li>35mm slides (color and black&white)</li>
          <li>Instax and Polaroid photos</li>
          <li>We don’t scan from the Albums</li>
        </ul>
        <br />
        <div>
          <h1 className="h1 text-[#3E4349]">We don’t scan:</h1>
          <hr />
          <br />
          <ul className="list-disc list-inside p">
            <li>Books</li>
            <li>Blueprints</li>
            <li>Documents</li>
            <li>Artwork</li>
            <li>Photos that can’t be detached from their frames</li>
            <li>Anything larger than 8.5″x11″</li>
          </ul>
          <br />
        </div>
        <p className="p">Price and turnaround time depend on the quantity of materials, urgency of work, and quality (resolution) of the scanning <br />The digital copies we will send you by email/WeTransfer. <br />Scanning photos that require removing them from photo albums takes 3x-5x more time than scanning loose photos. <br />To get an estimate, feel free to send us an email, give us a call at (718) 875-1776, or bring the materials to the store. <br />Thank you!</p>
      </div>
    </section>
  );
}



