
//import { Carousel } from "@material-tailwind/react";
"use client"
import { Article } from '../article'
import ScreenLayout  from '../components/screenlayout/page'

function AboutPage() {
  return (
   <><ScreenLayout> <Article
          title="About"
          imageAlt="Lorem Picsum"
          imageSrc="https://picsum.photos/420/640?grayscale"
      >
          {/* prettier-ignore */}
          <p>
              Holly is a free HTML/CSS landing page designed and developed by <a href="https://twitter.com/pacovitiello">@pacovitiello</a> and <a href="https://twitter.com/DavidePacilio">@DavidePacilio</a>!
          </p>
          <p>
              Holly is suitable for all kind of startups, its easily customizable, and its
              downloadable for personal and commercial use.
          </p>
          <p>This template is distributed under the MIT License.</p>
      </Article>
      </ScreenLayout></>
    
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