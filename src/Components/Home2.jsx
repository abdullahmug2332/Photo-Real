


export default function Home2(props) {
  const data=props.data
  return (
    <section id='aboutus' className='w-[100%] py-[70px]'>
      <div className='w-[93%] 2xl:w-[75%] mx-auto text-[#3E4349]'>
        <p className='text-[30px] md:text-[58px] font-[700]  mb-[20px] uppercase h tracking-wider'>
          {data.title.split(" ")[0]} <span className='text-[#20B2AA]'>{data.titleHighlight}</span>
        </p>
        
        {/* First paragraph */}
        <p className='p text-[17px] md:text-[20px] mb-[15px] pf'>{data.paragraphs[0]}</p>

        {/* Middle two paragraphs side by side */}
        <div className="flex flex-col md:flex-row justify-between mb-[15px] pf">
          <p className='p w-[100%] md:w-[48%] pf'>{data.paragraphs[1]}</p>
          <p className='p w-[100%] md:w-[48%] pf'>{data.paragraphs[2]}</p>
        </div>

        {/* Last paragraph */}
        <p className='p text-[17px] md:text-[20px] mb-[15px] pf'>{data.paragraphs[3]}</p>
      </div>
    </section>
  )
}
