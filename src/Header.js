import { useState } from 'react';
import DentalLogo from './images/DentalLogo2.png';
import { Link } from 'react-router-dom';

export  default function Header(){
  const[menuOpen,setmenuOpen]=useState(false);
  const toggleMenu =()=>setmenuOpen(!menuOpen);
    return(
      <header className="bg-transparent flex items-center justify-between m-1 px-4 md:px-24 relative flex-wrap">
  {/* Logo */}
  <div className="flex-shrink-0 flex items-center">
    <img 
      src={DentalLogo} 
      className="h-20 w-auto object-contain"
    />
  </div>

  {/* Navigation (Desktop only) */}
  <nav className='hidden md:flex justify-center'>
    <ul className='flex space-x-11 space-x-reverse text-base'>
      <li className='font-semibold text-[#448e90] hover:text-teal-custom-Poppy cursor-pointer transition-all duration-300 transform hover:scale-105 '>
        <Link to="/">الرئيسية</Link>
      </li>
      <li className='font-semibold text-[#448e90] hover:text-teal-custom-Poppy cursor-pointer transition-all duration-300 transform hover:scale-105'>
        <a href="#challenges">التحديات</a>
      </li>
      <li className='font-semibold text-[#448e90] hover:text-teal-custom-Poppy cursor-pointer transition-all duration-300 transform hover:scale-105 '>
        <a href="#videoes">الفيديوهات</a>
      </li>
    </ul>
  </nav>

  {/* Hamburger icon (Mobile only) */}
  <div className='md:hidden'>
    <button className='text-[#448e90] focus:outline-none' onClick={toggleMenu}>
      <svg className='w-10 h-10 p-2' fill='none' stroke='currentColor' xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  {/* Mobile menu */}
  {menuOpen && (
    <ul className="absolute top-24 left-0 right-0 bg-white flex flex-col items-center space-y-4 py-4 shadow-md md:hidden z-50">
      <li className='text-[#448e90] font-semibold cursor-pointer'><Link to="/">الرئيسية</Link></li>
      <li className='text-[#448e90] font-semibold cursor-pointer'><a href="#challenges">التحديات</a></li>
      <li className='text-[#448e90] font-semibold cursor-pointer'><a href="#videoes">الفيديوهات</a></li>
    </ul>
  )}

  {/* Buttons */}
  <div className="flex flex-col mt-2 gap-3 md:flex-row gap-3 mt-0 md:mt-0 w-full md:w-auto items-center md:items-start">
    <Link to="/signup" className="w-full md:w-auto text-center">
      <button className="bg-gradient-to-r from-teal-custom-Poppy to-teal-custom-orange rounded-full text-white font-semibold transition-all duration-500 transform hover:scale-105 
      text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
        انشاء حساب
      </button>
    </Link>
    <Link to="/login" className="w-full md:w-auto text-center">
      <button className="bg-gradient-to-r from-teal-custom-Poppy to-teal-custom-orange rounded-full text-white font-semibold transition-all duration-500 transform hover:scale-105 
      text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
        تسجيل دخول
      </button>
    </Link>
  </div>
</header>

      
)}