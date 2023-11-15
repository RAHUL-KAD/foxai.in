import React, { lazy } from "react";

import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Datasets from "../components/datasets";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Solutions from "../components/Solutions";
import TabsTest from "../components/TabsTest";
import Features from "../components/Features";
import Features1 from "../components/Features1";
import Features2 from "../components/Features2";
import { Badge } from "../components/Badge";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import Solutions2 from "../components/Solutions2";
import Compare from "../components/Compare";

const Home: NextPage = () => {
  return (
    <div className="mx-auto flex max-w-full flex-col items-center justify-center py-2">
      <Head>
        <title>Sonicai | Speech to Text API </title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <svg className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>

      <Header />
      <main className="mt-10 grid sm:max-w-7xl gap-x-40 px-4 sm:ml-40 sm:mt-10 sm:grid-cols-2">
        <div className="mt-10 sm:mt-16">
          {/* <Badge text={"Try our GenAI solution for Contact Center"} /> */}
          <h1 className="font-display mx-auto max-w-4xl text-4xl font-bold sm:text-left text-center tracking-normal text-slate-900 sm:text-5xl">
            <span className="relative whitespace-nowrap text-[#333]">
              <span className="relative mr-2">Most Accurate STT</span>
            </span>
          </h1>

          <h1 className="font-display relative whitespace-nowrap sm:text-left text-center mx-auto lg:mt-4 max-w-4xl text-4xl font-bold tracking-normal text-[#333] sm:mt-2 sm:text-5xl">
          Powered by Whisper
          </h1>

          <p className="mx-auto mt-5 text-center md:text-left sm:text-xl text-lg leading-7 text-[#333] sm:mt-5 whitespace-wrap">
          {/* Transform contact center customer experience with generative AI. */}
          Get access to the state of the art Speech to Text API.
          </p>

          {/* <div className=" grid-cols-3 mt-3 w-full md:w-[55%] lg:w-full mx-auto">
        </div>  */}

          <div className="flex space-x-4 mt-5 flex-row justify-center sm:justify-start items-center">

            <div className="relative inline-flex group mt-6">
                <div
                    className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>
                <a href="https://tally.so/r/m6e6EA"
                    className="relative inline-flex items-center justify-center px-6 py-3 sm:text-base text-sm font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button">Join the waiting list &nbsp; 🤗
                </a>
            </div>

            {/* <div className="relative inline-flex group mt-6">
                <a href="https://tally.so/r/m6e6EA" target="_blank"
              rel="noopener noreferrer" title="Get quote now"
                    className="relative inline-flex items-center justify-center px-6 py-3 sm:text-base text-sm font-bold text-white transition-all duration-200 bg-[#6a32ee] font-pj rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
                    role="button">Contact Us
                </a>
            </div> */}

            {/* <Link
              className="mt-7 inline-flex items-center justify-center rounded-xl border-2 bg-[#6a32ee] px-6 py-3 text-center font-medium text-white duration-200 hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
              href="https://tally.so/r/m6e6EA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </Link> */}

            {/* <Link
              className="mt-7 inline-flex items-center justify-center rounded-xl border-2 bg-[#6a32ee] px-6 py-3 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
              href="/playground"
            >
              Try it for yourself
            </Link> */}
          </div>

          {/* <li className="mt-5 ml-2">commercial use &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •  GDPR compliance  </li> */}
        </div>
        

        <div >

          <video
            src="https://uploads-ssl.webflow.com/62fa8255a7287e714931a2ad/62fa85a47f6f589559851bfc_web_white-transcode.mp4"
            width="100%"
            height="auto"
            autoPlay
            loop
            muted
            playsInline
            className="mt-10"
          ></video>

        </div>
      </main>
      
      <Compare />
      {/* <Testimonials /> */}
      {/* <Datasets /> */}
      {/* <Features1/> */}
      {/* <Solutions2 /> */}
      {/* <Features2 /> */}
      {/* <Solutions /> */}
      {/* <TabsTest /> */}
      {/* <Features  /> */}
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
