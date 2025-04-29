import React, { useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import { IoCloseSharp } from 'react-icons/io5';
import { TiArrowSortedDown } from 'react-icons/ti';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobDropdown, setShowMobDropdown] = useState(false);

  const scrollToSection = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
    } else {
      const idLocation = location.hash.replace("#", "");
      if (idLocation) {
        const element = document.getElementById(idLocation);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const closeMobileMenu = () => {
    setToggle(false);
    setShowMobDropdown(false);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
    setShowMobDropdown(false);
  };

  return (
    <>
      <nav className='sticky z-[999] top-[40px] left-0 w-full h-[70px] md:h-auto bg-black text-white flex items-center z-2'>
        <div onClick={()=> setToggle(false)} className={`bs z-4 ${toggle == true ? 'block opacity-100' : 'hidden opacity-0'} `}></div>
        <div className='2xl:w-[70%] w-[80%] md:w-[90%] mx-auto flex items-center'>

          {/* Logo */}
          <Link to={"/"} onClick={closeMobileMenu}>
            <h1 className=' font-bold text-[30px] md:text-[38px] font-["Cal Sans", sans-serif] hover:scale-[1.05] duration-500 tracking-wider h'>
              Photo <span className='relative left-[-5px] text-[#20B2AA]'>real</span>
            </h1>
          </Link>

          {/* Hamburger Icon */}
          <FiAlignJustify
            className='ml-auto md:hidden text-[40px] cursor-pointer'
            onClick={() => setToggle(true)}
          />

          {/* Desktop Menu */}
          <ul className='hidden md:flex ml-auto text-[14px] font-semibold relative'>
            <li className='hover:bg-[#20B2AA] py-[20px] lg:px-[5px]  px-[10px] cursor-pointer pf li'>
              <a href="#hero" onClick={scrollToSection}>Home</a>
            </li>
            <li className='hover:bg-[#20B2AA] py-[20px] lg:px-[5px]  px-[10px] cursor-pointer pf li'>
              <a href="#aboutus" onClick={scrollToSection}>About Us</a>
            </li>
            <li
              id='navser'
              className='hover:cursor-pointer hover:bg-[#20B2AA] p-[20px] relative pf li'
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <a href="#services" onClick={scrollToSection}>
                Services <TiArrowSortedDown className='inline' />
              </a>

              {/* Dropdown on Desktop */}
              {showDropdown && (
                <ul className='absolute top-[60px] left-[2px] bg-[#25292c] text-[14px] font-semibold flex flex-col'>
                  {[
                    { label: 'Passport, Visa and ID Photos', to: '/service1' },
                    { label: 'Photos of ID', to: '/service2' },
                    { label: 'Film Developing', to: '/service3' },
                    { label: 'Disposable Camera Dev', to: '/service4' },
                    { label: 'Digital Photo Printing', to: '/service5' },
                    { label: 'Scanning Photos, Films, Slides', to: '/service6' },
                    { label: 'Photo Slideshow on DVD', to: '/service7' },
                    { label: 'Photos & Videos Digitizing', to: '/service8' },
                    { label: 'CD & DVD Duplication', to: '/service9' },
                    { label: 'FAX Services', to: '/service10' }
                  ].map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      className='hover:bg-[#20B2AA] py-[10px] text-center w-[200px]'
                      onClick={closeDropdown}
                    >
                      {item.label}
                    </Link>
                  ))}
                </ul>
              )}
            </li>
            <li className='hover:bg-[#20B2AA] py-[20px] lg:px-[5px]  px-[10px] cursor-pointer pf li'>
              <a href="#products" onClick={scrollToSection}>Product</a>
            </li>
            <li className='hover:bg-[#20B2AA] py-[20px] lg:px-[5px]  px-[10px] cursor-pointer pf li'>
              <a href="#contactus" onClick={scrollToSection}>Contact Us</a>
            </li>
            <Link to={"/address"} className='hover:bg-[#20B2AA] py-[20px] lg:px-[5px] px-[10px] cursor-pointer pf li'>
              Address & Business Hours
            </Link>
          </ul>

          {/* Mobile Menu */}
          <div className={`md:hidden ${toggle ? 'translate-x-0 opacity-[100%] ' : 'translate-x-full opacity-50' }  transition-all duration-700 bg-[#222] h-[100vh] w-[250px] absolute top-0 right-0 z-50`}>
            <div className='p-1 flex justify-end'>
              <IoCloseSharp
                className='p-[10px] text-[60px] cursor-pointer'
                onClick={closeMobileMenu}
              />
            </div>
            <ul className='flex flex-col items-center text-[14px] pt-4'>
            <li className='hover:bg-[#20B2AA] px-[20px] py-[14px] w-full text-center pf'>
              <a href="#hero" onClick={() => {
                closeMobileMenu();
                scrollToSection();
              }}>
                Home
              </a>
            </li>
              <li className='hover:bg-[#20B2AA] px-[20px] py-[14px] w-full text-center pf'>
                <a href="#aboutus" onClick={() => {
                closeMobileMenu();
                scrollToSection();
              }}>About Us</a>
              </li>
              <li
                className='hover:bg-[#20B2AA] px-[20px] py-[14px] w-full text-center pf'
                onClick={() => setShowMobDropdown(!showMobDropdown)}
              >
                Services <TiArrowSortedDown className='inline' />
              </li>

              {/* Dropdown on Mobile */}
              {showMobDropdown && (
                <ul className='flex flex-col text-[14px] bg-[#25292c] w-full pf'>
                  {[
                    { label: 'Passport, Visa and ID Photos', to: '/service1' },
                    { label: 'Photos of ID', to: '/service2' },
                    { label: 'Film Developing', to: '/service3' },
                    { label: 'Disposable Camera Dev', to: '/service4' },
                    { label: 'Digital Photo Printing', to: '/service5' },
                    { label: 'Scanning Photos, Films, Slides', to: '/service6' },
                    { label: 'Photo Slideshow on DVD', to: '/service7' },
                    { label: 'Photos & Videos Digitizing', to: '/service8' },
                    { label: 'CD & DVD Duplication', to: '/service9' },
                    { label: 'FAX Services', to: '/service10' }
                  ].map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      className='hover:bg-[#20B2AA] py-[10px] px-[20px] text-center pf'
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </ul>
              )}
              <li className='hover:bg-[#20B2AA] px-[20px] py-[14px] w-full text-center pf'>
                <a href="#products" onClick={() => {
                closeMobileMenu();
                scrollToSection();
              }}>Product</a>
              </li>
              <li className='hover:bg-[#20B2AA] px-[20px] py-[14px] w-full text-center pf'>
                <a href="#contactus" onClick={closeMobileMenu}>Contact Us</a>
              </li>
              <Link to={"/address"} onClick={() => {
                closeMobileMenu();
                scrollToSection();
              }} className='hover:bg-[#20B2AA] px-[20px] py-[14px] w-full text-center pf'>
                Address & Business Hours
              </Link>
            </ul>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
