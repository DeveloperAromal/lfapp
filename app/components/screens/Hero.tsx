"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../includes/Navbar";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="block md:block lg:block">
      <div
        style={{
          backgroundImage: "url('/images/school_auto_x2.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Navbar />
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center relative z-50 font-serif">
              Empowering Minds, Igniting Futures: <br /> Welcome to Little Flower
            </h1>
            <div className="px-4 flex items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-200 text-black mt-5 rounded-md px-8 p-3 hover:bg-gray-300 transition duration-300 ease-in-out font-bold"
                >
                  Contact us
                </motion.button>
              </Link>
              <Link href="/enroll">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-cyan-600 mt-5 text-black rounded-md px-8 p-3 hover:bg-cyan-700 transition duration-300 ease-in-out font-bold"
                >
                  Enroll Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="fixed bottom-10 right-10">
          <div className="w-16 h-16 flex justify-center items-center">
            <button onClick={toggleChat}>
              <Image
                src="/icons/bot.png"
                alt="chatbot"
                width={100}
                height={100}
                className="w-full cursor-pointer z-50 shadow-purple-600 hover:shadow-lg transition duration-300 ease-in-out"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
