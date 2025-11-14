import  { useState } from 'react';
// import { productsData } from "../data/product";
import { IoCloseOutline } from "react-icons/io5";
import img1 from '../assets/products/01.jpg'
import img2 from '../assets/products/02.jpg'
import img3 from '../assets/products/03.jpg'
import img4 from '../assets/products/04.jpg'
import img5 from '../assets/products/05.jpg'
import img6 from '../assets/products/06.jpg'
import img7 from '../assets/products/07.jpg'
import img8 from '../assets/products/08.jpg'
import img9 from '../assets/products/09.jpg'
import img10 from '../assets/products/10.jpg'
import img11 from '../assets/products/11.jpg'
import img12 from '../assets/products/12.jpg'
import img13 from '../assets/products/13.png'
import img14 from '../assets/products/14.jpg'
import img15 from '../assets/products/15.jpg'
import img16 from '../assets/products/16.jpg'
import img17 from '../assets/products/17.png'
import img18 from '../assets/products/18.png'
import img19 from '../assets/products/19.jpg'
import img20 from '../assets/products/20.jpg'
import img21 from '../assets/products/21.jpg'
import img22 from '../assets/products/22.jpg'
import img23 from '../assets/products/23.jpg'
import img24 from '../assets/products/24.jpg'
import img25 from '../assets/products/25.jpg'
import img26 from '../assets/products/26.jpeg'
import img27 from '../assets/products/27.jpg'
import img28 from '../assets/products/28.jpg'
import img29 from '../assets/products/29.png'
import img30 from '../assets/products/30.jpg'
import img31 from '../assets/products/31.jpg'
import img32 from '../assets/products/32.jpg'
import img33 from '../assets/products/33.jpg'
import img34 from '../assets/products/34.jpg'

export default function Home4(props) {
  const data=props.data
  const images =[
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, 
  img31, img32, img33, img34
]
  const [category, setCategory] = useState("All Products");
  const [selectedProduct, setSelectedProduct] = useState(null); // stores clicked product

  const filteredProducts =
    category === "All Products"
      ? data.productsData
      : data.productsData.filter(
          (item) =>
            item.category.toLowerCase() === category.toLowerCase()
        );

  return (
    <section id="products" className="w-[100%] py-[70px] relative">
      <div className="w-[93%] 2xl:w-[75%] mx-auto">
        <p className="text-[30px] md:text-[58px] font-[700] h mb-[20px] text-[#3E4349] uppercase tracking-wider">
          {data.title}
        </p>
        <p className="text-[17px] md:text-[20px] mb-[15px]">
          {data.description}
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
              <img src={`${images[id-1]}`} alt={title} />
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
