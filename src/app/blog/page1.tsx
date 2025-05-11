"use client";
import { Spotlight } from "@/components/ui/spotlight-new"
import { motion } from "framer-motion";
 
export default function SpotlightNewDemo() {
  return (<>
  
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> which is not overused.
        </h1> <motion.video
              autoPlay
              muted
              loop
              src="https://i.imgur.com/UtlFGEP.mp4"
              className="mt-10 w-full max-w-xl "
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ mixBlendMode: "multiply", justifySelf:'center'}}
            />
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          A subtle yet effective spotlight effect, because the previous version is used a bit too much these days.
        </p>
      </div>
    
    </div>  <div data-aos="slide-up"
            style={{ userSelect: 'none', backgroundImage: "url(' ')", mixBlendMode: "multiply", backgroundRepeat: 'unset' }}
            className="pointer-events-none border p-6 grid gap-8 lg:grid-cols-2 ransition duration-500">
           <article data-aos="slide up"
              data-aos-duration="1200" className='mt-10  ls-3 text-red-300 first-letter:uppercase first-letter:text-5xl lowercase'>
              Being a video editor is great. We edit videos, not movies. We don’t spend months working on one project for it to be seen by a room of people. Our videos have the potential to reach tens of millions in at the click of a button. We make videos in days or weeks, not months.  Our videos make a difference to the world we live in. We bring joy, peace, wisdom, escape. And we do it every day. We are proud to be video editors. And we’re proud to have you as one of us
            </article>

          </div> 
         
 </> )
}
 
 
