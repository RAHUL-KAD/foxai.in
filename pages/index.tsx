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
import Blog from "../components/Blog";

const Home: NextPage = () => {
  return (
    <div className="mx-auto flex max-w-full flex-col items-center justify-center py-2">
      <Head>
        <title>Sonicai | Speech to Text API </title>
        <link rel="icon" href="/favicon.ico" />
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

      <main className="md:mt-20 lg:mt-20 mt-5 ">


        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

            <h1 className="mb-4 text-4xl font-extrabold tracking-[0.012em] text-gray-900 md:text-5xl lg:text-7xl dark:text-white">Best Open Source</h1>
            <h1 className="mb-4 text-4xl font-extrabold tracking-[0.012em] text-[#FF6F1F] md:text-5xl lg:text-6xl dark:text-white">OpenAI Alternative</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            

          </div>
        </section>
      </main>

      {/* <Blog /> */}
      {/* <Testimonials /> */}
      {/* <Datasets /> */}
      {/* <Features1/> */}
      {/* <Solutions2 /> */}
      {/* <Features2 /> */}
      {/* <Solutions /> */}
      {/* <TabsTest /> */}
      {/* <Features  /> */}
      {/* <CallToAction /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
