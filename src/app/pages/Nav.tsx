"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, CircleUserRound, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { BsCartDash } from "react-icons/bs";
 const navLinks = ['Twinning','Woman', 'Men','Kids', 'Our Story'];
 
export default function Navb() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const NavLink = ({ label, onClick = () => {} }: { label: string; onClick?: () => void }) => (
    <motion.a
      href={`#${label.toLowerCase()}`}
      onClick={onClick}
      whileHover={{ scale: 1.05, color: '#eab308' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="cursor-pointer transition-colors"
    >
      {label}
    </motion.a>
  );

  return (
    <>
      <motion.nav className='bg-white fixed z-50 w-full px-6 py-3 transition-all duration-300'>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-blue-900 animate-gradient">
            <motion.span>
              <Image
                src="https://i.ibb.co/wZvWj6qV/Whats-App-Image-2025-04-24-at-19-24-36-5dd61357.jpg"
                alt=""
                width={150}
                height={130}
                className="-z-10 object-fill background-origin: border-box ml-20"
                style={{ mixBlendMode: 'multiply' }}
              />
            </motion.span>
          </Link>

          <div className="hidden md:flex gap-6 text-lg font-medium">
            {navLinks.map((link) => (
              <NavLink key={link} label={link} />
            ))}
          </div>

          <div className="hidden md:flex gap-6 text-lg font-medium">
            <a href='/user'><CircleUserRound /></a>
            <a href='/cart'><BsCartDash /></a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-blue-500"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="md:hidden flex flex-col gap-4 px-6 pt-4 pb-6 bg-white text-black font-medium rounded-b-xl shadow-xl"
            >
              <a href='/user'><CircleUserRound /></a>
              <a href='/cart'><BsCartDash /></a>
              {navLinks.map((link) => (
                <NavLink key={link} label={link} onClick={() => setMobileOpen(false)} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
