import React, { useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import { IoCloseSharp } from 'react-icons/io5';
import { TiArrowSortedDown } from 'react-icons/ti';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobDropdown, setShowMobDropdown] = useState(false);


  return (
    <nav className='fixed z-[999] top-0 left-0  w-full  h-[70px] md:h-auto bg-black  text-white flex items-center '>
      <div className='2xl:w-[70%] w-[80%] md:w-[90%] mx-auto flex items-center'>
        <p className='font-bold text-[28px] font-[Montserrat, "Trebuchet MS", sans-serif] hover:scale-[1.05] duration-500'>
          Photo <span className='relative left-[-8px] text-[#20b2aa]'>real</span>
        </p>

        <FiAlignJustify
          className='ml-auto md:hidden text-[40px] cursor-pointer'
          onClick={() => setToggle(true)}
        />

        <ul className={`hidden md:flex ml-auto  text-[14px] font-semibold relative grow-1`}>
          <li className='hover:bg-[#20b2aa] py-[20px] px-[6px] lg:px-[10px] cursor-pointer navlink'>Home</li>
          <li className='hover:bg-[#20b2aa] py-[20px] px-[6px] lg:px-[10px] cursor-pointer navlink'>About Us</li>
          <li id='navser' className="hover:cursor-pointer hover:bg-[#20b2aa] p-[20px]" onMouseEnter={() => setShowDropdown(true)}  onMouseLeave={() => setShowDropdown(false)} >Services <TiArrowSortedDown className='inline '  /></li>
          {showDropdown && (
            <ul id='serdropdown' className={` flex flex-col grow-1 text-[14px] absolute top-[60px] left-[135px] font-semibold   bg-[#25292c] `} onMouseEnter={() => setShowDropdown(true)}  onMouseLeave={() => setShowDropdown(false)}>
                <li></li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>Passport,Visa and ID Phtotos</li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>Photos of ID</li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>Film Developing </li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>Disposable Camera Dev</li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>Digital Photo Printing</li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>Scanning Photos,Films,Slides</li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>Photo Slideshow on DVD</li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>Photos & Videos Digitizing</li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>CD & DVD Duplication</li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>FAX Services</li>
            </ul>)}
          <li className='hover:bg-[#20b2aa] py-[20px] px-[6px] lg:px-[10px] cursor-pointer navlink'>Product</li>
          <li className='hover:bg-[#20b2aa] py-[20px] px-[6px] lg:px-[10px] cursor-pointer navlink'>Contact Us</li>
          <li className='hover:bg-[#20b2aa] py-[20px] px-[6px] lg:px-[10px] cursor-pointer navlink'>Address & Business Hours</li>
        </ul>

        

        <div className={`md:hidden ${toggle ? 'translate-x-[0%]' : 'translate-x-[100%]'} duration-500 bg-[#222] h-[100vh] w-[250px] absolute top-0 right-0 z-50`}>
          <div className='p-1 flex justify-end'>
            <IoCloseSharp
              className='p-[10px] text-[60px] cursor-pointer'
              onClick={() => setToggle(false)}
            />
          </div>
          <ul className='flex flex-col items-center text-[14px]  pt-4 '>
            <li className='hover:cursor-pointer hover:bg-[#20b2aa] px-[20px] py-[14px] w-[100%] text-center'>Home</li>
            <li className='hover:cursor-pointer hover:bg-[#20b2aa] px-[20px] py-[14px] w-[100%] text-center'>About Us</li>
            <li id='navser' className="hover:cursor-pointer hover:bg-[#20b2aa] px-[20px] py-[14px] w-[100%] text-center" onClick={() => setShowMobDropdown(!showMobDropdown)}
            >Services <TiArrowSortedDown className='inline ' /></li>
          {showMobDropdown && (
            <ul id='serdropdown' className={` flex flex-col grow-1 text-[14px] relative top-[0px] font-semibold  bg-[#25292c] `} >
                <li></li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>Passport,Visa and ID Phtotos</li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>Photos of ID</li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>Film Developing </li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>Disposable Camera Dev</li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>Digital Photo Printing</li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>Scanning Photos,Films,Slides</li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>Photo Slideshow on DVD</li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>Photos & Videos Digitizing</li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>CD & DVD Duplication</li>
                <li className='hover:bg-[#20b2aa] py-[10px] px-[29px] w-[100%] text-center cursor-pointer'>FAX Services</li>
            </ul>)}
            <li className='hover:cursor-pointer hover:bg-[#20b2aa] px-[20px] py-[14px] w-[100%] text-center'>Product</li>
            <li className='hover:cursor-pointer hover:bg-[#20b2aa] px-[20px] py-[14px] w-[100%] text-center'>Contact Us</li>
            <li className='hover:cursor-pointer hover:bg-[#20b2aa] px-[20px] py-[14px] w-[100%] text-center'>Address & Business Hours</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
