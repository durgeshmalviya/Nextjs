{/*"use client";  

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
 
import MainPage from "./MainPage";
export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;  
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.6, -0.05, 0.01, 0.99],  
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (<>
<MainPage/>
 
  </>);
}
*/}  

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsTextarea } from "react-icons/bs";
import { useTypewriter } from 'react-simple-typewriter';

export default function Web() { 
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
     <motion.div
           
            initial="hidden"
            
            className="relative mt-6 rounded w-full pointer-events-none "  // Use relative to position the text properly
          >
            <motion.video
              autoPlay
              muted
              loop
              src=" "
              className="rounded-xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ mixBlendMode: "multiply", borderRadius: "0px 0px 500px 0px", }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 flex justify-center "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-lime-900 animate-gradient font-bold p-4 rounded-lg gradient-text bg-opacity-50">
                <TypewriterEffect />
              </h1>
            </motion.div>
          </motion.div>
    </>
  );
}
const TypewriterEffect: React.FC = () => {
  const [text] = useTypewriter({
    words: ["Looking for an editor ?", "Who delivers", "exceptional results ", "check out ", "What we can Do!"],
    loop: 0, // Set to 0 to stop looping
    typeSpeed: 70, // Speed of typing
    deleteSpeed: 50, // Speed of deleting
    delaySpeed: 1000, // Delay before typing again
  });

  return <>{text}</>;
};