import React, { useEffect } from 'react'

import img1 from "../assets/service3.jpg";

export default function Service3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="w-[95%] 2xl:w-[75%] mx-auto my-[90px] py-[20px] px-[40px]">
      <h1 className="h1  uppercase">
        <span className="text-[#3E4349]">
          Film developing and scanning into{" "}
        </span>
        CD/USB/email
        <span className="text-[#3E4349]"> (35mm and 120mm films)</span>
      </h1>
      <div>
        <h1 className="h1 text-[#3E4349]">Types of ID Photos We Take</h1>
        <hr />
        <br />
        <div>
          <img className="float-right ml-7 w-[200px] md:w-[400px] xl:w-[500px]  hidden md:block  rounded-lg" src={img1} />
          <p className="p">We develop (process) these types of film:</p>
          <ul className="list-disc list-inside p">
            <li>color films (C-41) (35mm and 120mm)</li>
            <li>220mm films</li>
            <li>E-6 (slide) films</li>
            <li>black & white films (35mm and 120mm)</li>
            <li>disposable cameras (color and black & white)</li>
            <li>APS films</li>
          </ul><br />
          <div>
            <p className="p">We don’t develop (don’t process):</p>
            <ul className="list-disc list-inside p">
              <li>110mm films</li>
              <li>other film types</li>
              <li>other film</li>
            </ul> <br />
          </div>
          <div>

          <h1 className="h1 text-[#3E4349]">Types of ID Photos We Take</h1>
          <hr /><br />
          <p className="p">Color Rolls are $13 for scanning and take ~1 day.</p>
          <p className="p">B/W Rolls are 35mm and costs $16.</p>
          <p className="p">120mm Rolls either b/w or colour costs $21 plus tax</p>
          <p className="p">You’ll get your negatives back.</p>
          </div> <br />
          
          <div>
          <h1 className="h1 text-[#3E4349]">How to pay</h1>
          <hr /><br />
            <p className="p">We accept:</p>
            <ul className="list-disc list-inside p">
              <li>cash</li>
              <li>credit / debit card</li>
              <li>Apple Pay, Google Pay</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
