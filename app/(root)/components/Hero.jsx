'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/solid'

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
    <div className="overflow-x-hidden bg-gray-50 h-screen relative">
      
      {/* Sidebar for Mobile */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white md:hidden block z-50 shadow-xl transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
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

      {/* Header */}
      <div className={`fixed top-0 left-0 w-full z-40 shadowtransition-transform duration-500 ${scrollingUp ? 'translate-y-0 bg-gray-50 ' : '-translate-y-full'}`}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="relative flex items-center justify-between">
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

            {/* Hamburger Icon */}
            <div className="flex lg:hidden cursor-pointer">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-900">
                <div className="flex flex-col gap-1 items-end group cursor-pointer">
                  <span className='w-[15px] group-hover:w-[30px] transition-all duration-300 h-[3px] bg-black rounded'></span>
                  <span className='w-[30px] group-hover:w-[15px] transition-all duration-300 h-[3px] bg-black rounded'></span>
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
              <Link href="#" className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 border border-gray-900 rounded-xl transition-all">
                Join community
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:pt-32 xl:pb-0">
        <div className="relative px-4 mx-auto sm:px-6 text-center lg:px-8 max-w-7xl">
          <p className="inline-flex px-4 py-4 text-base text-gray-900 border border-gray-200 rounded-full">
            LinkedIn Profile Optimization Experts
          </p>
          <div className="max-w-3xl mx-auto text-center">
            <span className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-5xl">
              We help professionals get noticed by recruiters & clients
            </span>
            <p className="max-w-xl mx-auto mt-6 text-base leading-7 text-gray-600">
              We specialize in optimizing and managing LinkedIn profiles to help professionals build their personal brand, expand their network, and boost career opportunities.
            </p>

            {/* CTA Button with Gradient Glow */}
            <div className="relative inline-flex mt-10 group">
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
              <Link href="/contact" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
