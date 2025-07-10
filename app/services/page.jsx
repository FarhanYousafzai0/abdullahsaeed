"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Star, ArrowRight } from "lucide-react";
import Header from "../components/Header";

const services = [
  {
    title: "Profile Optimization",
    icon: <Linkedin className="w-6 h-6 text-blue-600" />,
    points: [
      "Tailored profile design that highlights your unique skills",
      "Strategic keywords to increase visibility in searches",
      "Compelling summary that captures attention",
      "Custom banner and profile picture optimization"
    ],
    price: "$299",
    rating: 5,
    color: "bg-blue-50"
  },
  {
    title: "Account Management",
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
    ),
    points: [
      "Regular content posting schedule",
      "Smart connection management",
      "Endorsement strategy implementation",
      "Weekly performance analytics"
    ],
    price: "$499/mo",
    rating: 4,
    color: "bg-green-50"
  },
  {
    title: "Personal Branding",
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
      </svg>
    ),
    points: [
      "Industry leader positioning",
      "Achievement showcase strategy",
      "Content pillar development",
      "Brand voice refinement"
    ],
    price: "$799",
    rating: 5,
    color: "bg-purple-50"
  },
  {
    title: "Premium Coaching",
    icon: (
      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
      </svg>
    ),
    points: [
      "4 one-on-one strategy sessions",
      "Customized growth roadmap",
      "Competitor analysis",
      "Ongoing support via Slack"
    ],
    price: "$1,299",
    rating: 5,
    color: "bg-orange-50"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director at TechCorp",
    text: "Abdullah transformed my LinkedIn presence. I went from 500 to 5,000+ connections in 3 months and now get weekly inbound job offers.",
    img: "/testimonial1.jpg",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    text: "The personal branding strategy helped position me as an industry thought leader. Our company's inbound leads increased by 300%.",
    img: "/testimonial2.jpg",
    rating: 5
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block mb-4 px-4 py-1 text-sm font-medium bg-blue-50 text-blue-600 border border-blue-200 rounded-full">
              PROFESSIONAL LINKEDIN SERVICES
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Transform Your LinkedIn Presence
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              We help professionals and businesses maximize LinkedIn's potential through strategic optimization, growth hacking, and personal branding.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${service.color}`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold">
                        {service.title}
                      </h3>
                    </div>
                    <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full">
                      {service.price}
                    </span>
                  </div>
                  
                  <ul className="mt-6 space-y-3">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="flex-shrink-0 w-5 h-5 mt-0.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="ml-2 text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < service.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">({service.rating}.0)</span>
                    </div>
                    <button className="inline-flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded-md group hover:bg-gray-50 transition-colors">
                      Details
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Trusted by Professionals Worldwide
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - here's what our clients say
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="flex flex-col overflow-hidden bg-white rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="flex flex-col justify-between flex-1 p-8">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="flex-1">
                        <p className="text-lg leading-relaxed text-gray-800">
                          "{testimonial.text}"
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5 rounded-full">
                        <div className="bg-white p-0.5 rounded-full">
                          <img
                            className="rounded-full w-12 h-12 object-cover"
                            src={testimonial.img}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                          />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900">{testimonial.name}</p>
                        <p className="mt-1 text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Elevate Your LinkedIn Game?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Book a free 30-minute consultation to discuss your goals and how we can help you achieve them.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-blue-700 hover:border-blue-700 transition-colors">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}