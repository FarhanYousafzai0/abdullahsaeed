'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };

    updateTime(); // initial
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gray-50 border border-gray-200 m-3 rounded-md shadow-xl px-6 py-16 lg:py-24 overflow-hidden">
      {/* Background dots */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
          backgroundSize: '15px 15px',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left */}
        <div>
          <h1 className="text-2xl font-semibold mb-2">Let's talk</h1>
          <a
            href="mailto:info@abdullahlinkedinwala.com"
            className="text-[1.3rem] font-bold underline decoration-dotted underline-offset-4 hover:text-[#0077B5] transition-colors"
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
            <p>abdullahlinkedinwala.com@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Follow</h3>
            <ul className="space-y-1">
              <li className="flex items-center">
                <Link
                  href="https://www.linkedin.com/in/abdullahsaeed13/"
                  target="_blank"
                  className="flex items-center hover:text-[#0077B5] transition-colors"
                >
                  <ArrowUpRight size={20} /> &nbsp; LinkedIn
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="https://x.com/abdulla42214136"
                  target="_blank"
                  className="flex items-center hover:text-[#0077B5] transition-colors"
                >
                  <ArrowUpRight size={20} /> &nbsp; Twitter
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="https://www.instagram.com/abdullahlinkedinwala"
                  target="_blank"
                  className="flex items-center hover:text-[#0077B5] transition-colors"
                >
                  <ArrowUpRight size={20} /> &nbsp; Instagram
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
            <button className="absolute right-0 top-2 hover:text-[#0077B5] transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom footer row */}
      <div className="relative z-10 mt-10 pt-4 border-t flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 gap-2">
        {/* Left - Time & Developer */}
        <div className="flex flex-col md:flex-row md:items-center gap-1">
          <span className="font-medium">{currentTime}</span>
          <span className="hidden md:inline mx-2">•</span>
          <span>
            Developed by{' '}
            <a
              href="https://github.com/FarhanYousafzai0"
              target="_blank"
              className="underline hover:text-[#0077B5] font-medium"
            >
              Farhan Yousafzai
            </a>
          </span>
        </div>

        {/* Right */}
        <span className="text-[11px] text-gray-400 mt-2 md:mt-0">
          &copy; {new Date().getFullYear()} Farhan Yousafzai. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
