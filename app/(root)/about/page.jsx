import React from 'react'
import Header from '../components/Header'

const page = () => {
  return (
    <>
    <Header/>
      <div className='w-screen overflow-x-hidden min-h-screen bg-white text-gray-600'>

      <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-30 h-[600px] w-full"></div>
          
          <div className="relative md:w-[80%] w-[90%] py-30 mx-auto pt-24 pb-16">
  {/* Blurred Gradient Background */}
  <div
    className="absolute inset-0 z-0 top-30 left-10 -translate-x-1/2 w-[300px] h-[250px] blur-3xl opacity-40"
    style={{
      background:
        'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
      borderRadius: '9999px'
    }}
  />

  {/* Text Content on Top of Gradient */}
  <div className="relative z-10">
  <span className="md:text-5xl text-4xl font-semibold leading-tight">
  Empowering Your LinkedIn Presence <br /> for Career Growth.
</span>

<p className="mt-6 text-lg text-neutral-600 max-w-2xl">
  At Abdullah LinkedInWala, we help professionals stand out, build powerful networks, and unlock new opportunities with proven LinkedIn strategies and personal branding expertise.
</p>
  </div>
</div>
        </div>
      </div>
    </>
  )
}

export default page
