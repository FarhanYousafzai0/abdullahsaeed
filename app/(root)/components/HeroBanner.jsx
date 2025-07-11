'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const HeroBanner = () => {
  return (
    <section className="relative  pb-20 sm:pb-24 lg:pb-40 bg-white overflow-hidden">
      {/* Glowing Gradient Background (like Testimonials) */}
      <div
        className="absolute -inset-x-4 inset-y-16 sm:-inset-x-6 sm:inset-y-12 lg:-inset-x-8 lg:inset-y-16 z-0"
        style={{
          background:
            'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
          borderRadius: '2rem',
          filter: 'blur(60px)',
          opacity: 0.3,
          maxWidth: '90rem',
          margin: '0 auto'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 p-4 border bg-white rounded-md overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Column */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold  -leading-tight">
              Build Your Personal Brand with <br />
              <span className="text-gray-800">
                LinkedIn Optimization
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-800">
              We help professionals craft stunning LinkedIn profiles that get recruiters' attention and land big opportunities.
            </p>
            <div className="mt-8">
              <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
                <Link href="/contact">
                  <button className="relative cursor-pointer inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 rounded-xl">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="rounded-2xl overflow-hidden shadow-xl "
          >
            <img src="/Banner2.png"  />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
