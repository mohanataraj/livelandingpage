'use client'
import { Article } from '../article'
import ScreenLayout  from '../components/screenlayout/page'

export default function ContactPage() {
  return (
    <><ScreenLayout /><Article
      title="Contact"
      imageAlt="Lorem Picsum"
      imageSrc="https://picsum.photos/420/640?grayscale"
    >
      If you would like to request any information or support regarding our product, journey
      or update and your information. Please send us an email at <a href="mailto:contact@liveinsurance.app" className='text-blue-400'>contact@liveinsurance.app</a>
    </Article></>
  
  )
}