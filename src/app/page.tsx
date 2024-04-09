/* eslint-disable react/jsx-no-comment-textnodes */
'use client'


import Image from "next/image";

import Link from "next/link";
import React, { useState, FormEvent } from 'react'
//mport { generateClient } from "aws-amplify/api";
import SignupForm from "./components/signupform/page"
import NavigationHeader from "./components/navigation/page";

export default function Home (){
  return (

   
  <main>
    <NavigationHeader />
    <section className="bg-white dark:bg-white relative pt-[120px] lg:pt-[15px] pb-[11px]">
        <div className="grid max-w-screen-xl px-4  pb-8 sm:grid-cols-1 sm:mt-3 md:grid-cols-1 md:m-10 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
            <div className="mr-auto lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] inline-block text-transparent bg-clip-text leading-none tracking-tight  md:p-5 md:text-5xl xl:text-6xl dark:text-blue-700">We drive with <br />you & your family.</h1>
                <p className="max-w-2xl mb-6 font-regular text-blue-gray-800 md:p-5 lg:mb-8 md:text-lg lg:text-lg dark:text-zinc-700"> We at Live are building next generation auto insurance and real-time traffic view infrastructure that updates maps in real-time. <br /> &emsp; 
                Join us on our journey.
                </p>
                
                <SignupForm />
              
            </div>
            <div className="overflow-auto sm:overflow-visible mt-3  sm:pl-3 lg:mt-0 lg:col-span-5 lg:flex">
              <video className="h-full w-full rounded-lg aspectVideo" controls autoPlay>
                 <source src ="/videos/live_vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div> 
                          
        </div>
    </section>

      
     
      
    </main>
    
  );
}


