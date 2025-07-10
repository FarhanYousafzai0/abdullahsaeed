"use client";
import { SpinnerDotted } from "spinners-react";
import Header from "../components/Header";
import { Experience } from "../Utils/data";
import { PulseLoader } from "react-spinners";

export const Page = () => {
  return (
   <>
   
   <Header/>
   <div className="w-screen overflow-x-hidden text-white">
   <div className="bg-gray-50">
   <div className="relative">
         
          
          <div className="relative md:w-[80%] w-[90%] md:py-20 py-10 mx-auto md:pb-5  pb-0">
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
  <div className="relative z-10 mt-20">
    <span className="md:text-5xl text-gray-600 text-4xl font-semibold ">
    Grow your network. <br /> Boost your career.
    </span>

   
  </div>
</div>
        </div>

   
   <div className="md:w-[80%] w-[90%] py-10 mx-auto">
  


     <hr className="text-neutral-300 my-5" />

     <div className="w-full flex md:flex-row flex-col gap-5">
       {/* Text Block */}
       <div className="flex flex-col gap-3 md:w-1/2 w-full">
         <p className="font-light text-black max-w-sm leading-6">
           At <strong>Abdullah LinkedInWala</strong>, we are passionate about helping individuals leverage 
           the power of LinkedIn to unlock new career opportunities, build lasting professional 
           relationships, and enhance their online visibility. With years of experience in LinkedIn 
           profile optimization and management, we take pride in providing our clients with the tools 
           they need to succeed in the digital world.
         </p>
         <span className="text-neutral-400 flex items-center gap-3 mt-2">
           <span>Always exploring</span>
           <SpinnerDotted size={30} thickness={100} speed={100} color="#a1a1a1" />
         </span>
       </div>

       {/* Image */}
       <div className="md:w-1/2 w-full">
         <img src="/image.jpeg" alt="Work preview" className="rounded-md w-full object-cover" />
       </div>
     </div>

    <div className="mt-20 ">

    <span className="md:text-5xl mr-10 text-3xl text-gray-600 font-normal flex items-end gap-1 ">
              I can help you with <PulseLoader size={5} speedMultiplier={0.5} color="text-gray-600 "/>
            </span>
<div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
  {Experience.map((item, index) => (
    <div key={index} className="relative pt-10 px-5 pb-5">
      
      
<div className="flex items-center "> <div className="p-2 rounded-lg bg-gray-50">
            {item.icon}
          </div>
<span className="text-gray-600 text-2xl font-semibold">{item.title}</span></div>
      <p className=" text-sm mt-4 text-black">{item.description}</p>
    </div>
  ))}
</div>

    </div>

   </div>
{/*  */}



   </div>
   {/* Bottom Section */}
   <div className="md:w-[80%] w-[90%] py-20 mx-auto">
     <div className="w-full flex md:flex-row flex-col-reverse gap-5">
       {/* Text Block */}
       <div className="md:w-1/2 w-full">
  <div className="flex flex-col gap-4 px-2">
    <span className="md:text-4xl text-3xl text-gray-600 font-semibold">
      Certified Data Center Engineer
    </span>

    <p className="text-black text-sm font-extralight max-w-sm leading-5">
      I’m a Certified Data Center Engineer with over 5 years of hands-on experience in managing 
      critical IT infrastructure. I specialize in maintaining high-availability systems, optimizing 
      server performance, ensuring data security, and supporting enterprise-scale hardware environments.
    </p>

    <p className="text-black text-sm font-extralight max-w-sm leading-5">
      My expertise includes network setup, hardware installation, cooling systems, and real-time 
      monitoring to ensure seamless uptime and operational efficiency. I’ve worked on large-scale 
      deployments and troubleshooting missions that demand precision and reliability.
    </p>
  </div>
</div>


       {/* Image */}
       <div className="md:w-1/2 w-full">
         <img src="/image3.jpeg" alt="Profile" className="rounded-md w-full object-cover" />
       </div>
     </div>
   </div>
 </div>
   </>
  );
};

export default Page;
