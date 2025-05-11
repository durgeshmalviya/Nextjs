"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from 'next/link';

import AOS from "aos";
import "aos/dist/aos.css";

import Web from './Portfolios';
import { url } from 'node:inspector';
import Contact from './service';
 
 


export default function MainPage() {
  const [isClient, setIsClient] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });
 
  const [isFirstImage, setIsFirstImage] = useState(true);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstImage((prev) => !prev);
    }, 5000); // Change images every 3 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);



  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }


  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#d299c2] to-[#fef9d7] text-gray-900 p-0 ">
        <main className=''>  
          <nav className="sticky top-0 z-50 relative px-4 py-4 flex justify-between items-center rounded-sm">
                     <span className="font-bold "><h1 className="text-2xl text-lime-900">Indus <span className="text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-lime-900 animate-gradient">Technology</span></h1></span>
            <div className="lg:hidden">
              <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex justify-end pr-4 p-4 text-lime-700">
              <ul className="space-x-6 text-lg flex ">
                <li className="hover:bg-gradient-to-r hover:from-blue-600 hover:via-green-500 hover:to-indigo-400 hover:text-transparent hover:bg-clip-text transition-colors duration-300 transform hover:scale-110">
                  <a href="#services">Services</a>
                </li>
                <li className="hover:bg-gradient-to-r hover:from-blue-600 hover:via-green-500 hover:to-indigo-400 hover:text-transparent hover:bg-clip-text transition-colors duration-300 transform hover:scale-110">
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li className="hover:bg-gradient-to-r hover:from-blue-600 hover:via-green-500 hover:to-indigo-400 hover:text-transparent hover:bg-clip-text transition-colors duration-300 transform hover:scale-110">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

          </nav>

          {/* Mobile Menu */}
          <div className={`navbar-menu relative z-50 ${isMenuOpen ? '' : 'hidden'}`}>
            <div className="navbar-backdrop fixed inset-0 bg-gray-900 opacity-90" onClick={toggleMenu}></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full py-6 px-6   border-r overflow-y-auto">
              <button className="navbar-burger flex items-center justify-end p-3" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button> <div className="flex items-center mb-8 text-center">


              </div>
              <div className='text-center  text-4xl '>
                <ul>
                  <li className="mb-1">
                    <Link href="#services" className="block p-4 font-semibold text-red-900   rounded">
                      Services
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="#portfolio" className="block p-4 font-semibold text-blue-400   rounded">
                      Portfolio
                    </Link>
                  </li>

                  <li className="mb-1">
                    <Link href="#contact" className="block p-4 font-semibold text-green-400   rounded">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

            </nav></div>
          <section className="flex flex-col items-center justify-center h-screen ">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className=""

            >
              <h2 className="text-7xl p-30 font-extrabold text-lime-900 ">Crafting Beautiful Websites</h2>
              <p
                data-aos="fade-up"
                className="mt-4 text-6xl text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-lime-900 animate-gradient">
                Your vision, our design
              </p>

            </motion.div>
            {isFirstImage ? (
              <motion.img
                src="https://i.ibb.co/j7wqgkX/original-d0d0fa2583cfb0c1104b491569f44912.gif"
                 
                className="mt-10 w-full max-w-xl z-1"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ mixBlendMode: "multiply" }}
              />) : (

              <motion.img
                src="https://i.ibb.co/j7wqgkX/original-d0d0fa2583cfb0c1104b491569f44912.gif"
                
                className="mt-10 w-full max-w-xl"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ mixBlendMode: "multiply" }}
              />)}
          </section>


          <section
            className="call-to-action py-16 relative"
            style={{
              backgroundImage: "url('https://i.postimg.cc/TYCjCTLL/background.jpg')",
              backgroundPosition: "center top",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              mixBlendMode: 'multiply'
            }}>
            <div className="container mx-auto px-4">
              <div className="flex justify-center">
                <div className="text-center max-w-4xl ">
                  <h2 className="text-5xl font-bold text-[#fef9d7] mb-6">
                    Have any project in mind?
                  </h2>
                  <p className="text-gray-200 mb-6">
                    I'd love to hear about it! Whether it's a small idea or a grand vision,

                    <span className="  text-[#d299c2]"> I'm ready to bring it to life. Reach out today and let's make your project a reality!</span>
                  </p>

                  <h3 className="text-4xl font-bold text-[#d299c2] text-center mb-8">Get in Touch</h3>
                </div>
              </div>
            </div>
          </section>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
          ><section className="services  " id="services" data-scroll-index="2" >
              <div className="container mx-auto">
                <div className="flex justify-center">
                  <div className="lg:w-2/3 text-center">
                    <div className="section-title mb-12 mt-5" data-aos="fade-up">

                      <h2 className="text-4xl font-bold text-gray-900">Services <span className="text-blue-600">that I can provide for you</span></h2>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-0">

                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8" data-aos="fade-up">
                    <div className="relative service-item bg-gradient-to-r from-[#ebc0fd] to-[#d9ded8]  rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                      <img src="https://i.ibb.co/7NtwfDbt/wd.gif" className="w-full h-64 object-fit" />
                      <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <i className="fa-solid fa-laptop text-white text-4xl"></i>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">Web Design</h3>
                        <p className="text-gray-600">By understanding your needs and goals, I translate those into wireframes and mockups by blending artistic vision with technical skills to craft user-friendly and visually appealing online experiences.</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay="100">
                    <div className="relative service-item bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                      <motion.img src="https://i.ibb.co/6cJzxSV9/vd.webp"   className="w-[500ch] h-64 object-cover" />
                      <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <i className="fa-solid fa-edit text-white text-4xl"></i>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">Video Editing</h3>
                        <p className="text-gray-600">By understanding visual composition, color theory, and typography I can create engaging title cards, design animated transitions, or choose appropriate background music to match the video's tone.</p>
                      </div>
                    </div>
                  </div>


                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 " data-aos="fade-up" data-aos-delay="200">
                    <div className="relative service-item bg-gradient-to-r from-[#d299c2] to-[#fef9d7] rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                      <img src="https://cdn.dribbble.com/userupload/37335365/file/original-b00ae5feb9dd1c4615272e9a6dd111a2.png"
                      className="w-full h-64 object-cover" />
                      <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <i className="fa-solid fa-code text-white text-4xl"></i>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">Web Development</h3>
                        <p className="text-gray-600">I can create wireframes and prototypes that outline the layout and user interface elements, ensuring that the website looks good across different devices and browsers, blending design and functionality.</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8  " data-aos="fade-up" data-aos-delay="300">
                    <div className="relative service-item bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                      <motion.video autoPlay
                        muted
                        loop src="https://cdn.dribbble.com/userupload/14090638/file/original-8bb2193fbab4f9b1cac096f86b611e99.mp4"  className="w-full h-64 object-cover" />
                      <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <i className="fa-solid fa-paint-brush text-white text-4xl"></i>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">Graphic Design</h3>
                        <p className="text-gray-600">With the goal to create compelling visual elements for websites, I can design logos, icons, illustrations, and other visual assets that enhance the website's branding and aesthetic appeal.</p>
                      </div>
                    </div>
                  </div>




                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay="500">
                    <div className="relative service-item bg-gradient-to-r from-[#ebc0fd] to-[#d9ded8]  rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                      <img src="https://i.ibb.co/XZN01s5X/app.jpg"   className="w-full p-2 rounded-lg h-64 object-cover" />
                      <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <i className="fa-solid fa-mobile text-white text-4xl"></i>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">App Development</h3>
                        <p className="text-gray-600">I create visually appealing and intuitive Android app interfaces by designing layouts, navigation menus, buttons, and icons, ensuring a cohesive user experience.</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 rounded-xl" data-aos="fade-up" data-aos-delay="400">
                    <div className="relative service-item bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                      <img src="https://i.ibb.co/YTwrRj0j/dm.gif"  className="w-full h-64 object-fit" />
                      <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <i className="fa-solid fa-bullhorn text-white text-4xl"></i>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">Digital Marketing</h3>
                        <p className="text-gray-600">In digital marketing, I enhance visual aesthetics, user experience, SEO, responsive design, and conversion optimization for your website.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section><section
              className="call-to-action py-16 relative h-[50vh]"
              style={{
                backgroundImage: "url('https://i.ibb.co/5WB6SGYq/UtlFGEP.gif')",
                backgroundPosition: "center top",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                mixBlendMode: 'multiply'
              }}>
              <div className="container mx-auto px-4">
                <div className="flex justify-center">
                  <div className="text-center max-w-4xl ">
                  </div>
                </div>
              </div>
            </section>

            <div className="grid gap-8 lg:grid-cols-3 p-8" >
              <div data-aos="slide-up" className="p-6 bg-gradient-to-r from-[#d299c2] to-[#fef9d7] rounded-2xl shadow-md hover:shadow-lg transition duration-500">
                <motion.video
                  autoPlay
                  muted
                  loop
                  src="https://cdn.pixabay.com/video/2018/01/30/14025-254146871_large.mp4"
                  className="mt-10 w-full max-w-xl"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{ mixBlendMode: "multiply" }}
                />
                <h4 className="text-2xl font-semibold mb-4">API Design</h4>
                <p className="mb-4">

                  API design involves creating a communication interface between software. Common tools like Postman and Swagger are used for testing and documenting APIs, while languages like JavaScript (Node.js) or Python are often employed for backend development.
                </p>

              </div>

              <div data-aos="slide-up" className="p-6 bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] rounded-2xl shadow-md hover:shadow-lg transition duration-500">
                <motion.video
                  autoPlay
                  muted
                  loop
                  src="https://cdn.pixabay.com/video/2022/07/12/123872-729413470_large.mp4"
                  
                  className="mt-10 w-full max-w-xl"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{ mixBlendMode: "multiply" }}
                /> <h4 className="text-2xl font-semibold  mb-4">Web Design</h4>
                <p>We create modern, responsive websites with a focus on user experience. Our services include mobile-friendly designs, intuitive interfaces, and fast, secure development using the latest technologies like HTML5, CSS3, and React. Tailored solutions for businesses, from e-commerce to content management.</p>
              </div>
              <div data-aos="slide-up" data-aos-duration="1200" className="p-6 bg-gradient-to-r from-[#ebc0fd] to-[#d9ded8] rounded-2xl shadow-md hover:shadow-lg transition duration-500">

                <motion.video
                  autoPlay
                  muted
                  loop
                  src="https://cdn.pixabay.com/video/2016/07/16/3844-175348569_large.mp4"
                  className="mt-10 w-full max-w-xl"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{ mixBlendMode: "multiply" }}
                />
                <h4 className="text-2xl font-semibold mb-4">Graphic Design</h4>
                <p>Creative graphic design that enhances your brand's identity.</p>
              </div>
            </div>
          </motion.div>
          {/*/https://framerusercontent.com/assets/UOQMOWGDbqWKzMVRdtSm3NFY8Z0.mp4*/}
          <div data-aos="slide-up"
            style={{ userSelect: 'none', backgroundImage: "url(' ')", mixBlendMode: "multiply", backgroundRepeat: 'unset' }}
            className="pointer-events-none border p-6 grid gap-8 lg:grid-cols-2 ransition duration-500">
            <motion.video
              autoPlay
              muted
              loop
              src="https://i.imgur.com/UtlFGEP.mp4"
              className="mt-10 w-full max-w-xl "
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ mixBlendMode: "multiply", }}
            /><article data-aos="slide up"
              data-aos-duration="1200" className='mt-10  ls-3 text-red-300 first-letter:uppercase first-letter:text-5xl lowercase'>
              Being a video editor is great. We edit videos, not movies. We don’t spend months working on one project for it to be seen by a room of people. Our videos have the potential to reach tens of millions in at the click of a button. We make videos in days or weeks, not months.  Our videos make a difference to the world we live in. We bring joy, peace, wisdom, escape. And we do it every day. We are proud to be video editors. And we’re proud to have you as one of us
            </article>

          </div><br/>
          <motion.div className="inset-0 h-45 pointer-events-none">
            <motion.video
              autoPlay
              muted
              loop
              src="https://framerusercontent.com/assets/UOQMOWGDbqWKzMVRdtSm3NFY8Z0.mp4"
              className="mt-20 rounded "
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ mixBlendMode: "multiply", borderRadius: "0px 0px 0px 0px", opacity: "0.3", zIndex: "50" }} />
          </motion.div>
