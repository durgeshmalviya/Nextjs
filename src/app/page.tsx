"use client";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState, useRef  } from 'react';
import { motion } from 'framer-motion';
import MainPage from './pages/MainPage';
import dynamic from 'next/dynamic';
import SpotlightNewDemo  from '../app/blog/page'
import { Navbar } from '../components/ui/resizable-navbar';
import { useAuth } from '../app/contexts/AuthContext'
import { AuthProvider } from './contexts/AuthContext'
import Footer from './blog/footer';
import Navb from './pages/Nav';
  export default function Page() {
    const { user, isAuthenticated, login, signup, logout } = useAuth()
    const [isMounted, setIsMounted] = useState(false);
    const bodyRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) {
      return null;
    }
    console.log('User:', user) // Debugging: Check if user is loaded correctly
    console.log('Is Authenticated:', isAuthenticated)
    return (
      <>
 
   <SpotlightNewDemo/>
      </>
    );
  }
