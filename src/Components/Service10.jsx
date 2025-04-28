import React, { useEffect } from 'react'

import img1 from "../assets/service10.jpg";


export default function Service10() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="w-[97%] 2xl:w-[75%] mx-auto my-[90px]  py-[20px] px-[40px] ">
      <h1 className="h1 !text-[#3E4349]  uppercase">
        <span className="text-[#20b2aa] ">Fax </span> services
      </h1>
      <br />
      <img
        src={img1}
        className="w-[200px] md:w-[400px] xl:w-[500px] hidden md:block float-right my-7 ml-[20px] mt-[50px]"
      />
      <ul className="list-disc list-outside ml-5 p">
      <li className="p">Photoreal is the place with fax machine in Brooklyn NY where you can send and receive fax.</li><br />
      <li className="p">For receiving fax, our machine is always on. You can pick up the received fax during store hours.</li><br />
      <li className="p">Sending documents and other papers up to 8.5″x11″ by fax is available only during store hours.</li><br />
      <li className="p"><strong>Local fax (within United States):</strong> $1 per page</li><br />
      <li className="p"><strong>International fax:</strong> $5 for the 1st page and $3 for all other pages.</li><br />
      <li className="p">If you have 20 or more pages, we’ll give you a discount.</li><br />
      <li className="p">You will not be charged unless your fax goes through.</li><br />
      </ul>
    </section>
  );
}
