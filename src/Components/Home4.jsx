import React, { useState } from 'react';
import { productsData } from "../data/product";
import { IoCloseOutline } from "react-icons/io5";

export default function Home4() {
  const [category, setCategory] = useState("All Products");
  const [selectedProduct, setSelectedProduct] = useState(null); // stores clicked product

  const filteredProducts =
    category === "All Products"
      ? productsData
      : productsData.filter(
          (item) =>
            item.category.toLowerCase() === category.toLowerCase()
        );

  return (
    <section id="products" className="w-[100%] py-[70px] relative">
      <div className="w-[93%] 2xl:w-[75%] mx-auto">
        <p className="text-[30px] md:text-[58px] font-[700] mb-[20px] text-[#3E4349] uppercase tracking-wider">
          Products
        </p>
        <p className="text-[17px] md:text-[20px] mb-[15px]">
          We offer a variety of photography products...
        </p>
        <hr className="text-[#3E4349]" />
        <ul className="flex flex-wrap justify-center items-center mt-6 gap-2">
          {[
            "All Products",
            "35mm films",
            "120mm Films",
            "Displosal cameras",
            "Instax Films",
            "Sd Cards",
            "Films Cassttes",
          ].map((cat) => (
            <li
              key={cat}
              onClick={() => setCategory(cat)}
              className={`cursor-pointer text-[15px] px-[15px] py-[14px] ${
                category === cat
                  ? "bg-[#20B2AA] text-white"
                  : "text-[#3E4349] hover:bg-[#20B2AA] hover:text-white"
              } duration-500`}
            >
              {cat}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {filteredProducts.map(({ id, title, img }) => (
            <div
              key={id}
              onClick={() => setSelectedProduct({ title, img })}
              className="shadow-2xl hover:scale-[1.02] duration-300 cursor-pointer rounded-bl-[7px] rounded-br-[7px] text-center"
            >
              <img src={img} alt={title} />
              <div className="p-3 text-white bg-[#20B2AA] min-h-[120px] rounded-bl-[7px] rounded-br-[7px] flex justify-center items-center">
                <p>{title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Preview */}
        {selectedProduct && (
          <div onClick={() => setSelectedProduct(null)} className="fixed top-0 left-0 w-[100vw] h-[100vh]  bg-black/60 flex justify-center items-center z-20" >
            <div className="bg-white rounded-lg overflow-hidden w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%] hover:scale-[1.05] duration-300 flex flex-col items-center relative" onClick={(e) => e.stopPropagation()} >
              <img src={selectedProduct.img} alt={selectedProduct.title} />
              <div className="p-3 text-white bg-[#20B2AA] min-h-[120px] w-[100%] flex justify-center items-center">
                <p>{selectedProduct.title}</p>
              </div>
            <IoCloseOutline onClick={() => setSelectedProduct(null)} className='absolute top-2 right-2 text-[30px] text-[#20B2AA]  duration-300 hover:rotate-90 cursor-pointer border border-[#20B2AA] rounded-full' />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
