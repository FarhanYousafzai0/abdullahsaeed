'use client';
import Link from 'next/link';

export default function CTA() {
  return (
    <div className="bg-gray-50 h-auto">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl bg-white px-6 pt-16 shadow-xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

          {/* Decorative Gradient Circle */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-96 -translate-y-1/2 opacity-20 blur-3xl sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2"
          >
            <circle r={512} cx={512} cy={512} fill="url(#cta-gradient)" />
            <defs>
              <radialGradient id="cta-gradient">
                <stop stopColor="#0F9E99" />
                <stop offset={1} stopColor="#EFE9E0" />
              </radialGradient>
            </defs>
          </svg>

          {/* Left Content */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Stand out on LinkedIn. Let us manage your profile.
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              We help professionals build their brand, grow their network, and get noticed by recruiters and clients.
              Whether you're a job seeker or a business leader — your LinkedIn presence matters.
            </p>

            {/* Testimonial */}
            <blockquote className="mt-8 border-l-4 border-[#0F9E99] pl-4 italic text-gray-600">
              “After working with Abdullah LinkedInWala, I started receiving 3x more profile views and interview calls
              from top companies. Highly recommended!”
              <br />
              <span className="not-italic font-semibold text-gray-800">— Ahsan Tariq, Software Engineer</span>
            </blockquote>

            {/* CTA Button */}
            <div className="relative inline-flex md:mt-10 my-10 group">
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
              <Link href={'/contact'}>
              <button  className="relative cursor-pointer inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl">
                Get Started
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
