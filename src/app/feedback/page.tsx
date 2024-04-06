'use client'
import { Article } from '../article'
import ScreenLayout  from '../components/screenlayout/page'
import { FormEvent, MouseEventHandler, useState } from 'react'

import { generateClient } from "aws-amplify/api";
import { createFeedback } from '../../graphql/mutations';
import config from '../../amplifyconfiguration.json';
import { Amplify} from 'aws-amplify';

Amplify.configure(config);

export default function SupportPage() {
  const [success, setSuccess] = useState(false)
  const [email,setEmail] = useState<string>();
  const [name,setName] = useState<string>();
  const [message, setMessage] = useState<string>();

  const client = generateClient()

  function handleClick(){
    setSuccess(true)
  }
   async function handleSubmit (event: FormEvent<HTMLFormElement>) {
    try {
      const formData = new FormData(event.currentTarget)
      const newFeedback = await client.graphql({
        query: createFeedback,
        variables: {
          input: {
            name: formData.get("name")?.toString(),
            email: formData.get("email")?.toString(),
            message: formData.get("message")?.toString()

          }
        }
      })
    } catch(error){
      console.log(error)
    }finally{
      //do nothing
    }
    
   }


  return (
    <ScreenLayout>
      <Article
        title="Feedback"
        imageAlt="Lorem Picsum"
        imageSrc="https://picsum.photos/420/640?grayscale"
      >
        <p>Tell us your thoughts you would like to see in our product.</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-medium leading-10" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
              id="name"
              name="name"
              type="text"
              value={name}
            />
          </div>
          <div>
            <label className="block text-lg font-medium leading-10" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
              id="email"
              name="email"
              type="email"
              value ={email}
            />
          </div>
          <div>
            <label className="block text-lg font-medium leading-10" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
              id="message"
              name="message"
              value={message}
            />
          </div>

          <button
            className="inline-flex text-black cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-teal-600 px-7 py-4 text-center font-medium leading-4 text-white no-underline"
            onClick={handleClick}
            type="submit"
          >
            Submit
          </button>

          {success && (
            <div className="mt-2 text-xs italic text-gray-500">
              🎉 Thank you, we will do our best to implement your feedback!
            </div>
          )}
        </form>
      </Article>
    </ScreenLayout>
  )
}