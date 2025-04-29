import React, { useEffect } from 'react'

import img1 from "../assets/service8.jpg";

export default function Service8() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="w-[95%] 2xl:w-[75%] mx-auto my-[90px]  py-[20px]  ">
      <h1 className="h1 !text-[#3E4349]  uppercase">
        Converting <span className="text-[#20B2AA] ">video</span> &
        <span className="text-[#20B2AA] ">audio</span> cassette tapes and films
        into
        <span className="text-[#20B2AA] ">digital format</span>
      </h1>
      <br />
      <p className="p">
        At Photoreal we offer conversion (digitalization) of popular video and
        audio cassette tapes and films on a reel into digital format: DVD disk
        or AudioCD or USB flash drive (in MP4/MOV/AVI/WMV or MP3/OGG format).
        Majority of the tapes are converted on our premises in Brooklyn, NY.
        Only films on the reel are outsourced to another company in NYC.
      </p>
      <p className="p">Please be advised, that:</p>
      <br />
      <ul className="list-disc list-outside ml-5 p">
        <li>
          if the tape is older than 25 years or if it has been stored in other
          than “cool and dry place” for a long time, than the quality of the
          audio and video on your tape / film will be bad in majority of the
          cases and it will be bad after we convert it to digital format;
        </li>
        <li>
          we are not able to improve the quality of the audio and video, we
          convert “as is”.
        </li>
      </ul>
      <br />
      <p className="p">
        We only convert audio and video cassette tapes and films on a reel from
        analog to digital format.
      </p>
      <img src={img1} className="w-[100%]" />
      <div className='overflow-x-auto'>
      <table className="min-w-[700px] w-[100%] border border-gray-300 text-sm shadow-xl p my-[60px]">
        <thead>
          <tr className="bg-[#20B2AA] text-white ">
            <th className="text-left p-3 border-r border-gray-300 !text-white  p">
              Tape or film type
            </th>
            <th className="text-left p-3 border-r border-gray-300 !text-white  p">
              Price to convert tape into CD / DVD
            </th>
            <th className="text-left p-3 border-r border-gray-300 !text-white  p">
              Price to convert tape into digital video/audio onto a USB flash
              drive (MP4 or MP3 format)
            </th>
            <th className="text-left p-3 !text-white  p">Timeframe</th>
          </tr>
        </thead>
        <tbody>
          {/* VHS (NTSC & PAL) */}
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium">VHS (NTSC & PAL)</td>
            <td className="p-3 align-top">
              The rate is $25 for up to 2 hours (the price stays the same even
              if the time is shorter), with an additional $15 for each extra
              hour.
              <br />
              For PAL it costs $35, with an additional $20 for each extra hour
              and it requires more.
            </td>
            <td className="p-3 align-top">
              $35 for first 2 hours of video on the tape + $12/hour for each
              next hour on the same tape
            </td>
            <td className="p-3 align-top">2 tapes / day</td>
          </tr>

          {/* VHS-c (NTSC & PAL) */}
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium">VHS-c (NTSC & PAL)</td>
            <td className="p-3 align-top">
              The rate is $25 for up to 2 hours (the price stays the same even
              if the time is shorter), with an additional $15 for each extra
              hour.
              <br />
              For PAL it costs $35, with an additional $20 for each extra hour
              and it requires more.
            </td>
            <td className="p-3 align-top">
              $17 (includes conversion into a DVD)
            </td>
            <td className="p-3 align-top">3 tapes / day</td>
          </tr>

          {/* miniDV (NTSC only) */}
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium">miniDV (NTSC only)</td>
            <td className="p-3 align-top">$22 per cassette</td>
            <td className="p-3 align-top">
              $35 (includes conversion to a DVD)
            </td>
            <td className="p-3 align-top">3 tapes / day</td>
          </tr>

          {/* 8mm (Video8), Hi8, Digital8 */}
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium">
              8mm (Video8), Hi8, Digital8 (NTSC only)
            </td>
            <td className="p-3 align-top">Call for pricing.</td>
            <td className="p-3 align-top">Call for pricing.</td>
            <td className="p-3 align-top">2 tapes / day</td>
          </tr>

          {/* 8mm film on a reel */}
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium">8mm film on a reel</td>
            <td className="p-3 align-top">
              37 cents per foot for 8 mm min (400 feet).
            </td>
            <td className="p-3 align-top">75 cents per foot (min 400 feet)</td>
            <td className="p-3 align-top">1 week</td>
          </tr>

          {/* audio-cassette */}
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium">audio-cassette</td>
            <td className="p-3 align-top">Call for pricing.</td>
            <td className="p-3 align-top">Call for pricing.</td>
            <td className="p-3 align-top">3 tapes / week</td>
          </tr>

          {/* vinyl record */}
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium">vinyl record</td>
            <td className="p-3 align-top">Call for pricing.</td>
            <td className="p-3 align-top">Call for pricing.</td>
            <td className="p-3 align-top">3 vinyl records / week</td>
          </tr>

          {/* DVD */}
          <tr className="border-t border-gray-300">
            <td className="p-3 align-top font-medium">DVD</td>
            <td className="p-3 align-top">n/a</td>
            <td className="p-3 align-top">Call for pricing.</td>
            <td className="p-3 align-top">2 hours per DVD</td>
          </tr>
        </tbody>
      </table></div>
      <p className="p"><strong>We don’t convert these types of tapes:</strong> Betamax, Betacam, micro-cassettes.</p> <br />
      <p className="p"><strong>If you want the tapes to be converted into USB,</strong>, you can either provide your own USB drive or hard drive (it has to have at least 4 GB of free space) or get a USB flash drive from us for $15-$25.</p> <br />
      <p className="p"><strong>Tapes are converted on “First come – first served” basis.</strong> Most of the time we already have several tapes for conversion, so if you need the tapes to be converted by certain time & date, please call the store (718) 875-1776 to ask for the availability to do your order by certain time & date.</p><br />
      <p className="p">Thank you!</p>
    </section>
  );
}
