import React, { useEffect } from 'react'


export default function Service5() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="w-[95%] 2xl:w-[75%] mx-auto my-[90px]  py-[20px] ">
      <h1 className="h1 text-[#20B2AA] uppercase">
        Digital <span className="text-[#3E4349]">Photos</span> Printing
      </h1><br />

      <div>
        <h1 className="h1 text-[#3E4349]">
          Types of disposable cameras we develop
        </h1>
        <hr />
        <br />
        <p className="p">
          We print photos from phones, tablets, emails, Google Drive / Dropbox /
          Google Photos links, WeTransfer links, WeSendIt links. <br />
          Your prints will be ready after 1 PM and available the following
          business day in the morning. <br />
          Same day printing is not available! Sorry about that! <br />
          We use Fuji archival photo paper with matte and glossy finish. It is
          thick, durable and after printing colors stay for decades. <br />
        </p>
      </div>
      <br />
      <div>
        <h1 className="h1 text-[#3E4349]">Available print sizes:</h1>
        <hr />
        <br />
        <ul className="list-disc list-inside p">
          <li>3.5″x5″</li>
          <li>4″x6″ (most common)</li>
          <li>5″x7″</li>
          <li>8″x10″</li>
          <li>8″x12″</li>
        </ul><br />
      </div>
      <div>
        <h1 className="h1 text-[#3E4349]">Price per print:</h1>
        <hr />
        <br />
        <div className='overflow-x-auto'>
        <table className=" min-w-[700px] w-[100%] border border-gray-300 text-sm shadow-xl p">
        <thead>
          <tr className="bg-[#20B2AA] text-white p">
            <th className="text-left p-3 border-r border-gray-300 !text-white p">
            Total # of prints
            </th>
            <th className="text-left p-3 border-r border-gray-300 !text-white p">
            3″x5″
            </th>
            <th className="text-left p-3 !text-white p">4″x6″</th>
            <th className="text-left p-3 !text-white p">5″x7″</th>
            <th className="text-left p-3 !text-white p">8″x10″</th>
            <th className="text-left p-3 !text-white p">8″x12″</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium p">1-2 prints</td>
            <td className="p-3 align-top p">$2.00</td>
            <td className="p-3 align-top p">$2.00</td>
            <td className="p-3 align-top p">$4.00</td>
            <td className="p-3 align-top p">$7.00</td>
            <td className="p-3 align-top p">$8.00</td>
          </tr>
          <tr className="border-t border-gray-300 ">
            <td className="p-3 align-top font-medium p">3-5 prints</td>
            <td className="p-3 align-top p">$1.50</td>
            <td className="p-3 align-top p">$1.50</td>
            <td className="p-3 align-top p">$3.50</td>
            <td className="p-3 align-top p">$6.50</td>
            <td className="p-3 align-top p">$7.50</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium p">6-10 prints</td>
            <td className="p-3 align-top p">$1.00</td>
            <td className="p-3 align-top p">$1.00</td>
            <td className="p-3 align-top p">$3.00</td>
            <td className="p-3 align-top p">$6.00</td>
            <td className="p-3 align-top p">$7.00</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium p">11-20 prints</td>
            <td className="p-3 align-top p">$0.75</td>
            <td className="p-3 align-top p">$0.75</td>
            <td className="p-3 align-top p">$2.75</td>
            <td className="p-3 align-top p">$5.50</td>
            <td className="p-3 align-top p">$6.50</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium p">21-50 prints</td>
            <td className="p-3 align-top p">$0.55</td>
            <td className="p-3 align-top p">$0.55</td>
            <td className="p-3 align-top p">$2.50</td>
            <td className="p-3 align-top p">$4.75</td>
            <td className="p-3 align-top p">$6.00</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium p">51+ prints</td>
            <td className="p-3 align-top p">$0.50</td>
            <td className="p-3 align-top p">$0.50</td>
            <td className="p-3 align-top p">$2.00</td>
            <td className="p-3 align-top p">$4.25</td>
            <td className="p-3 align-top p">$5.00</td>
          </tr>
        </tbody>
      </table><br />
      </div>
      
      <p className="p">Matte finish is available for an additional cost.
        For scanning orders, please inquire within.</p> <br />
      </div><br />
      <h1 className="h1 text-[#3E4349]">How to pay</h1>
          <hr /><br />
            <p className="p">We accept:</p>
            <ul className="list-disc list-inside p">
              <li>cash</li>
              <li>credit / debit card</li>
              <li>Apple Pay, Google Pay</li>
            </ul>
    </section>
  );
}
