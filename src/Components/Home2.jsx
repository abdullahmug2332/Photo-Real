import React from 'react'

export default function Home2() {
  return (
    <section id='aboutus' className=' w-[100%] py-[70px]'>
      <div className=' w-[93%] 2xl:w-[75%] mx-auto text-[#3E4349] '>
        <p className='text-[30px] md:text-[58px] font-[700]  mb-[20px] uppercase h tracking-wider'>About <span className='text-[#20B2AA]'> Photoreal</span></p>
        <p className='p text-[17px] md:text-[20px] mb-[15px] pf'>Photoreal was founded in 1992, and has been providing all kinds of photo services to the public ever since. Although film industry has almost died a few years ago, we managed to survive thanks to support of people who love shooting film..</p>
        
        <div className="flex flex-col md:flex-row  justify-between mb-[15px] pf">
            <p className='p w-[100%] md:w-[48%] pf'>While the film industry faced a steep decline a few years ago, Photoreal endured and thrived thanks to the unwavering support of film enthusiasts who refuse to let the art of analog photography fade away. These dedicated shooters, with their love for the grain and soul of film, have kept our darkrooms humming and our spirit alive. We’re grateful every day for this community that values the craft as much as we do.</p>
            <p className='p w-[100%] md:w-[48%] pf'>At Photoreal, our focus is on meeting the needs of people who value photography as more than just a snapshot. We strive to pour care and excellence into everything we do, honoring the trust placed in us by every individual who walks through our doors. It’s about more than keeping a business alive—it’s about keeping a tradition alive.</p>
        </div>
        <p className='p text-[17px] md:text-[20px] mb-[15px] pf'>Looking ahead, we’re excited to carry forward the legacy of film while embracing the shifts of a modern world. Photoreal is a testament to the enduring power of photography, and we’re here to keep that spirit burning bright for years to come.</p>
      </div>
    </section>
  )
}
