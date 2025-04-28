import React, { useEffect } from 'react'

import img1 from "../assets/service1.jpg";

export default function Service1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className=" w-[95%] 2xl:w-[75%] mx-auto mt-[90px]">
      <h1 className="h1  uppercase">
        Passport<span className="text-[#3E4349]">,</span> visa{" "}
        <span className="text-[#3E4349]">and</span> ID{" "}
        <span className="text-[#3E4349]">photos for any country</span>
      </h1>
      <div>
        <img className="float-right ml-7 mb-4" src={img1} />
        <p className="p">
          From 8AM until 3PM we take photos for passport, visa, driver’s
          license, and other kinds of IDs for all countries (US, Canada, UK,
          Schengen zone, Russia, China, Australia, New Zealand, Japan, and
          others) of people of all ages (newborn, infant, child, teenager,
          adult, senior).
        </p>
        <br />
        <p className="p">
          We are also able to send you a digital copy of the photo by email or
          save it to your USB drive or memory card.
        </p>{" "}
        <br />
        <p className="p">We can take photos even if you are on a wheelchair.</p>
        <br />
        <p className="p">
          We don’t take passport photos for Canada for children less than 2
          years old.
        </p>
        <br />
      </div>
      <div>
        <h1 className="h1 text-[#3E4349]">Types of ID Photos We Take</h1>
        <hr />
        <ul className="list-disc list-inside">
          <li className="my-[10px] p">Court ID for Secure Pass</li>
          <li className="my-[10px] p ">Reduced fare MetroCard</li>
          <li className="my-[10px] p">
            Driver’s license (including international driver’s license)
          </li>
          <li className="my-[10px] p ">Student / teacher ID for school</li>
          <li className="my-[10px] p">And others (you name it)</li>
        </ul>
        <br />
        <p className="p">
          We don’t print passport and visa photos from email, because 99% of the
          time they don’t meet requirements. We encourage you to take photos at
          our place. It will take less than 10 minutes and will meet all the
          requirements.
        </p>
        <br />
      </div>
      <div>
        <h1 className="h1 text-[#3E4349]">
          Price and time to get passport / visa photos (prints and digital):
        </h1>
        <hr />
        <ul className="list-disc list-outside ml-[20px]">
          <li className="my-[10px] p">
            photos for passport, visa or ID for any country (except for Canada):{" "}
            <br />
            $15 for 2 photos, <br />
            $26 for 4 photos <br />
            Turnaround time – 10 minutes.
          </li>
          <li className="my-[10px] p ">
            photos for Canada: <br />
            $18 for 2 photos <br />
            Electronic US $18 <br />
            50mmx70mm <br />
            Turnaround time – 20 minutes.
          </li>
        </ul>
        <br />
        <p className="p">
          For US passports: Infants under 3 years old can apply Monday to
          Friday(8 AM to 10 AM only) excluding Canadian passport photos. For
          ages 3 years to adults: Applications are accepted Monday to Friday, 8
          AM to 3 PM.
        </p>{" "}
        <br />
        <p className="p">
          If you don’t need prints and need only a digital photo that matches
          all the requirements for passport/visa – it is $15.
        </p>
        <br />
        <p className="p underline">
          No appointment is required you can walk in. To take passport photos
          please arrive before 3 PM (for Canadian passport photos, arrive before
          2:30 PM)
        </p>
      </div>{" "}
      <br />
      <div>
        <h1 className="h1 text-[#3E4349]">Photo Sizes and Requirements</h1>
        <hr />
        <div className="overflow-x-auto p-4">
          <table className="min-w-full border border-gray-300 text-sm shadow-xl">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="text-left p-3 border-r border-gray-300 p !text-white">
                  Country
                </th>
                <th className="text-left p-3 border-r border-gray-300 p !text-white">
                  Passport Requirements
                </th>
                <th className="text-left p-3 p !text-white">
                  Visa Requirements
                </th>
              </tr>
            </thead>
            <tbody>
              {/* United States */}
              <tr className="border-t border-gray-300">
                <td className="p-3 align-top font-medium p">United States</td>
                <td className="p-3 align-top ">
                  <strong>Photo requirements for US passport:</strong>
                  <br />
                  Photo size: 2"x2" (50×50 mm)
                  <br />
                  Head size: 25-35 mm
                  <br />
                  Background: plain white or off-white
                  <br />
                  No eyeglasses or glasses (even if you wear them all the time,
                  unless for medical reasons).
                  <br />
                  Natural smile but no teeth showing.
                  <br />
                  <strong>(Don't wear uniforms)</strong>
                </td>
                <td className="p-3 align-top">
                  <strong>
                    Photo requirements for US visa and driver's license:
                  </strong>
                  <br />
                  Same as US passport.
                  <br />
                  <br />
                  <strong>
                    Photo requirements for US citizenship or immigration:
                  </strong>
                  <br />
                  Same as passport.
                  <br />
                  <br />
                  <strong>
                    Photo requirements for Court ID / Secure badge photo:
                  </strong>
                  <br />
                  Same as passport.
                </td>
              </tr>

              {/* Canada */}
              <tr className="border-t border-gray-300">
                <td className="p-3 align-top font-medium p">Canada</td>
                <td className="p-3 align-top">
                  <strong>
                    Photo requirements for Canadian passport and citizenship:
                  </strong>
                  <br />
                  Photo size: 50×70 mm
                  <br />
                  Head size: 31-36 mm
                  <br />
                  A lot of other restrictions and requirements.
                  <br />
                  Time to make photos: 20-30 minutes.
                </td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for Canadian visa:</strong>
                  <br />
                  Photo size: 35×45 mm
                  <br />
                  Head size: 31-36 mm
                  <br />
                  Space above the head: 2-5 mm
                </td>
              </tr>

              {/* Brazil */}
              <tr className="border-t border-gray-300">
                <td className="p-3 align-top font-medium p">Brazil</td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for Brazilian passport:</strong>
                  <br />
                  Photo size: 2"x2" (50×50 mm)
                  <br />
                  Head size: 25-35 mm
                  <br />
                  Distance from top of the head to top of photo: 5 mm
                  <br />
                  White background
                </td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for Brazilian visa:</strong>
                  <br />
                  Photo size: 2"x2"
                  <br />
                  Head size: 25-35 mm
                  <br />
                  White background
                  <br />
                  Digital size: 413×531 pixels
                  <br />
                  Tips for Brazilian visa photos apply.
                </td>
              </tr>

              {/* UK */}
              <tr className="border-t border-gray-300">
                <td className="p-3 align-top font-medium p">UK</td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for UK passport:</strong>
                  <br />
                  Photo size: 35×45 mm
                  <br />
                  Head size: 29-34 mm
                  <br />
                  Background: grey or plain.
                  <br />
                  Smile: not allowed.
                  <br />
                  No glasses or hats unless religious.
                </td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for UK visa:</strong>
                  <br />
                  Same as for UK passport.
                </td>
              </tr>

              {/* Germany */}
              <tr className="border-t border-gray-300">
                <td className="p-3 align-top font-medium p">Germany</td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for German passport:</strong>
                  <br />
                  Photo size: 35×45 mm
                  <br />
                  Head size: 32-36 mm
                  <br />
                  Background: light grey or medium grey.
                  <br />
                  Smile: not allowed.
                </td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for German visa:</strong>
                  <br />
                  Same as for German passport.
                </td>
              </tr>

              {/* Ireland */}
              <tr className="border-t border-gray-300">
                <td className="p-3 align-top font-medium p">Ireland</td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for Irish passport:</strong>
                  <br />
                  If you need an Irish passport, 4 printed photos are required.
                  <br />
                  Head size: 32-36 mm.
                </td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for Irish visa:</strong>
                  <br />
                  Same as for Irish passport.
                </td>
              </tr>

              {/* Schengen */}
              <tr className="border-t border-gray-300">
                <td className="p-3 align-top font-medium p">Schengen zone</td>
                <td className="p-3 align-top">
                  (No passport - Schengen agreement)
                </td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for Schengen visa:</strong>
                  <br />
                  Photo size: 35×45 mm
                  <br />
                  Head size: 32-36 mm
                  <br />
                  White or light grey background.
                </td>
              </tr>

              {/* Greece */}
              <tr className="border-t border-gray-300">
                <td className="p-3 align-top font-medium p">Greece</td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for Greek passport:</strong>
                  <br />
                  3 photos needed.
                  <br />
                  Photo size: 40×60 mm
                  <br />
                  Background: white.
                </td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for Greek visa:</strong>
                  <br />
                  Photo size: 35×45 mm
                  <br />
                  Background: light colored.
                  <br />
                  Smile: not allowed.
                  <br />
                  Other requirements: digital photos needed (300 DPI, under 150
                  KB).
                </td>
              </tr>

              {/* Italy */}
              <tr className="border-t border-gray-300">
                <td className="p-3 align-top font-medium p">Italy</td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for Italian passport:</strong>
                  <br />
                  Photo size: 35×45 mm
                  <br />
                  Head size: 32-36 mm
                </td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for Italian visa:</strong>
                  <br />
                  Photo size: 35×45 mm
                  <br />
                  Head size: 32-36 mm
                </td>
              </tr>

              {/* Russia */}
              <tr className="border-t border-gray-300">
                <td className="p-3 align-top font-medium p">Russia</td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for Russian passport:</strong>
                  <br />
                  5 photos needed.
                  <br />
                  Photo size: 35×45 mm
                  <br />
                  Head size: 27-31 mm
                  <br />
                  Neutral expression, no glasses allowed.
                </td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for Russian visa:</strong>
                  <br />
                  2 photos needed.
                  <br />
                  Same as passport requirements.
                </td>
              </tr>

              {/* India */}
              <tr className="border-t border-gray-300">
                <td className="p-3 align-top font-medium p">India</td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for Indian passport:</strong>
                  <br />
                  Photo size: 2"x2"
                  <br />
                  Head size: 35-40 mm
                  <br />
                  White background
                </td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for Indian visa:</strong>
                  <br />
                  Same as passport.
                  <br />
                  <br />
                  <strong>Photo requirements for OCI:</strong>
                  <br />
                  Same as passport.
                </td>
              </tr>

              {/* China */}
              <tr className="border-t border-gray-300">
                <td className="p-3 align-top font-medium p">China</td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for Chinese passport:</strong>
                  <br />
                  Photo size: 33×48 mm
                  <br />
                  Head size: 28-33 mm
                  <br />
                  White background.
                </td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for Chinese visa:</strong>
                  <br />
                  Same as Chinese passport.
                </td>
              </tr>

              {/* Japan, Australia, New Zealand */}
              <tr className="border-t border-gray-300">
                <td className="p-3 align-top font-medium p">
                  Japan, Australia, New Zealand
                </td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for passport:</strong>
                  <br />
                  Photo size: 35×45 mm
                  <br />
                  Head size: 32-36 mm
                </td>
                <td className="p-3 align-top">
                  <strong>Photo requirements for visa:</strong>
                  <br />
                  Photo size: 35×45 mm
                  <br />
                  Head size: 32-36 mm
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
