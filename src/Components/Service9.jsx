import React, { useEffect } from 'react'

import img1 from "../assets/service9.png";

export default function Service9() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="w-[97%] 2xl:w-[75%] mx-auto my-[90px]  py-[20px] px-[40px] ">
      <h1 className="h1 !text-[#3E4349]  uppercase">
        <span className="text-[#91816c] ">cd</span> &
        <span className="text-[#91816c] "> dvd</span> copying into (
        <span className="text-[#91816c] ">duplication</span>) service
      </h1>
      <br />
      <img
        src={img1}
        className="w-[200px] md:w-[400px] xl:w-[500px] hidden md:block float-right my-7 ml-[20px] mt-[50px]"
      />
      <p className="p">
        Photoreal is a place in Brooklyn NY which makes copies of CDs and DVDs
        (unless they are copy-protected).
      </p>
      <br />
      <p className="p">We are able to make a copy of:</p>
      <ul className="list-disc list-outside ml-5 p">
        <li>data CD / DVD</li>
        <li>photo CD / DVD</li>
        <li>MP3 CD / DVD</li>
        <li>AudioCD / AudioDVD</li>
        <li>VideoCD / VideoDVD</li>
      </ul>
      <br />
      <p className="p">We are NOT able to make a copy of the CD/DVD which:</p>
      <ul className="list-disc list-outside ml-5 p">
        <li>is copy-protected</li>
        <li>has too many scratches</li>
      </ul>
      <br />
      <p className="p">We don’t restore CDs/DVDs.</p>
      <p className="p">Price is the following:</p>
      <br />
      <table className="min-w-full border border-gray-300 text-sm shadow-xl p my-[60px]">
        <thead>
          <tr className="bg-[#91816c] text-white ">
            <th className="text-left p-3 border-r border-gray-300 !text-white  p">
              Service type
            </th>
            <th className="text-left p-3 border-r border-gray-300 !text-white  p">
              Price
            </th>
            <th className="text-left p-3 border-r border-gray-300 !text-white  p">
              Time to do the work
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium">Copy DVD to CD</td>
            <td className="p-3 align-top">$7 + tax per DVD</td>
            <td className="p-3 align-top">next day</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium">Copy DVD to CD</td>
            <td className="p-3 align-top">$9 + tax per DVD</td>
            <td className="p-3 align-top">next day</td>
          </tr>
        </tbody>
      </table>
      <p className="p">You’ll get copies in a paper sleeve bundled together with original CD/DVD by a rubber band.</p>
      <p className="p">Thank You!</p>
    </section>
  );
}
