'use client';

import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';

const Services = () => {
  return (
   <>
   <Header/>
   <section className="py-16 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Header Text */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg mt-10 font-medium text-gray-600 font-pj">
              Discover what Abdullah (LinkedIn Wala) can do for you
            </p>
            <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Our Professional Services
            </h2>
          </div>

          {/* Gradient Background Layer */}
          <div className="relative mt-10 md:mt-24 md:order-2">
            <div
              className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6"
              style={{
                background:
                  'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
                borderRadius: '1.5rem',
                filter: 'blur(40px)',
                opacity: 0.3,
                maxWidth: '80rem',
                margin: '0 auto'
              }}
            ></div>

            {/* Services Cards */}
            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
  {[
    {
      title: 'Profile Optimization',
      description: [
        'Tailored profile design that highlights your unique skills and experiences',
        'Strategic keywords to increase visibility in LinkedIn searches',
        'Compelling summary that captures attention'
      ],
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: 'Account Management',
      description: [
        'Regular content posting to engage your audience',
        'Connection management with relevant professionals',
        'Endorsement and recommendation strategies'
      ],
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Personal Branding',
      description: [
        'Positioning as an industry leader',
        'Showcasing achievements attractively',
        'Content strategy development'
      ],
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: 'LinkedIn Coaching',
      description: [
        'One-on-one strategy sessions',
        'Customized growth roadmap',
        'Competitor analysis',
        'Ongoing support'
      ],
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ].map((service, idx) => (
    <div
      key={idx}
      className="flex flex-col overflow-hidden shadow-xl rounded-2xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-6 lg:px-6">
        <div className="flex items-start mb-4">
          <div className="p-2 rounded-lg bg-gray-50">
            {service.icon}
          </div>
          <h3 className="ml-3 text-lg font-semibold text-gray-900">
            {service.title}
          </h3>
        </div>
        <ul className="space-y-2.5 text-sm text-gray-600">
          {service.description.map((point, i) => (
            <li key={i} className="flex items-start">
              <svg className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>
          </div>
        </div>
      </div>
    </section>
   
   </>
  );
};

export default Services;
