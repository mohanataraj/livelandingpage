/* eslint-disable react/jsx-no-comment-textnodes */
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

import {Button,Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,Typography,Input,Navbar,
  MobileNav }  from "@material-tailwind/react";

Amplify.configure(config);

const client = generateClient();

export default function Home() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [email,setEmail] = useState<string | null>()
 
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);

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
      setIsLoading(true)
      handleOpen()
    }
  }

  return (

   
    <main>

    <header className="absolute z-50 w-full left-0 top-0">

    <div className="container"> 
        <nav className="bg-white py-2.5 dark:bg-white">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="#" className="flex items-center px-4">
                    <img src="/logo_temp.svg" className="h-6 mr-3 sm:h-9" alt="Live Logo" />
                    <span className="self-center italics font-mono text-black text-xl font-semibold whitespace-nowrap dark:text-black">LIVE</span>
                </a>
                <div className="flex flex-wrap items-center lg:order-2">
                  <a href="https://www.figma.com/proto/t0Ox1a9UnJU4VKUQkWK846/Live-auto-insurance-prototype?page-id=0%3A1&type=design&node-id=1-3&viewport=114%2C125%2C0.16&t=G08BDM6VndWg33tb-1&scaling=scale-down&starting-point-node-id=1%3A3&mode=design" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-800 font-semibold">Prototype</a>
                  <a href="#" className="text-blue-gray-800 font-semibold" onClick={handleOpen}>Enroll</a>

      <>
      <Dialog open={open} handler={handleOpen}>
      <form onSubmit={onSubmit}>
        <DialogHeader>Enroll Now</DialogHeader>
        <DialogBody>
       
        <Typography className="mb-4" variant="h6">
              Your Email 
            </Typography>
            <Input label="Email" size="lg" type="email" name="email" placeholder="email@example.com" onChange={(e)=>{setEmail(e.target.value)}} />
          
       
       
        </DialogBody>
        <DialogFooter>
        <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="blue" type="submit">
            <span>Submit</span>
          </Button>
          
        </DialogFooter>
        </form>
      </Dialog>
      
    </>
                </div>
            </div>
        </nav>
      </div>
    </header>
  
   

    <section className="bg-white dark:bg-white relative pt-[120px] lg:pt-[15px] pb-[11px]">
        <div className="grid max-w-screen-xl px-4  pb-8 sm:grid-cols-1 sm:mt-3 md:grid-cols-1 md:m-10 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
            <div className="mr-auto lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold text-blue-700 leading-none tracking-tight  md:p-5 md:text-5xl xl:text-6xl dark:text-blue-700">We drive with <br />you & your family.</h1>
                <p className="max-w-2xl mb-6 font-regular text-blue-gray-800 md:p-5 lg:mb-8 md:text-lg lg:text-lg dark:text-zinc-700"> We at Live are building next generation auto insurance and live traffic view infrastructure. <br /> &emsp; 
                With our computer vision based A.I. models we have quicker evidence based automated claim process and real-time updates for maps.
                </p>
                
                    <div className="flex flex-row">
                    <Button onClick={handleOpen} className="m-2" variant="gradient">
                    Enroll Now
                    </Button> 
          
                    </div>
              
            </div>
            <div className="overflow-auto sm:overflow-visible  sm:pl-3 lg:mt-0 lg:col-span-5 lg:flex">
              <video className="h-full w-full rounded-lg aspectVideo" controls autoPlay>
                 <source src ="/videos/livevid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div> 
                          
        </div>
    </section>

      
     
      
    </main>
    
  );
}


