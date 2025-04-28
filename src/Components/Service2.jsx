import React, { useEffect } from 'react'

import img1 from "../assets/service2.jpg";

export default function Service2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className=" w-[97%] 2xl:w-[75%] mx-auto my-[90px]  py-[20px] px-[40px]">
      <h1 className="h1  uppercase">
        <span className="text-[#3E4349]">photos </span>
        for
        <span className="text-[#3E4349]"> id</span>
      </h1>
      <div>
        <img className="float-right ml-7 w-[200px] md:w-[300px] rounded-lg  hidden md:block " src={img1} />
        <div>
          <p className="p">Get photos for these types of ID in 5 minutes:</p>
          <ul className="list-disc list-inside p">
            <li>Court ID for SecurePass</li>
            <li>Reduced fare MetroCard</li>
            <li>Driver’s license</li>
            <li>International driver’s license</li>
            <li>“Green card” (permanent resident card)</li>
            <li>“Green card” lottery (DV lottery)</li>
            <li>Student or teacher ID</li>
          </ul>
        </div><br />
        <div>
          <p className="p">Price:</p>
          <ul className="list-disc list-inside p">
            <li>2 photos for $15</li>
            <li>4 photos for $26</li>
          </ul> <br />
        </div>
        <div>
          <p className="p">P.S. We don’t make IDs! We only make photos for IDs. <br />Thank you!</p>
        </div>
      </div>
    </section>
  );
}
