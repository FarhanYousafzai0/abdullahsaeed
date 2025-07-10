"use client";
import { SpinnerDotted } from "spinners-react";


export const Page = () => {
  return (
    <div className="w-screen overflow-x-hidden text-white">
      <div className="md:w-[80%] w-[90%] py-30 mx-auto h-full">
        <span className="md:text-7xl max-w-sm text-5xl text-black font-normal">
          Helping clients thrive <br />
          in the digital world
        </span>

        <hr className="text-neutral-300 my-10" />

        <div className="w-full flex md:flex-row flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p className="font-light text-black max-w-xs leading-6">
              I help clients from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.
            </p>
            <span className="text-neutral-400 flex items-center gap-3">
              <span>Always exploring</span>  
              <SpinnerDotted size={30} thickness={100} speed={100} color="#a1a1a1" />  
            </span>
          </div>

          <div className="flex-1 rounded-md">
            <img src="/Work.png" alt="" className="rounded-md" />
          </div>
        </div>
      </div>

      <div className="p-4 gap-4 md:h-screen h-auto w-full flex md:flex-row flex-col-reverse mt-15">
        <div className="w-full h-full md:p-5 flex justify-center">
          <div className="md:h-[100%] w-[85%] rounded-md flex items-start overflow-hidden">
            <img src="/cert.jpeg" alt="" className="rounded-md object-center"/>
          </div>
        </div>

        <div className="w-full h-full md:p-5 flex justify-center">
          <div className="h-[80%] w-[90%] flex items-start relative">
            <div>
              

              <div className="flex flex-col px-4">
                <span className="mt-4 md:text-4xl text-3xl text-black">
                  Full Stack Web- <br /> Developer 2024 
                </span>
                <p className="text-black text-sm font-extralight max-w-sm mt-4 leading-5">
                  I'm a certified Full Stack Developer from PNY Training Institute, where I completed my training in 2024. 
                  I've mastered both frontend and backend technologies, and I'm proud to be one of the top-performing 
                  students from my batch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;