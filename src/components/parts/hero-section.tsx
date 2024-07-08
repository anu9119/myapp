"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import { sendGAEvent } from '@next/third-parties/google'

export function HeroSection() {

  const dlFile = async () => {
    const response = await fetch('https://api.dataelevation.dev/api/dl/resume/EN')
    if (response.ok) {
      sendGAEvent({
        event: 'dlCVSuccess',
        value: 'success'
      })
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'CV Sacha Choumiloff.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } else {
      sendGAEvent({
        event: 'dlCVError',
        value: 'error'
      })
      toast({
        variant: "destructive",
        title: "Download failed",
        description: "Please try again later."
      })
    }
  }


  return (
    <section>
      <div className="container mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-primary text-left mb-4 text-2xl sm:text-4xl lg:text-8xl lg:leading-normal font-extrabold">
            Hello, I&apos;m
            <br></br>
            <TypeAnimation
              sequence={[
                "Sacha",
                1000,
                "Data engineer",
                1000,
                "Moutain man",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="dark:text-secondary text-secondary-foreground text-1xl sm:text-lg mb-6 lg:text-2xl font-bold">
            Data Engineer with a passion for the mountains
          </p>
          <p className="text-base sm:text-lg mb-6 lg:text-xl">
            I&apos;m Sacha, a dedicated data engineer on a mission to scale new
            heights, both in the datas and heights peaks. By day, I'm helping 
             <Link href={"https://www.la-forge.ai/"} className="font-bold text-secondary-foreground hover:text-secondary-foreground/50 dark:text-secondary dark:hover:text-secondary/50"> La Forge </Link> navigate the data currents. By weekends, you'll find me
            conquering mountain peaks and exploring the world from a different
            perspective.
          </p>

          <div className="flex flex-col space-y-4 items-center sm:space-x-4 sm:space-y-0 sm:flex-row">
            <Button variant={"foreground"} className="w-48 py-2 px-4" ><Link href={"#contact"}>Get in touch</Link></Button>
            <Button className="w-48 py-2 px-4" onClick={() => dlFile()}>CV</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
