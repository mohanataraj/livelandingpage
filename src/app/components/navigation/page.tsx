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



    return(

<header className="absolute z-50 w-full left-0 top-0">

    <div className="container"> 
        <nav className="bg-white py-2.5 dark:bg-white">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="#" className="flex items-center px-4">
                    <img src="/logo_temp.svg" className="h-6 mr-3 sm:h-9" alt="Live Logo" />
                    <span className="self-center italics font-mono text-black text-xl font-semibold whitespace-nowrap dark:text-black">LIVE</span>
                </a>
                <div className="flex flex-row md:flex-shrink items-center lg:order-2">
                
                <Link href="/about" className="p-1">About</Link>
                <Link href="/feedback" className="p-1">Feedback</Link>
                <Link href="/contact" className="p-1">Contact</Link>
                <Link href="https://www.figma.com/proto/t0Ox1a9UnJU4VKUQkWK846/Live-auto-insurance-prototype?page-id=0%3A1&type=design&node-id=1-3&viewport=114%2C125%2C0.16&t=G08BDM6VndWg33tb-1&scaling=scale-down&starting-point-node-id=1%3A3&mode=design" target="_blank" rel="noopener noreferrer" className="p-1">Prototype</Link>

            </div>
        </div>
    </nav>
  </div>
</header>

)} 