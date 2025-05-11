{/*import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Home from "./Portfolios";
const UNSPLASH_API_KEY = "Vm_5CRBgsauLSs9qg6-rXXGj-fHse4TBunuQyFg82OE";

const serviceDescriptions = [
  {
    title: "Web Design",
    body: "Our web design service brings your brand to life online with visually stunning, responsive websites that ensure a seamless user experience. Whether it's a corporate site, e-commerce platform, or portfolio, we craft designs that engage and convert visitors."
  },
  {
    title: "Graphic Design",
    body: "We provide top-tier graphic design services that deliver eye-catching visuals to elevate your brand identity. From logos to marketing materials, our designs combine creativity with functionality to communicate your message effectively."
  },
  {
    title: "Photo Editing",
    body: "Our photo editing service ensures that every image you use shines with professional quality. We enhance, retouch, and manipulate photos to align with your creative vision, perfect for marketing, websites, or personal projects."
  },
  {
    title: "Video Editing",
    body: "Our video editing team transforms raw footage into polished, high-quality content. From corporate videos to social media snippets, we offer professional editing services that help you captivate your audience and communicate your story visually."
  }
];
 
const fetchData = async (setServices: any) => {
  const imagePromises = serviceDescriptions.map(async (_: any) => {
    const unsplashResponse = await fetch(
      `https://api.unsplash.com/photos/random?query=webdesign&client_id=${UNSPLASH_API_KEY}`
    );
    const unsplashData = await unsplashResponse.json();
    return unsplashData.urls.small;  
  });

  const images = await Promise.all(imagePromises);

   
  const servicesWithImages = serviceDescriptions.map((service: any, index: number) => ({
    ...service,
    imageUrl: images[index],
  }));

  setServices(servicesWithImages);
};

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchData(setServices);
  }, []);
 
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const container = {
    
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (<>
    <div className="min-h-screen  ">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <h1 className="text-5xl font-bold mb-6 text-gray-800"> </h1>
        <p className="text-lg text-gray-600">
          We offer a wide range of digital services to boost your online presence.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10  "
        variants={container}
        initial="hidden"
        animate="show"
        
      >
        {services.map((service: any, index: number) => (
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            key={index}
            whileHover={{ scale: 1.05 }}
            variants={fadeInUp}
            
          >
            <Image
              src={service.imageUrl}
              alt={service.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 w-500 ">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.body}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </>);
};

export default Services;
*/}

import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { SiProtonmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
 
import { motion } from "framer-motion";
import Link from "next/link";
import { BsTextarea } from "react-icons/bs";
import { useTypewriter } from 'react-simple-typewriter';
const ContactForm = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  }; 

  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
    preferredCommunication: "email",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch("https://red-fawn-xi.vercel.app/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json(); // Parse JSON response
          console.log("Form submitted successfully:", data);
        } else {
          const textData = await response.text(); // Handle non-JSON response
          console.log("Form submitted successfully:", textData);
        }
        setIsSuccess(true); // Mark as success
        setFormData({
          name: "",
          email: "",
          phone: "",
          query: "",
          preferredCommunication: "email",
        }); // Reset form data
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (<>
  
    <form onSubmit={handleSubmit}>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div id="contact" className="grid lg:grid-cols-2 grid-cols-1" >
            {/* Left Image Section */}
            <div className="lg:mb-0 mb-10 mr-3">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src="https://pagedone.io/asset/uploads/1696488602.png"
                  
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700"
                  />
                  <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                    Contact us
                  </h1>
                  <div className="absolute bottom-0 w-full lg:p-11 p-5">
                    <div className="bg-white rounded-lg p-6 block">
                      <a href="tel:470-601-1911" className="flex items-center mb-6">
                        <IoCall />
                        <h5 className="text-black text-base font-normal leading-6 ml-5">470-601-1911</h5>
                      </a>
                      <a href="https://veilmail.io/irish-geoff" className="flex items-center mb-6">
                        <SiProtonmail />
                        <h5 className="text-black text-base font-normal leading-6 ml-5">https://veilmail.io/irish-geoff</h5>
                      </a>
                      <a href="javascript:;" className="flex items-center">
                        <FaLocationDot />
                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                          WeWork, 725 Ponce de Leon Ave NE, Atlanta
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Form Section */}
            <div className="bg-indigo-100 lg:rounded-r-2xl rounded-2xl">
              <div className="lg:p-11 p-5">
                <div className="mb-10">
                  <h4 className="font-manrope text-black text-2xl font-bold leading-8">Get in touch</h4>
                  <p className="font-manrope text-base font-normal text-black">Complete the form and we will get back to you.</p>
                </div>
                {/* Form */}
                <div className="block">
                  <div className="w-full">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Full name"
                      className="w-full bg-white rounded-lg border border-gray-300 text-gray-900 text-base p-3 focus:ring-indigo-500 focus:border-indigo-500 mb-6"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="Email"
                      className="w-full bg-white rounded-lg border border-gray-300 text-gray-900 text-base p-3 focus:ring-indigo-500 focus:border-indigo-500 mb-6"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Phone"
                      className="w-full bg-white rounded-lg border border-gray-300 text-gray-900 text-base p-3 focus:ring-indigo-500 focus:border-indigo-500 mb-6"
                    />
                  </div>
                  <div className="w-full">
                    <textarea
                      name="query"
                      value={formData.query}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Message"
                      className="w-full bg-white rounded-lg border border-gray-300 text-gray-900 text-base p-3 focus:ring-indigo-500 focus:border-indigo-500 mb-6"
                    />
                  </div>
                  {/* Success Button */}
                  <button
                    className="bg-yellow-500 w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-1"
                    type="submit"
                    disabled={isSuccess}
                  >
                    {isSuccess ? "Sent" : "Send"}
                    {isSuccess ? (
                      <RiSendPlaneFill className="text-green-500" />
                    ) : (
                      <RiSendPlaneFill />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
 </> );
};

export default ContactForm;
