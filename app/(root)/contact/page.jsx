"use client";

import Link from "next/link";
import React, { useState } from "react";
import Header from "../components/Header";
import { ArrowUpRight } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    services: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/xyzjaegg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          organization: "",
          services: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="w-screen overflow-x-hidden min-h-screen bg-white text-gray-600">
        {/* Gradient Background Section */}
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
    <span className="md:text-6xl text-4xl font-semibold leading-tight">
      Let's take your LinkedIn profile <br /> to the next level.
    </span>

    <p className="mt-6 text-lg text-neutral-600 max-w-2xl">
      We look forward to working with you and helping you grow your LinkedIn network!
    </p>
  </div>
</div>
        </div>

        <div className="relative md:w-[80%] w-[90%] py-30 mx-auto">
          <div className="w-full pt-10 flex flex-col md:flex-row gap-20 text-lg">
            {/* LEFT: FORM */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-10 md:w-1/2 w-full"
            >
              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-100 text-green-800 rounded-lg">
                  Thank you! We've received your request and will get back to you shortly.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-100 text-red-800 rounded-lg">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              {/* Input Fields */}
              {[
                { label: "Your full name", name: "name", type: "text", placeholder: "Abdullah Khan" },
                { label: "Email address", name: "email", type: "email", placeholder: "abdullah@example.com" },
                { label: "Company or personal brand", name: "organization", type: "text", placeholder: "Abdullah LinkedInWala" },
                { label: "Service you're interested in", name: "services", type: "text", placeholder: "Profile Optimization, Branding..." },
              ].map((field, index) => (
                <div key={index} className="relative">
                  <p className="text-xs text-neutral-400 font-light">0{index + 1}</p>
                  <label htmlFor={field.name} className="text-lg block mb-1">
                    {field.label}
                  </label>
                  <input
                    {...field}
                    required={index < 2}
                    className="w-full border-b border-neutral-300 bg-transparent py-2 outline-none text-neutral-600 focus:border-blue-500 transition-colors"
                    value={formData[field.name]}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              ))}

              {/* Message */}
              <div className="relative">
                <p className="text-xs text-neutral-400 font-light">05</p>
                <label htmlFor="message" className="text-lg block mb-1">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us more about your goals or what you're looking for..."
                  className="w-full border-b border-neutral-300 bg-transparent py-2 outline-none text-neutral-600 resize-none focus:border-blue-500 transition-colors"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="relative px-6 py-4 w-fit cursor-pointer text-base font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
                <span className="absolute inset-0 rounded-xl border-2 border-white opacity-0 hover:opacity-20 transition-opacity"></span>
              </button>
            </form>

            {/* RIGHT: CONTACT INFO */}
            <div className="flex flex-col gap-10 md:w-1/2 w-full">
              {/* Contact Card with Gradient Border */}
              <div className="relative p-0.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500">
                <div className="bg-white p-6 rounded-xl">
                  <h5 className="text-neutral-400 uppercase text-xs mb-4">Contact Info</h5>
                  <p className="mb-3 text-black flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@abdullahlinkedinwala.com
                  </p>
                  <p className="text-black flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +92 333 111 222 6
                  </p>
                </div>
              </div>

              {/* Office Card with Gradient Border */}
              <div className="relative p-0.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500">
                <div className="bg-white p-6 rounded-xl">
                  <h5 className="text-neutral-400 uppercase text-xs mb-4">Office Location</h5>
                  <p className="text-black flex items-start">
                    <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Office no 29, Street no 4, Industrial Area, I-10/3, Islamabad
                  </p>
                </div>
              </div>

              {/* Socials Card with Gradient Border */}
              <div className="relative p-0.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500">
                <div className="bg-white p-6 rounded-xl">
                  <h5 className="text-neutral-400 uppercase text-xs mb-4">Socials</h5>
                  <ul className="space-y-3">
                    {[
                      { name: "LinkedIn", url: "https://linkedin.com/" },
                      { name: "Instagram", url: "https://instagram.com/" },
                      { name: "Twitter", url: "https://twitter.com/" }
                    ].map((social, index) => (
                      <li key={index}>
                        <Link 
                          href={social.url} 
                          target="_blank" 
                          className="flex items-center text-black hover:text-blue-600 transition-colors"
                        >
                          <ArrowUpRight className="w-4 h-4 mr-2 text-blue-500" />
                          {social.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;