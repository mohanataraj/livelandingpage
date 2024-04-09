'use client'
import {useState} from "react"
import {Button,Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,Typography,Input,Navbar,
    MobileNav }  from "@material-tailwind/react";
import Link from "next/link";



export default function NavigationHeader (){

    const [open, setOpen] = useState(false);
 
    const handleOpen = () => setOpen(!open);
    const [isOpen, setIsOpen] = useState(false);



    return(

<header className="absolute z-50 w-full left-0 top-0">

    <div className="container"> 
        <nav className="bg-white justify-between flex-wrap py-3 dark:bg-white">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="/" className="flex items-center">
                    <img src="/logo_temp.svg" className="h-6 mr-3 sm:h-9" alt="Live Logo" />
                    <span className="self-center italics font-mono text-black text-xl font-semibold whitespace-nowrap dark:text-black">LIVE</span>
                </a>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
                    <div className="flex md:flex-shrink items-center lg:order-2">
                        
                        <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">About</Link>
                        
                        <Link href="/feedback" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">Feedback</Link>
                        
                        <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">Contact</Link>
                        
                        <Link href="https://www.figma.com/proto/t0Ox1a9UnJU4VKUQkWK846/Live-auto-insurance-prototype?page-id=0%3A1&type=design&node-id=1-3&viewport=114%2C125%2C0.16&t=G08BDM6VndWg33tb-1&scaling=scale-down&starting-point-node-id=1%3A3&mode=design" target="_blank" rel="noopener noreferrer" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">Prototype</Link>
                        
                    </div>
            </div>
        </div>
    </nav>
  </div>
</header>

)} 