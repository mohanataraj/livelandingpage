'use client'
import { Amplify} from 'aws-amplify';
import awsExports from '../../../aws-exports'; // The path may vary
import { generateClient } from 'aws-amplify/api';
import config from '../../../amplifyconfiguration.json';
import { createSignup } from "@/graphql/mutations";
import { CreateSignupMutation } from "@/API";
import DialogForm from "../dialogform/page";

import { useState, FormEvent, ChangeEvent, ChangeEventHandler } from 'react';

Amplify.configure(config);

const client = generateClient();

export default function SignupForm() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [email,setEmail] = useState<string>()
  const [open,setOpen] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
 
  const handleClick = () => {
    setOpen(true)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
      setEmail(" ")
      setIsLoading(true)
      setSuccess(true)
    }
  }
  return (
    <form
    onSubmit={handleSubmit}
    className=" is-revealing flex flex-col gap-2 sm:flex-row"
  >
    <div className="mr-2 flex-shrink flex-grow">
      <label className="hidden" htmlFor="email" aria-hidden="true">
        Email
      </label>
      <input
        required
        placeholder="Your best email&hellip;"
        id="email"
        name="email"
        type="email"
        value={email}
  
        autoComplete="off"
        className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
      />
      {success && (
        <div className="mt-2 text-xs italic text-[#f43f5e]">Email submitted successfully!</div>
      )}
    </div>

    <div className="control">
      <button
        className="-mt-px bg-gradient-to-r from-[#ec4899] to-[#f43f5e] focus:accent-[#50d71e] inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0  px-7 py-4 text-center font-medium leading-4 text-white no-underline"
        type="submit" onClick={handleClick}
      >
        Get Early Access
      </button>
    </div>
  </form>
  )
}