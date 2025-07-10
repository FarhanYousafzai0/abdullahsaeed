// components/Footer.jsx
'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { ArrowRight, ArrowUp, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { SplitText } from 'gsap/all';

const Footer = () => {


  return (
   <>
    <div className="relative bg-gray-50 border border-gray-400 m-3 rounded-md shadow-xl px-6 py-16 lg:py-24 overflow-hidden">
  {/* Dot pattern background */}
  <div className="absolute inset-0 opacity-10 z-0" style={{
    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
    backgroundSize: '15px 15px'
  }}></div>

  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Left */}
    <div>
      <h1 className="text-2xl font-semibold mb-2">Let's talk</h1>
      <a
        href="info@abdullahlinkedinwala.com"
        className="text-[1.3rem] font-bold underline decoration-dotted underline-offset-4 trans hover:text-blue-600 transition-colors"
      >
       info@abdullahlinkedinwala.com
      </a>
    </div>

    {/* Middle */}
    <div className="text-sm">
      <div className="mb-6">
        <h3 className="font-semibold mb-1">Contact</h3>
        <p>0092 333 111 222 6</p>
        <p>info@abdullahlinkedinwala.com</p>
      </div>
      <div>
        <h3 className="font-semibold mb-1">Follow</h3>
        <ul className="space-y-1">
          <li className='flex items-center'>
            <Link href="https://linkedin.com" target="_blank" className="flex items-center hover:text-blue-600 transition-colors">
              <ArrowUpRight size={20}/> LinkedIn
            </Link>
          </li>
          <li className='flex items-center'>
            <Link href="https://linkedin.com" target="_blank" className="flex items-center hover:text-blue-600 transition-colors">
              <ArrowUpRight size={20}/> Twitter
            </Link>
          </li>
          <li className='flex items-center'>
            <Link href="https://linkedin.com" target="_blank" className="flex items-center hover:text-blue-600 transition-colors">
              <ArrowUpRight size={20}/> Instagram
            </Link>
          </li>
        </ul>
      </div>
    </div>

    {/* Right */}
    <div>
      <h3 className="font-semibold mb-2">Newsletter</h3>
      <p className="text-sm mb-4">
        Sign up for our newsletter about designing brands that redefine categories.
      </p>
      <div className="relative w-full border-b border-black">
        <input
          type="email"
          placeholder="Email address"
          className="w-full bg-transparent py-2 pr-8 outline-none text-sm hover:placeholder-gray-600 transition-colors"
        />
        <button className="absolute right-0 top-2 hover:text-blue-600 transition-colors">
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>

  {/* Cookie notice */}
  <div className="relative z-10 mt-5 text-xs flex items-center justify-between border-t pt-4">
    {/* Cookie content would go here */}
  </div>
</div>
   
   
   </>
  );
};

export default Footer;
