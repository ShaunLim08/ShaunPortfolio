import React from "react";
import TypeWriter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import Head from "next/head";

const HeroSection = () => {
  return (
    <main className="py-16 mt-16 md-flex md:shrink-0 ">
      <Head>
        <link rel="icon" href="/potato.png" sizes="any" />
        <title>Shaun's Personal Website</title>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-12 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-8 place-self-center justify-self-start"
          >
            <h1 className="font-extrabold">
              {/* span text seperator -- for design*/}
              <span className="text-white text-8xl ">
                Hello, I'm{" "} 
                <span className="text-transparent bg-clip-text sm:text-8xl md:text-9xl bg-gradient-to-r from-red-500 from-10% via-orange-500 via-30% to-yellow-500 to-90%">
                Shaun
                </span>
              </span>
              <br></br>
              <span className="text-7xl">I'm a
              <TypeWriter
                options={{
                    autoStart: true,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter
                    .typeString`<span style="color:#FC3C36">CS Student</span>`
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString`<span style="color:#FA3805">Developer</span>`
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString`<span style="color:#F8EB07">Web3 Contributor</span>`
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
              ></TypeWriter>
              </span>
            </h1>
            <p className="text-gray-300 pt-8 text-base sm:text-lg mb-6 lg:text-xl">
              Scroll down to learn more about me!
            </p>
              <Link
                href="#projects" 
                className="px-12 mb-4 inline-block py-3 rounded-full mr-4 border-solid border-2 border-red-600 hover:bg-yellow-600">
                <span className="text-xl text-white">Jump to Projects</span>
              </Link>
             
              <Link
                href ="https://drive.google.com/file/d/1SGGXwvWY7Qw2Iuo4iAi30S27vERDUlQw/view?usp=drive_link" target="_blank" 
                className="px-6 inline-block py-3 rounded-full mr-4 border-solid border-2  border-yellow-600 hover:bg-red-600">
                <span className="text-xl text-white">View my Resume</span>
              </Link>
          </motion.div>
        <div className="col-span-4 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-0 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
          <div className="w-[400px] h-[400px] relative z-0">
            <img
              src="/shaun vertical.JPG"
              alt="shaun pic"
              className=" transform rounded-full flex relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={350}
              height={350}
            />
          </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default dynamic(() => Promise.resolve(HeroSection), {ssr: false});