"use client"
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials= [
    {
      "quote": "This book completely changed the way I see storytelling. The writing is immersive and the characters feel real.",
      "name": "Aarav Sharma",
      "title": "Software Engineer"
    },
    {
      "quote": "An emotional rollercoaster that kept me hooked till the last page. The blend of classic and modern themes is beautifully done.",
      "name": "Meera Kapoor",
      "title": "Literature Student"
    },
    {
      "quote": "A perfect read for weekends. The romance and tragedy balance makes it unforgettable.",
      "name": "Rohan Malhotra",
      "title": "Entrepreneur"
    },
    {
      "quote": "The narrative style is unique and fresh. Each chapter leaves you wanting more. This book is going straight into my favorites list.",
      "name": "Priya Nair",
      "title": "Book Blogger"
    }
  ]


const Testcard = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex felx-col items-center justify-center overflow-hidden ">
      <h2 className="text-3xl font-bold text-center z-10 mb:10">Hear Our amazing of success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
         <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      </div>
      </div>
    </div>
  )
}

export default Testcard
