'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const AboutSnapshot = () => {
  return (
    <section className="relative py-16 bg-gray-50 overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 blur-3xl opacity-30 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:flex gap-12">
        {/* Left Image with gradient */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="relative group w-fit rounded-xl">
            {/* Gradient background behind image */}
            <div className="absolute -inset-px rounded-xl blur-lg bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 transition-all duration-1000 animate-tilt z-0" />

            {/* Image on top */}
            <img
  src="/image.jpeg"
  alt="Work preview"
  className="relative z-10 rounded-md w-full object-cover"
/>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-gray-800">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Optimizing LinkedIn profiles for <br /> real-world career growth
          </h2>
          <p className="text-base text-gray-600 mb-6 max-w-xl">
            At Abdullah LinkedInWala, we help professionals shine on LinkedIn — from profile makeovers and branding to network growth strategies. Whether you're a job seeker or entrepreneur, we tailor your presence to leave a lasting impression.
          </p>

          {/* CTA Button */}
          <div className="relative inline-flex md:mt-5 group">
            <div className="absolute -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg opacity-70 group-hover:opacity-100 group-hover:-inset-1 transition-all duration-1000 group-hover:duration-200 animate-tilt" />
            <Link href="/about">
              <button className="relative cursor-pointer inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-[#0077B5] rounded-xl">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
