"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

 
const bookcontent = [
  {
    title: "The Great Gatsby",
    description:"A timeless novel set in the Roaring Twenties, exploring themes of love, wealth, and the elusive American Dream through the tragic story of Jay Gatsby.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "To Kill a Mockingbird",
    description:
       "Harper Lee’s classic that tackles racial injustice and moral growth in the American South, seen through the innocent eyes of Scout Finch.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Pride and Prejudice",
    description:
      "Jane Austen’s witty and romantic novel about love, class, and societal expectations, centered on the spirited Elizabeth Bennet and the proud Mr. Darcy.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
    {
    title: "1984",
    description:
      "George Orwell’s dystopian masterpiece depicting a chilling world of surveillance, totalitarianism, and the fight for individuality against oppressive power.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
        1984
      </div>
    ),
  },
]
function WhyChooseUs(){
  return (
    <div>
      <StickyScroll content={bookcontent}/>
    </div>
  )
}

export default WhyChooseUs
