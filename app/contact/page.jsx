"use client";

import Link from "next/link";
import React, { useState } from "react";
import Header from "../components/Header";

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
    <Header/>
      <div className="w-screen overflow-x-hidden min-h-screen bg-white text-black">
       

        <div className="md:w-[80%] w-[90%] py-30 mx-auto">
          <span className="md:text-6xl text-4xl font-semibold leading-tight">
            Let’s take your Linkedin  profile <br />  to the next level.
          </span>

          <p className="mt-6 text-lg text-neutral-600 max-w-2xl">
            We look forward to working with you and helping you grow your LinkedIn network!
          </p>

          <div className="w-full pt-16 flex flex-col md:flex-row gap-20 text-lg">
            {/* LEFT: FORM */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-10 md:w-1/2 w-full"
            >
              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-100 text-green-800 rounded-lg">
                  Thank you! We’ve received your request and will get back to you shortly.
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
                <div key={index}>
                  <p className="text-xs text-neutral-400 font-light">0{index + 1}</p>
                  <label htmlFor={field.name} className="text-lg block mb-1">
                    {field.label}
                  </label>
                  <input
                    {...field}
                    required={index < 2}
                    className="w-full border-b border-neutral-300 bg-transparent py-2 outline-none text-neutral-600"
                    value={formData[field.name]}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              ))}

              {/* Message */}
              <div>
                <p className="text-xs text-neutral-400 font-light">05</p>
                <label htmlFor="message" className="text-lg block mb-1">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us more about your goals or what you're looking for..."
                  className="w-full border-b border-neutral-300 bg-transparent py-2 outline-none text-neutral-600 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-5 py-3 w-fit cursor-pointer text-sm bg-black leading-7 text-white border border-gray-900 rounded-xl  transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>

            {/* RIGHT: CONTACT INFO */}
            <div className="flex flex-col gap-10 md:w-1/2 w-full">
              {/* Contact */}
              <div>
                <h5 className="text-neutral-400 uppercase text-xs mb-2">Contact Info</h5>
                <p className="mb-1 text-black">info@abdullahlinkedinwala.com</p>
                <p className="text-black">+92 333 111 222 6</p>
              </div>

              {/* Office */}
              <div>
                <h5 className="text-neutral-400 uppercase text-xs mb-2">Office Location</h5>
                <p className="text-black">
                  Office no 29, Street no 4, Industrial Area, I-10/3, Islamabad
                </p>
              </div>

              {/* Socials */}
              <div>
                <h5 className="text-neutral-400 uppercase text-xs mb-2">Socials</h5>
                <ul className="space-y-1">
                  <li>
                    <Link href="https://linkedin.com/" target="_blank" className="hover:underline text-black">
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link href="https://instagram.com/" target="_blank" className="hover:underline text-black">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/" target="_blank" className="hover:underline text-black">
                      Twitter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
