'use client'


import Image from "next/image";

import Link from "next/link";
import React, { useState, FormEvent } from 'react'
//mport { generateClient } from "aws-amplify/api";
import { Amplify} from 'aws-amplify';
import awsExports from '../aws-exports'; // The path may vary
import { generateClient } from 'aws-amplify/api';
import config from '../amplifyconfiguration.json';
import { createSignup } from "@/graphql/mutations";
import { CreateSignupMutation } from "@/API";
Amplify.configure(config);

const client = generateClient();

export default function Home() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [email,setEmail] = useState<string | null>()
 
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts

    try {
      const formData = new FormData(event.currentTarget)
      console.log("Form Data", formData.get("email"))
      // const response = await fetch('/api/submit', {
      //   method: 'POST',
      //   body: formData,
      // })
      const data = {
          email : formData.get("email")
      }
     const result = await client.graphql({
      query:createSignup,
      variables:{
        input:{
           email: formData.get("email")?.toString()
        }
      }

     })
      // if (!response.ok) {
      //   throw new Error('Failed to submit the data. Please try again.')
      // }
 
      // Handle response if necessary
      //const data = await response.json()
      // ...
    } catch (error) {
      // Capture the error message to display to the user
     // setError(error.message:string)
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (

   
    <main>

      <header className="h-3  pt-0 w-full">
        <nav className="bg-white py-2.5 dark:bg-white">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="#" className="flex items-center px-4">
                    <img src="/logo_temp.svg" className="h-6 mr-3 sm:h-9" alt="Live Logo" />
                    <span className="self-center font-mono text-xl font-semibold whitespace-nowrap dark:text-black">LIVE</span>
                </a>
                <div className="flex items-center lg:order-2">

                    <a href="#signup-section" className="text-black font-mono font-semibold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 ">Sign Up</a>
                </div>
            </div>
        </nav>
        
    </header>
  
   

    <section className="mt-4 bg-white dark:bg-white h-dvh">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 sm:grid-cols-1 sm:mt-3 md:grid-cols-1 md:m-10 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 place-content-center">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:p-5 md:text-5xl xl:text-6xl dark:text-blue-700">We drive with <br />you & your family.</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 md:p-5 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-700"> &emsp; We at Live are building next generation auto insurance and live traffic view infrastructure. <br /> &emsp; We provide
                auto insurance with computer vision based A.I. models for quicker evidence based claim process and real-time updates for maps.
                </p>
                <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 md:pb-10">
                    <a href="#signup-section" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white rounded-lg sm:w-auto hover:bg-purple-400 focus:ring-4 focus:ring-purple-100 dark:text-white dark:bg-blue-800 dark:border-blue-700 dark:hover:bg-blue-600 dark:focus:ring-blue-600/30">
                      Sign Up
                    </a> 
                    <Link href="#experience-section" scroll={true} className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-blue-400 bg-white border border-yellow-400 rounded-lg sm:w-auto focus:outline-none hover:bg-yellow-100 hover:text-blue-400 focus:z-10 focus:ring-4 focus:ring-yellow-200 dark:focus:ring-yellow-400 dark:bg-white dark:text-blue-700 dark:border-white dark:hover:text-white dark:hover:bg-yellow-400">
                           Learn more
                    </Link>
                </div>
            </div>
            <div className=" pl-16 sm:pl-3 lg:mt-0 lg:col-span-5 lg:flex">
                <img src="/images/insurance.gif" width={190} alt="hero image"/>
            </div>                
        </div>
    </section>

      <section id="experience-section" className="pt-20 pb-8 w-full flex min-h-screen flex-col items-center justify-between bg-yellow-400">
      <p className="mb-3 text-xl text-black font-semibold font-2xl">
        Experience Our App{" "}
          </p>
          <p>Use this app and let us know your experience</p>
        <div className="flex place-items-center">
        <iframe className="flex" style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Ft0Ox1a9UnJU4VKUQkWK846%2FLive-auto-insurance-prototype%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-3%26viewport%3D111%252C132%252C0.15%26t%3DJNmFciG2qplawXyZ-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A3%26mode%3Ddesign" allowFullScreen></iframe>
        </div>
      </section>
      <section id="signup-section" className="pb-8 w-full flex flex-col items-center justify-between bg-blue-800">
        <p className="m-10 text-4xl text-white font-semibold"> Sign Up</p>

      <form onSubmit={onSubmit}>
        <label className="text-2xl text-white">Email </label>
        <input className="w-80 h-10 p-2 text-black place-items-ce" id="email" type="email" name="email" placeholder="email@example.com" onChange={(e)=>{setEmail(e.target.value)}} />
        <button className="ml-10 text-white bg-yellow-400 px-4 py-3 rounded-lg" type="submit">Submit</button>
      </form>
      </section>
    </main>
    
  );
}
