'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/solid'

const Hero = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="overflow-x-hidden bg-gray-50 h-screen relative">
        
      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl transition-all duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <XMarkIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-6">
          <Link href="#" className="text-gray-800 hover:text-indigo-600 font-medium">About</Link>
          <Link href="#" className="text-gray-800 hover:text-indigo-600 font-medium">Services</Link>
          <Link href="#" className="text-gray-800 hover:text-indigo-600 font-medium">Contact</Link>
          <Link
            href="#"
            className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-gray-900 rounded-xl text-center"
          >
            Join community
          </Link>
        </nav>
      </div>

      {/* Header */}
      <header className="relative py-4 md:py-6 z-40">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
            <div className="flex lg:hidden">
              <button onClick={() => setSidebarOpen(true)} className="text-gray-900">
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Nav Items (Desktop) */}
            <div className="hidden lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
              <Link href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50">About</Link>
              <Link href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50">Services</Link>
              <Link href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50">Contact</Link>
            </div>

            {/* CTA */}
            <div className="hidden lg:flex">
              <Link
                href="#"
                className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 border border-gray-900 rounded-xl  transition-all"
              >
                Join community
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="inline-flex px-4 py-2 text-base text-gray-900 border border-gray-200 rounded-full">
              LinkedIn Profile Optimization Experts
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-9xl">
              We help professionals get noticed by recruiters & clients
            </h1>
            <p className="max-w-xl mx-auto mt-6 text-base leading-7 text-gray-600">
              We specialize in optimizing and managing LinkedIn profiles to help professionals build their personal brand, expand their network, and boost career opportunities.
            </p>

            {/* CTA Button with Gradient Glow */}
            <div className="relative inline-flex mt-10 group">
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl"
              >
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
