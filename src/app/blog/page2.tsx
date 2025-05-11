"use client";
import { Spotlight } from "@/components/ui/spotlight-new"
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SparklesCore } from "../../components/ui/sparkles";
import { useEffect, useState } from "react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart, Search } from "lucide-react";
import Link from "next/link";
import { Carousel } from "@/components/ui/carousel";
import { useRouter } from 'next/navigation';
import './styles.css'
import Image from "next/image";
import AA from '../public/images/AA.jpg'
import A from '../public/images/A.jpg'
import S from '../public/images/S.jpg'
import W from '../public/images/W.jpg'
import T from '../public/images/T.jpg'
import Qa from '../public/images/Qa.jpg'

 
 
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];
export default function SpotlightNewDemo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [[page, direction], setPage] = useState([0, 1]);
  const router = useRouter();

  const [visible, setVisible] = useState(true);

  if (!visible) return null;





  const handleSearchClick = () => {
    router.push('/search');
  };

  const handleCartClick = () => {
    router.push('/cart');
  };
  useEffect(() => {
    (function () {
      function init(item: HTMLElement) {
        const items = item.querySelectorAll('li');
        let current = 0;
        let autoUpdate = true;
        const timeTrans = 4000;

        const nav = document.createElement('nav');
        nav.className = 'nav_arrows';

        const prevbtn = document.createElement('button');
        prevbtn.className = 'prev';
        prevbtn.setAttribute('aria-label', 'Prev');

        const nextbtn = document.createElement('button');
        nextbtn.className = 'next';
        nextbtn.setAttribute('aria-label', 'Next');

        const counter = document.createElement('div');
        counter.className = 'counter';
        counter.innerHTML = `<span>1</span><span>${items.length}</span>`;

        if (items.length > 1) {
          nav.appendChild(prevbtn);
          nav.appendChild(counter);
          nav.appendChild(nextbtn);
          item.appendChild(nav);
        }

        items[current].className = 'current';
        if (items.length > 1) items[items.length - 1].className = 'prev_slide';

        const navigate = (dir: 'left' | 'right') => {
          items[current].className = '';

          if (dir === 'right') {
            current = current < items.length - 1 ? current + 1 : 0;
          } else {
            current = current > 0 ? current - 1 : items.length - 1;
          }

          const nextCurrent = current < items.length - 1 ? current + 1 : 0;
          const prevCurrent = current > 0 ? current - 1 : items.length - 1;

          items[current].className = 'current';
          items[prevCurrent].className = 'prev_slide';
          items[nextCurrent].className = '';

          counter.firstChild!.textContent = (current + 1).toString();
        };

        item.addEventListener('mouseenter', function () {
          autoUpdate = false;
        });

        item.addEventListener('mouseleave', function () {
          autoUpdate = true;
        });

        setInterval(function () {
          if (autoUpdate) navigate('right');
        }, timeTrans);

        prevbtn.addEventListener('click', function () {
          navigate('left');
        });

        nextbtn.addEventListener('click', function () {
          navigate('right');
        });

        document.addEventListener('keydown', function (ev) {
          const keyCode = ev.keyCode || ev.which;
          switch (keyCode) {
            case 37:
              navigate('left');
              break;
            case 39:
              navigate('right');
              break;
          }
        });

        item.addEventListener('touchstart', handleTouchStart, false);
        item.addEventListener('touchmove', handleTouchMove, false);

        let xDown: number | null = null;
        let yDown: number | null = null;

        function handleTouchStart(evt: TouchEvent) {
          xDown = evt.touches[0].clientX;
          yDown = evt.touches[0].clientY;
        }

        function handleTouchMove(evt: TouchEvent) {
          if (!xDown || !yDown) {
            return;
          }

          const xUp = evt.touches[0].clientX;
          const yUp = evt.touches[0].clientY;

          const xDiff = xDown - xUp;
          const yDiff = yDown - yUp;

          if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
              navigate('right');
            } else {
              navigate('left');
            }
          }

          xDown = null;
          yDown = null;
        }
      }

      Array.prototype.slice.call(document.querySelectorAll('.cd-slider')).forEach(function (item: HTMLElement) {
        init(item);
      });
    })();
  }, []);

  return (<>
 
    <nav className="sticky top-0 z-50 px-4 py-4 flex items-center justify-between shadow-sm backdrop-blur-sm rounded-sm bg-white/70">

      <img
        src="data:image/svg+xml;utf8,%3Csvg%20width%3D%22200%22%20height%3D%2260%22%20viewBox%3D%220%200%20200%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%3E%0A%20%20%3Ctext%20x%3D%2210%22%20y%3D%2238%22%20font-family%3D%22'Georgia'%2C%20serif%22%20font-size%3D%2230%22%20fill%3D%22%23355E3B%22%20letter-spacing%3D%222%22%3E%0A%20%20%20%20Khadi%0A%20%20%3C%2Ftext%3E%0A%20%20%3Ctext%20x%3D%22105%22%20y%3D%2238%22%20font-family%3D%22'Georgia'%2C%20serif%22%20font-size%3D%2230%22%20fill%3D%22%23A0522D%22%20letter-spacing%3D%222%22%3E%0A%20%20%20%20House%0A%20%20%3C%2Ftext%3E%0A%20%20%3Cline%20x1%3D%2210%22%20y1%3D%2245%22%20x2%3D%22190%22%20y2%3D%2245%22%20stroke%3D%22%23CCC0A6%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%224%202%22%3E%3C%2Fline%3E%0A%3C%2Fsvg%3E"
        alt="Khadi House"
        className="inline-block align-middle ml-2"
      />{/* Desktop Links */}
      <div className="hidden lg:flex items-center space-x-6 text-lime-700 text-lg pr-4">
        <ul className="flex space-x-6 text-2xl">
          {navLinks.map(({ href, label }) => (
            <li
              key={href}
              className="hover:bg-gradient-to-r hover:from-blue-600 hover:via-green-500 hover:to-indigo-400 hover:text-transparent hover:bg-clip-text transition transform hover:scale-110"
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        {/* Search and Cart Icons */}
        <button onClick={handleSearchClick} className="hover:text-lime-600 transition">
          <Search className="w-5 h-5" />
        </button>
        <button onClick={handleCartClick} className="hover:text-lime-600 transition relative">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
            3
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center space-x-4">
        <button onClick={handleSearchClick} className="hover:text-lime-500 transition">
          <Search className="w-6 h-6 text-black" />
        </button>
        <button onClick={handleCartClick} className="hover:text-lime-500 transition relative">
          <ShoppingCart className="w-6 h-6 text-black" />
          <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full px-1">
            3
          </span>
        </button>

        {/* Hamburger Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="w-8 h-8 text-black" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white/90 text-black">
            <div className="flex flex-col space-y-6 mt-10 text-center text-3xl font-semibold">
              {navLinks.map(({ href, label }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="hover:text-lime-500 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
    <div className="relative overflow-hidden w-full h-full py-20">

    </div>
    <div className="main">


      <div className="cd-slider">
        <ul>
          <li>
            <div className="image" style={{ backgroundImage: `url(${S.src})` }}></div>
            <div className="content p-4 ">
              <h2 className="mt-0 p-4">Defected Gadgets Collection 2017</h2>

            </div>
          </li>
          <li>
            <div className="image" style={{ backgroundImage: `url(${A.src})` }}></div>
            <div className="content">
              <h2>Thirdhand Gadgets</h2>
              <a href="#">View Gadgets</a>
            </div>
          </li>
          <li>
            <div className="image" style={{ backgroundImage: `url(${AA.src})` }}></div>
            <div className="content ">
              <h2 className=""> Budget Collection 2017</h2>
              <a href="#">View collection</a>
            </div>
          </li>
          <li>
            <div className="image" style={{ backgroundImage: `url(${T.src})` }}></div>
            <div className="content">
              <h2>Recommended</h2>
              <a href="#">View Gadgets</a>
            </div>
          </li>
          <li>
            <div className="image" style={{ backgroundImage: `url(${Qa.src})` }}></div>

            <div className="content">
              <h2>Most Popular</h2>
              <a href="#">View Gadgets</a>
            </div>
          </li>
        </ul>
      </div>



    </div>
    <div className=" h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        className={cn(
          "relative mb-6 max-w-2xl text-left text-4xl leading-normal font-bold tracking-tight text-zinc-700 md:text-7xl dark:text-zinc-100",
        )}
        layout
      >
        <div className="inline-block">
          Make your websites look 10x <ContainerTextFlip words={["better", "modern", "Websites", "Apps", "Service"]} />

        </div>
      </motion.div>

      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>

    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />



    </div>


  </>)
}

