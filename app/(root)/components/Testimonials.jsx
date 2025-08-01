import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Header Text */}
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 font-pj">
            People can't stop praising Abdullah (LinkedIn Wala)
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Our happy clients say about us
            </h2>
          </div>

          {/* View All Reviews */}
          

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

            {/* Testimonials Cards Grid */}
            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {[
                {
                  text: '“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”',
                  name: 'Leslie Alexander',
                  role: 'Freelance React Developer',
                  img: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png'
                },
                {
                  text: '“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”',
                  name: 'Jacob Jones',
                  role: 'Digital Marketer',
                  img: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png'
                },
                {
                  text: '“I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”',
                  name: 'Jenny Wilson',
                  role: 'Graphic Designer',
                  img: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png'
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="flex flex-col overflow-hidden shadow-xl">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-[#FDB241]"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">{testimonial.text}</p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={testimonial.img}
                        alt={testimonial.name}
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">{testimonial.name}</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
