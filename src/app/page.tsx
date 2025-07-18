'use client';

import './globals.css'
import Navbar from './navbar/index';
import Page from './about/page';
import HomeSection from './home/index';
import { AnimatedSection, AnimateDownToUp, AnimatedXPosition, AnimateUpToDown, AnimateScale } from './animationPages/template';
import Services from './services/page';
import Contact from './contact/page';
import Footer from './footer/page';

import { useState, useEffect, useRef } from 'react';
import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

import { X, MessageCircle, Send, Loader2, ArrowDownCircleIcon } from 'lucide-react';

import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";

export default function Home() {

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatIcon, setShowChatIcon] = useState(false);
  const chatIconRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.log("useEffect running (initial render or dependency change)"); // Log saat useEffect berjalan
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldShow = currentScrollY > 50;
      console.log(`Scroll Event: window.scrollY = ${currentScrollY}, shouldShow = ${shouldShow}`); // Log setiap event scroll

      if (shouldShow) {
        if (!showChatIcon) { // Hanya update state jika memang berubah
          setShowChatIcon(true);
          console.log("Setting showChatIcon to TRUE"); // Log saat state diubah
        }
      } else {
        if (showChatIcon) { // Hanya update state jika memang berubah
          setShowChatIcon(false);
          setIsChatOpen(false); // Pastikan chat ditutup saat scroll kembali ke atas
          console.log("Setting showChatIcon to FALSE"); // Log saat state diubah
        }
      }
    };

    // Panggil sekali saat komponen dimuat untuk mengatur state awal
    handleScroll();
    console.log("Initial handleScroll called. Initial showChatIcon:", showChatIcon); // Log state setelah panggilan awal

    window.addEventListener("scroll", handleScroll);
    return () => {
      console.log("Cleaning up scroll event listener."); // Log saat cleanup
      window.removeEventListener("scroll", handleScroll);
    };

  }, [showChatIcon]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  }

  return (
    <>
      {/* navbar */}
      <AnimatedXPosition>
        <Navbar />
      </AnimatedXPosition>

      {/* home section */}
      <AnimatedSection>
        <HomeSection />
      </AnimatedSection>


      {/* about section */}
      <div className="mx-auto p-4 mt-15">
        <AnimateDownToUp>
          <Page />
        </AnimateDownToUp>
      </div>

      {/* our service */}
      <div className='mb-4 mt-10'>
        <AnimateUpToDown>
          <Services />
        </AnimateUpToDown>
      </div>

      {/* contact section */}
      <AnimateScale>
        <Contact />
      </AnimateScale>

      {/* footer section */}
      <Footer />

      <AnimatePresence>
        {showChatIcon && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className='fixed bottom-4 right-4 z-50'
          >
            <Button size="icon" variant="default" onClick={toggleChat} ref={chatIconRef} className="rounded-full size-14 p-2 shadow-lg bg-black text-white hover:bg-gray-800">
              {!isChatOpen ? (
                <MessageCircle className="size-12" />
              ) : (
                <ArrowDownCircleIcon className="size-12" />
              )}
            </Button>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}