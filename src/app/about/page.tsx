
//import { Carousel } from "@material-tailwind/react";
"use client"
import Link from 'next/link'
import { Article } from '../article'
import ScreenLayout  from '../components/screenlayout/page'

function AboutPage() {
  return (
   <><ScreenLayout /> <Article
          title="About"
          imageAlt="Lorem Picsum"
          imageSrc="https://picsum.photos/420/640?grayscale"
      >
          {/* prettier-ignore */}
        <p>Welcome, get to know more us. </p>
        <details
          className="mt-4 block rounded-sm border px-4 open:border-primary-400 hover:border-primary-300"
          open
        >
          <summary className="-mx-4 cursor-pointer border-primary-200 px-4 py-3">
            What is Live Insurance?
          </summary>
          <p>
            We are a tech company providing low cost auto insurance to customers with helping them create their
            own policies with a click of few buttons. We are also building real-time traffic 
            view and real-time automated updates on maps using computer vision algorithms,these algorithms also helps us 
            to automate the claim process with no intervention in the future. {' '}
            
          </p>
          <p>
            We have several other services and use cases in broader prospective. For example, partnering with 
            car manufactures for connected cars with embeded cameras, our solution can call in the necessary 
            services in case of emergency with zero or no intervention. 
          </p>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">How far are we in building our app</summary>
          <p>
            We are still at the early phases, performing go to market/ market testing to see if users are
            find value in our product and want our service. We are starting with phone and expanding into connected cars.
          </p>
          <p>
            Feel free to give your feedback of our concept <Link href="/feedback" ><span className='text-[#2563eb]'>Feedback</span></Link>
          </p>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">Can I get early access ?</summary>
          <p>
            <span className='text-[#2563eb]'><Link href="/">Sign Up</Link> </span>from our main page to get our product earlier than the rest.
          </p>
        </details>
      </Article>
      </>
    
  )
}

export default AboutPage

// export default function Page(){
//     return (
//     <section className="pt-5  w-full flex min-h-screen flex-col items-center md:flex-col">
//         <div className="grid max-w-screen-xl px-4  pb-8 sm:grid-cols-1 sm:mt-3 md:grid-cols-1 md:m-10 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 "><h2 className="text-4xl font-extrabold text-black leading-none tracking-tight">About</h2></div>
//         <div className="flex flex-row-reverse">
            
//             <div>
//                 <img src="/images/phone_one.png" className="h-auto h-auto" alt="Live Logo"/>
//             </div>
//             <div>
//             <p className="text-mono text-regular text-xl m-3 text-blue-gray-700"> <br/> <br/> <br/><br/> &nbsp; We at Live are building next generation Computer Vision AI models to 
//                     automate the claim process even without a touch of a button, we are focusing 
//                     on building A.I. models that detect your crash and perform the necessary steps 
//                     automatically. <br /> &nbsp;
//                     Our model also detects incidents on roads, traffic patterns and other events to automatically
//                     update users and maps in real-time, so you are well informed to take a better decision and save time to reach your destination.
//                 </p>
//             </div>
//         </div>
//     </section>) 
// }