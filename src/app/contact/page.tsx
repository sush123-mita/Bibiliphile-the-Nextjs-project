import React from 'react'
import { Meteors } from "@/components/ui/meteors";
const page = () => {
  return (
    <div className="justify center mt-100 align-center items-center ml-100 w-1000 h-1000">
      <div className="relative  max-w-xl w-full">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl justify-center" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl justify center bg-center">
          <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
 
          <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
           Contact Us
          </h1>
 
          <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
           <input type="text" placeholder="Your name" />
          </p>
           <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
           <input type="text" placeholder="Your comment" draggable="true"/>
          </p>
 
          <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
            Submit
          </button>
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  )
}

export default page
