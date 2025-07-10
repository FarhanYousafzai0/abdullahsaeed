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
    <header
      className={`fixed top-0 w-full z-50 bg-white   transition-transform duration-500  ${
        scrollingUp ? 'translate-y-0 ' : '-translate-y-full shadow-sm'
      }`}
    >
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white md:hidden block z-50 shadow-xl transition-all duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 ">
        
          <button onClick={() => setSidebarOpen(false)}>
            <XMarkIcon className="w-6 h-6 cursor-pointer text-gray-700" />
          </button>
        </div>
        <h2 className="text-lg text-light">Navigations</h2>
        <div className="flex flex-col gap-4 p-6">
          <Link href="#" className="text-gray-800 hover:text-indigo-600 font-medium">About</Link>
          <Link href="#" className="text-gray-800 hover:text-indigo-600 font-medium">Services</Link>
          <Link href="#" className="text-gray-800 hover:text-indigo-600 font-medium">Contact</Link>
          
        </div>
      </div>

      <div className="relative py-4 px-4 mx-auto max-w-7xl flex items-center justify-between sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              width={100}
              height={40}
              className="w-auto h-8"
              src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg"
              alt="Logo"
            />
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
          <Link
            href="#"
            className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 border border-gray-900 rounded-xl"
          >
            Join community
          </Link>
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
  );
};

export default Header;