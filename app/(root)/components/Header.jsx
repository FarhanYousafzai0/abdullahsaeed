'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingUp(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
    <header
      className={`fixed top-0 w-full z-50 bg-gray-50   transition-transform duration-500  ${
        scrollingUp ? 'translate-y-0 ' : '-translate-y-full shadow-sm'
      }`}
    >
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white md:hidden block z-50 shadow-xl transition-all duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 ">
        
          <button onClick={() => setSidebarOpen(false)}>
            <XMarkIcon className="w-8 h-8 absolute top-5 p-1 right-5 bg-black cursor-pointer rounded-full text-white" />
          </button>
        </div>
       <div>
       <h2 className="font-light text-3xl text-light px-4">Navigations</h2>
        <div className="flex flex-col gap-4 p-6">
        <Link onClick={()=>setSidebarOpen(!sidebarOpen)} href="/" className="text-gray-600 text-1xl  font-medium">Home</Link>
          <Link onClick={()=>setSidebarOpen(!sidebarOpen)} href="/about" className="text-gray-600 text-1xl  font-medium">About</Link>
          <Link onClick={()=>setSidebarOpen(!sidebarOpen)} href="/services" className="text-gray-600 text-1xl  font-medium">Services</Link>
          <Link onClick={()=>setSidebarOpen(!sidebarOpen)} href="/contact" className="text-gray-600 text-1xl  font-medium">Contact</Link>


       </div>
          {/* Soical */}
<div className=''>
<h2 className="font-light text-light text-3xl px-4">Socials</h2>
<div className='flex flex-col  gap-4 p-6'>

<Link  href="/" className="text-gray-600  font-medium">Linkedin</Link>
<Link  href="/" className="text-gray-600   font-medium">Twitter</Link>
<Link  href="/" className="text-gray-600   font-medium">Instagram</Link>

</div>


</div>

          
        </div>
      </div>

      <div className="relative py-4 px-4 mx-auto max-w-7xl flex items-center justify-between sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
          <img width={90} height={40} src="Logo.png" alt="" srcset="" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-12">
          <Link href="/about" className="text-base font-medium text-gray-900 hover:text-opacity-50">About</Link>
          <Link href="/services" className="text-base font-medium text-gray-900 hover:text-opacity-50">Services</Link>
          <Link href="/contact" className="text-base font-medium text-gray-900 hover:text-opacity-50">Contact</Link>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex">
        <div className="relative inline-flex w-fit  group">
              <div className="absolute transition-all duration-1000  opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
              <button type="submit" className="relative inline-flex cursor-pointer p-2  items-center justify-center h-[3rem] w-[8rem] text-lg  text-white transition-all duration-200 bg-gray-900 rounded-xl">
                Join community
              </button> 
            </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button onClick={() => setSidebarOpen(true)} className="text-gray-900">
            <div className="flex flex-col gap-1 items-end group cursor-pointer">
              <span className="w-[15px] group-hover:w-[30px] transition-all duration-300 h-[3px] bg-black rounded"></span>
              <span className="w-[30px] group-hover:w-[15px] transition-all duration-300 h-[3px] bg-black rounded"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
    
    </>
  );
};

export default Header;