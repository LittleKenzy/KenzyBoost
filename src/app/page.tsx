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

  const { messages, input, handleInputChange, handleSubmit, isLoading, stop, reload, error } = useChat({ api: "/api/openrouter" });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldShow = currentScrollY > 50;

      if (shouldShow) {
        if (!showChatIcon) {
          setShowChatIcon(true);
        }
      } else {
        if (showChatIcon) {
          setShowChatIcon(false);
          setIsChatOpen(false);
        }
      }
    };


    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [showChatIcon]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  }

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({behavior: "smooth"});
    }
  }, [messages]);

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
      <AnimatePresence>
        {isChatOpen && (<motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className='fixed bottom-28 right-4 z-50 w-[95%] md:w-[499px]'>
          <Card className='bg-white text-black dark:bg-zinc-900 dark:text-white border-2 shadow-lg'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-3'>
              <CardTitle className='text-lg font-bold'>
                Chat with KenzyBoost AI
              </CardTitle>
              <Button onClick={toggleChat}
                size="icon" variant="ghost" className='px-2 py-0'>
                <X className='size-4' />
                <span className='sr-only'>Close chat</span>
              </Button>
            </CardHeader>
            <CardContent>
              <ScrollArea className='h-[300px] pr-4'>
                {messages?.length === 0 && (
                  <div className='w-full mt-32 text-gray-500 items-center justify-center flex gap-3'>
                    No message yet.
                  </div>
                )}

                {messages.map((message, index) => (<div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                  <div className={`inline-block p-3 rounded-lg ${message.role === 'user' ? 'bg-primary text-primary-forefround' : 'bg-muted'}`}>
                    <ReactMarkDown
                      children={message.content}
                      remarkPlugins={[remarkGfm]}
                      components={{
                        // code({ node, inline, className, children, ...props }) {
                        code({ inline, className, children, ...props }: React.HTMLAttributes<HTMLElement> & { inline?: boolean }) {
                          return inline ? (
                            <code {...props} className='bg-gray-200 px-1 rounded'>{children}</code>
                          ) : (
                            <pre {...props} className='bg-gray-200 px-1 rounded'>
                              <code>{children}</code>
                            </pre>
                          )
                        },
                        ul: ({ children }) => (
                          <ul className='list-disc ml-4'>
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ul className='list-decimal ml-4'>
                            {children}
                          </ul>
                        )
                      }}
                    />
                  </div>
                </div>))}
                {isLoading && (
                  <div className='w-full items-center flex justify-center gap-3'>
                    <Loader2 className='animate-spin h-5 w-5 text-primary' />
                    <button className='underline' type='button' onClick={() => stop()}>
                      abort
                    </button>
                  </div>
                )}
                {error && (
                  <div className='w-full items-center flex justify-center gap-3'>
                    <div>An error occured.</div>
                    <button className='underline' type='button' onClick={() => reload()}>
                      retry
                    </button>
                  </div>
                )}
                <div ref={scrollRef}></div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <form onSubmit={handleSubmit} className='flex w-full items-center space-x-2'>
                <Input value={input} onChange={handleInputChange} className='flex-1' placeholder='Type your message here...' />
                <Button type='submit' className='size-9' disabled={isLoading} size="icon">
                  <Send />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </motion.div>)}
      </AnimatePresence>
    </>
  );
}