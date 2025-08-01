'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/solid'
import HeroBanner from './HeroBanner'

const Hero = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [scrollingUp, setScrollingUp] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollingUp(currentScrollY < lastScrollY || currentScrollY < 10)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Removed h-screen to avoid vertical overflow */}
      <div className="overflow-x-hidden bg-gray-50 relative">

        {/* Sidebar for Mobile */}
        <div
          className={`fixed top-0 left-0 h-screen w-full bg-white md:hidden block z-50 shadow-xl transition-all duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6">
            <button onClick={() => setSidebarOpen(false)}>
              <XMarkIcon className="w-8 h-8 absolute top-5 p-1 right-5 bg-black cursor-pointer rounded-full text-white" />
            </button>
          </div>

          {/* Navigation */}
          <h2 className="font-light text-3xl px-4">Navigations</h2>
          <div className="flex flex-col gap-4 p-6">
            <Link onClick={() => setSidebarOpen(false)} href="/" className="text-gray-600 text-xl font-medium">Home</Link>
            <Link onClick={() => setSidebarOpen(false)} href="/about" className="text-gray-600 text-xl font-medium">About</Link>
            <Link onClick={() => setSidebarOpen(false)} href="/services" className="text-gray-600 text-xl font-medium">Services</Link>
            <Link onClick={() => setSidebarOpen(false)} href="/contact" className="text-gray-600 text-xl font-medium">Contact</Link>
          </div>

          {/* Socials */}
          <h2 className="font-light text-3xl px-4">Socials</h2>
          <div className="flex flex-col gap-4 p-6">
            <Link href="https://www.linkedin.com/in/abdullahsaeed13/" className="text-gray-600 font-medium">LinkedIn</Link>
            <Link href="https://x.com/abdulla42214136" className="text-gray-600 font-medium">Twitter</Link>
            <Link href="https://www.instagram.com/abdullahlinkedinwala" className="text-gray-600 font-medium">Instagram</Link>
          </div>
        </div>

        {/* Header */}
        <div className={`fixed top-0 left-0 w-full z-40 transition-transform duration-500 ${scrollingUp ? 'translate-y-0 bg-gray-50' : '-translate-y-full'}`}>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-4 md:py-6">
            <div className="relative flex items-center justify-between">
              {/* Logo */}
              <Link href="/">
                <img width={120} height={40} src="Logo.png" alt="Logo" />
              </Link>

              {/* Mobile Hamburger */}
              <div className="flex lg:hidden cursor-pointer">
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-900">
                  <div className="flex flex-col gap-1 items-end group">
                    <span className="w-[15px] group-hover:w-[30px] transition-all duration-300 h-[3px] bg-black rounded" />
                    <span className="w-[30px] group-hover:w-[15px] transition-all duration-300 h-[3px] bg-black rounded" />
                  </div>
                </button>
              </div>

              {/* Nav Items (Desktop) */}
              <div className="hidden lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
                <Link href="/about" className="text-base font-medium text-gray-900 hover:text-opacity-50">About</Link>
                <Link href="/services" className="text-base font-medium text-gray-900 hover:text-opacity-50">Services</Link>
                <Link href="/contact" className="text-base font-medium text-gray-900 hover:text-opacity-50">Contact</Link>
              </div>

              {/* CTA */}
              <div className="hidden lg:flex">
                <a
                  href="https://www.facebook.com/profile.php?id=61578289315568"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex w-fit group"
                >
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 animate-tilt" />
                  <div className="relative inline-flex items-center justify-center p-2 text-lg text-white bg-[#0077B5] rounded-xl">
                    Join community
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-52 xl:pb-10 overflow-hidden">
          <div className="relative px-4 mx-auto sm:px-6 text-center lg:px-8 max-w-7xl">
            <p className="inline-flex px-4 py-3 text-base text-gray-900 border border-gray-200 rounded-full">
              LinkedIn Profile Optimization Experts
            </p>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mt-5 text-4xl font-bold text-gray-900 sm:text-5xl">
                We help professionals get noticed by recruiters & clients
              </h1>
              <p className="max-w-xl mx-auto mt-6 text-base leading-7 text-gray-600">
                We specialize in optimizing and managing LinkedIn profiles to help professionals build their personal brand, expand their network, and boost career opportunities.
              </p>

              {/* CTA Button */}
              <div className="relative inline-flex mt-10 group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 animate-tilt" />
                <Link href="/contact">
                  <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#0077B5] rounded-xl">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer tagline */}
        <p className="block mx-auto w-fit px-4 py-3 font-semibold text-base text-gray-800 border border-gray-200 rounded-full mb-10">
          Stand Out | Get Noticed
        </p>
      </div>

      {/* Hero Banner Component */}
      <HeroBanner />
    </>
  )
}

export default Hero
