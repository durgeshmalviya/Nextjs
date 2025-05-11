"use client";
import { Spotlight } from "@/components/ui/spotlight-new"
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SparklesCore } from "../../components/ui/sparkles";
import { useEffect, useState } from "react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu,CircleUserRound, X,   } from "lucide-react";
import Link from "next/link";
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useRouter } from 'next/navigation';

import Image from "next/image";
import AA from '../public/images/AA.jpg'
import A from '../public/images/A.jpg'
import S from '../public/images/S.jpg'
import W from '../public/images/W.jpg'
import T from '../public/images/T.jpg'
import Qa from '../public/images/Qa.jpg'
import { AuthButtons } from '../../components/ui/AuthButtons'
 
 
import { BsCart4, BsCartDash } from "react-icons/bs";
import { IconBookmarkQuestion, IconMarquee, IconMarqueeOff } from "@tabler/icons-react";
import ProductPage from "./products";
import EXPage from "./Exclusive";
import Footer from "./footer";
import AmazonKurtas from "./HM";
import HeroSlider from "./New";
const navLinks = ['Twinning','Woman', 'Men','Kids', 'Our Story'];
const images = [T, Qa, S, W, A, AA];

export default function SpotlightNewDemo() {
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();


  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Auto-play every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) instanceRef.current.next();
    }, 3500);
    return () => clearInterval(interval);
  }, [instanceRef]);


  return (<> 
   
    <motion.div initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, type: 'spring' }}>
      <div className="relative w-full max-w-8xl mx-auto h-full overflow-hidden shadow-lg pt-4  ">
        {/* Slides */}
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide, idx) => (
            <div className="keen-slider__slide relative flex items-center justify-center mt-10" key={idx}>
              <Image
                src={slide.image}
                alt={slide.title}
               width={1920}
               height={900}
       
              /> 
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center p-8 text-white">
                <h2 className="text-3xl font-bold mb-2 bg-red-900 bg-opacity-70 ">{slide.title}</h2>
                <p className="mb-4 max-w-md bg-red-900 bg-opacity-40">{slide.description}</p>
                <a
                  href={slide.link}
                  className="bg-transparent hover:bg-gray-200 text-gray-200 px-5 py-2 rounded-md transition-all"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
        >
          ←
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
        >
          →
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full ${currentSlide === idx ? 'bg-lime-500' : 'bg-white/50'
                } transition-all`}
            />
          ))}
        </div>
      </div>
    </motion.div>

  

    <h1 className="mt-12 p-14 text-center self-center text-3xl font-bold text-red-400 "> Celebrity Favourites</h1>
   
    <EXPage/>
    <motion.div className="p-4 mt-3">
    <motion.h1 className="text-3xl text-center pt-9 font-sembold ">New Arrivals </motion.h1>
    <HeroSlider/>
    </motion.div>
    
    <motion.div className="p-4 mt-3 bg-white-300">
<motion.h1 className="text-3xl text-center pt-9 font-semibold bg-gradient-to-r from-pink-400 to-red-900 animate-gradient mx-auto text-transparent bg-clip-text ">Featured In</motion.h1>
<div className="bg-white py-6 px-4 md:px-12 rounded-xl shadow-lg">
      <div className="flex flex-wrap justify-center items-center gap-8">
        {logos.map((logo, index) => (
          <motion.a
            key={index}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-28 md:w-40 flex justify-center"
          >
            <Image
              src={logo.src}
              alt={`Logo ${index + 1}`}
              width={160}
              height={80}
              className="object-contain"
            />
          </motion.a>
        ))}
      </div>
    </div>
    </motion.div>
  <AmazonKurtas/>
 
  
  </>)
}
 
const logos = [
  {
    href: "https://www.cosmopolitan.in/fashion/features/photo/7-homegrown-brands-get-your-summer-co-ord-sets-666994-2023-04-24",
    src: "https://phutari.co.in/cdn/shop/files/Screenshot_2023-05-17_155028_685d6a01-d362-4482-a1d4-4e3041b0b2fa.png?v=1706162740",
  },
  {
    href: "https://tweakindia.com/living/style/putting-together-a-closet-from-midsize-fashion-brands-on-a-rs-3000-budget/",
    src: "https://phutari.co.in/cdn/shop/files/Mrs-Funnybones-1_b473981a-0810-4f83-92a0-6857a653d37b.png?v=1706162741",
  },
  {
    href: "https://www.hindustantimes.com/lifestyle/fashion/sara-ali-khan-quirky-crocodile-print-pajama-set-is-a-summer-must-have-at-rs-3k-101626250444578.html",
    src: "https://phutari.co.in/cdn/shop/files/Hindustan_Times_logo_svg_34537310-0d59-43a1-a258-41a85403a6bb.png?v=1706162740",
  },
  {
    href: "https://www.whatshot.in/delhi-ncr/chill-in-style-shop-for-comfy-hand-block-printed-loungewear-from-this-jaipur-based-online-store-c-37732",
    src: "https://phutari.co.in/cdn/shop/files/whatshot-1584357297_ab2a646c-6459-45bd-987e-00b3af506c37.jpg?v=1706162740",
  },
];

const slides = [
  {
    image: 'https://phutari.co.in/cdn/shop/files/website_banner_landscape-3.jpg',
    title: 'Spring Fashion Sale',
    description: 'Get 40% to 70% off on all clothing collections. Limited time only!',
    link: '/shop',
  },
  {
    image: 'https://phutari.co.in/cdn/shop/files/website_banner_landscape-3.jpg',
    title: 'Trendy Styles',
    description: 'Refresh your wardrobe with this season’s must-haves.',
    link: '/shop/trending',
  },
  {
    image: 'https://phutari.co.in/cdn/shop/files/website_banner_landscape-2_e8973ef1-a987-4eba-b8ff-fed7c29869c2.jpg',
    title: 'Women’s Collection',
    description: 'Stylish picks for work, play, and everything in between.',
    link: '/shop/men',
  },
  {
    image:'https://phutari.co.in/cdn/shop/files/website_banner_landscape_06d9932f-d00c-474c-b5ab-9802c125b87f.jpg',
    title: 'Co-Ord Twinnig',
    description: 'Chic and elegant designs for every occasion.',
    link: '/shop/women',
  },
  {
    image:'https://phutari.co.in/cdn/shop/files/website_banner_landscape-3.jpg',
    title: 'Grabe Awsome Deals',
    description: 'Cute, comfy, and made to move — perfect for little ones.',
    link: '/shop/kids',
  },
  {
    image:'https://phutari.co.in/cdn/shop/files/3_6abcb5af-7844-411f-bfa0-e4e743de750c.jpg',
    title: 'Kids’ Wear',
    description: 'Use code **SAVE20** at checkout for an extra 20% off!',
    link: '/shop/all',
  },
];

