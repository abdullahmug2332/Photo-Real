import React, { useEffect } from 'react'

import img1 from "../assets/service4.jpg";

export default function Service4() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="w-[97%] 2xl:w-[75%] mx-auto my-[90px]  py-[20px] px-[40px]">
      <h1 className="h1 text-[#3E4349] uppercase h">
      Disposable <span className='text-[#91816c]'>cameras</span> developing
      </h1>
      <hr />
      <br />
      <p className="p">
        We develop (process) color and black & white disposable cameras that
        look like these:
      </p>
      <img src={img1} className="w-[100%] my-7  hidden md:block " />
      <br />
      <h1 className="h1 text-[#3E4349] h">Price list</h1>
      <hr />
      <br />
      <table className="min-w-full border border-gray-300 text-sm shadow-xl p">
        <thead>
          <tr className="bg-[#91816c] text-white p">
            <th className="text-left p-3 border-r border-gray-300 !text-white p">
              Job
            </th>
            <th className="text-left p-3 border-r border-gray-300 !text-white p">
              Price
            </th>
            <th className="text-left p-3 !text-white p">time to do</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium p">prints only (4″x6″)</td>
            <td className="p-3 align-top p">Call or come in for Pricing</td>
            <td className="p-3 align-top p">1 day</td>
          </tr>
          <tr className="border-t border-gray-300 ">
            <td className="p-3 align-top font-medium p">email only</td>
            <td className="p-3 align-top p">Call or come in for Pricing</td>
            <td className="p-3 align-top p">1 day</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium p">
              4″x6″ prints + email
            </td>
            <td className="p-3 align-top p">Call or come in for Pricing</td>
            <td className="p-3 align-top p">1 day</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium p">scan to USB only</td>
            <td className="p-3 align-top p">Call or come in for Pricing</td>
            <td className="p-3 align-top p">1 day</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium p">
              4″x6″ prints + scan to USB
            </td>
            <td className="p-3 align-top p">Call or come in for Pricing</td>
            <td className="p-3 align-top p">1 day</td>
          </tr>
        </tbody>
      </table>{" "}
      <br />
      <h1 className="h1 text-[#3E4349 h">How to pay</h1>
      <hr />
      <br />
      <p className="p">We accept:</p>
      <ul className="list-disc list-inside p">
        <li>cash</li>
        <li>credit / debit card</li>
        <li>Apple Pay, Google Pay</li>
      </ul>
    </section>
  );
}
