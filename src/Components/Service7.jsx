import React, { useEffect } from 'react'

export default function Service7() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="w-[95%] 2xl:w-[75%] mx-auto my-[90px]  py-[20px] ">
      <h1 className="h1 !text-[#3E4349] uppercase ">
      Photo <span className='text-[#20B2AA] '>slideshow</span > with <span className='text-[#20B2AA] '>music</span> on a <span className='text-[#20B2AA] '>DVD</span>
      </h1>
      <br />
        <iframe className='w-[100%] h-[400px]  md:h-[720px]' src="https://www.youtube.com/embed/azmifz4vt70?si=44oQYZ_SJnbgY8nc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><br />
        <p className="p">We make custom photo slideshows with music on a DVD within 5-7 business days. Price depends on the number of photos and their condition (already digital or need to be scanned) and the number of music tracks that you want to use for slideshow. Rush orders can be done in 3 days for 20% extra.</p><br /><br />
        <h1 className="h1 text-[#3E4349]">How to order and how much it costs</h1>
        <hr />
        <br />
        <p className="p">If your photos are physical (paper photos), then bring them, we’ll scan them.</p>
        <p className="p">If your photos are digital, you’ll bring them on a USB or memory card or send them by email or upload to Google Drive / Dropbox and send us the link.</p>
        <p className="p"><strong>Price:</strong></p>
        <ul className="list-disc list-outside ml-[20px] p">
            <li>paper photos: 1-100 are $2.50 each, 100+ are $2.00 each</li>
            <li>ditial photos: 1-100 are $1.50 each, 100+ are $1.25 each.</li>
            <li>music: it depends</li>
            <li>Minimum order is 50 photos</li>
        </ul><br />
        <p className="p">After we have photos and music, we’ll make a test version of a slideshow in low resolution and send it to you by email for review. Corrections to test version are free and unlimited.</p>
        <p className="p">After you approved the test version, we’ll make a high quality version of the slideshow and burn it to DVD or save it on a USB flash drive in MP4 format.</p>
        <p className="p">If you have any questions, please call (718) 875-1776 (ask Jay) or drop a line to <span className='text-[#20B2AA] underline cursor-pointer'>photoreal52@gmail.com</span></p>
        <p className="p">Thank you!</p>
    </section>
  )
}
