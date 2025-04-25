import React, { useState } from 'react'
import {productsData} from "../data/product"
import jpg1 from '../assets/products/01.jpg'


export default function Home4() {
  const [category ,setCategory]=useState("All Products")

  const filteredProducts = category === "All Products" ? productsData: productsData.filter(item => item.category.toLowerCase() === category.toLowerCase())
        
  return (
    <section className=' w-[100%] py-[70px]'>
    <div className=' w-[90%] 2xl:w-[75%] mx-auto '>
      <p className='text-[30px] md:text-[58px] font-[700] tracking-tighter mb-[20px] text-[#3E4349]'>Products</p>
      <p className='p text-[17px] md:text-[20px] mb-[15px]'>We offer a variety of photography products, including 120mm and 35mm films, Canon Zink photo paper, and disposable cameras for easy shooting. You can also find Instax and Polaroid films, memory cards, and gift certificates for photography lovers. Whether you need instant prints, classic film rolls, or camera accessories, we’ve got you covered. Explore our collection and capture your memories effortlessly!</p>
      <hr className='text-[#3E4349]' />
      <ul className="flex flex-wrap justify-center items-center mt-6 gap-2">
          {["All Products", "35mm films", "120mm Films", "Displosal cameras", "Instax Films", "Sd Cards", "Films Cassttes"].map(cat => (
            <li
              key={cat}
              onClick={() => setCategory(cat)}
              className={`cursor-pointer text-[15px] px-[15px] py-[14px] ${category === cat ? 'bg-[#20B2AA] text-white' : 'text-[#3E4349] hover:bg-[#20B2AA] hover:text-white'} duration-500`}
            >
              {cat}
            </li>
          ))}
        </ul>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
          {filteredProducts.map(({ id, title, img }) => (
            <div key={id} className='shadow-2xl hover:scale-105 duration-300 cursor-pointer rounded-bl-[7px] rounded-br-[7px] text-center'>
              <img src={img} alt={title} />
              <div className='p-3 text-white bg-[#20B2AA] min-h-[120px] rounded-bl-[7px] rounded-br-[7px] flex justify-center items-center'>
                <p>{title}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  </section>
  )
}