<hr/><div className='bg-gray-100 py-12'>
  <h2 className='text-4xl font-bold text-center mb-4'>Our Team</h2>
  <p className='text-center text-gray-600 mb-10'>Our Team Consists Only of the Best Talents</p>
  <div className='flex flex-wrap justify-center gap-8'>
    <div className='card max-w-xs bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='bg-cover h-56' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1633332755192-727a05c4013d')" }}></div>
      <div className='p-4'>
        <h4 className='text-xl font-semibold'>John Doe</h4>
        <span className='block text-gray-500 text-sm'>CEO</span>
        <p className='text-gray-700 mt-4'>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
      </div>
    </div>
    <div className='card max-w-xs bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='bg-cover h-56' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570295999919-56ceb5ecca61')" }}></div>
      <div className='p-4'>
        <h4 className='text-xl font-semibold'>John Smith</h4>
        <span className='block text-gray-500 text-sm'>Manager</span>
        <p className='text-gray-700 mt-4'>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
      </div>
    </div>
    <div className='card max-w-xs bg-white shadow-lg rounded-lg overflow-hidden'>
      <div className='bg-cover h-56' style={{ backgroundImage: "url('https://user-images.githubusercontent.com/83168881/167544540-8d4c362d-754a-4c44-9b03-1c7d6d20e3a0.jpg')" }}></div>
      <div className='p-4'>
        <h4 className='text-xl font-semibold'>Riya Bhatta</h4>
        <span className='block text-gray-500 text-sm'>CTO</span>
        <p className='text-gray-700 mt-4'>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
      </div>
    </div>
  </div>
</div>

<hr/>

          <Web/>
       <Contact />

        </main>
      
 
      </div><footer className="py-6 text-center bg-gray-800 text-white"> 
        <p>&copy; 2025 ProDesign Studio. All rights reserved.</p>
      </footer>  
    </>
  );
}


