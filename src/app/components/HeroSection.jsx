"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600" style={{ fontSize: "50px", lineHeight: "1" }}>
              Hello, I&apos;m{" "}
            </span><br />
            <TypeAnimation
              sequence={[
                "Sathiska Gunarathna",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              style={{ fontSize: '55px', lineHeight: '1' }}
            />
          </h1>

          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500  hover:bg-slate-800 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-blue-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative border-4 border-blue-500 animate-pulse-border">
          <Image
            src="/images/projects/profile-pic.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={350}
            height={350}
            style={{ borderRadius: "100%" }}
          />
        </div>

        <style jsx>{`
  @keyframes pulse {
    0% {
      border-color: #3b82f6; /* Blue color */
      box-shadow: 0 0 15px #3b82f6;
    }
    50% {
      border-color: #60a5fa; /* Lighter blue */
      box-shadow: 0 0 10px #60a5fa;
    }
    100% {
      border-color: #3b82f6; /* Blue color */
      box-shadow: 0 0 15px #3b82f6;
    }
  }
  
  .animate-pulse-border {
    animation: pulse 2s infinite;
  }
`}</style>






      </div>
    </section>
  );
};

export default HeroSection;
