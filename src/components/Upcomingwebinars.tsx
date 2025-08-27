import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

const Upcomingwebinars = () => {
  const featuredWebinars = [
  {
    id: 1,
    title: "The Art of Storytelling in Modern Literature",
    speaker: "Dr. Ananya Kapoor",
    description:
      "Discover how contemporary authors weave narratives that resonate with readers across cultures and generations.",
    date: "2025-09-10",
    time: "6:00 PM IST",
    duration: "1h 30m",
    category: "Literature",
    registrationLink: "https://example.com/webinar/storytelling",
    
  },
  {
    id: 2,
    title: "Digital Libraries & The Future of Reading",
    speaker: "Prof. Michael Harris",
    description:
      "A deep dive into how technology is reshaping access to books, archives, and research materials for the next generation.",
    date: "2025-09-15",
    time: "8:00 PM IST",
    duration: "1h",
    category: "Technology in Literature",
    registrationLink: "https://example.com/webinar/digital-libraries",
  },
  {
    id: 3,
    title: "Poetry That Heals: Writing for Mental Wellness",
    speaker: "Sushmita Singh",
    description:
      "An engaging session exploring how poetry and self-expression can be powerful tools for healing and mental clarity.",
    date: "2025-09-20",
    time: "5:30 PM IST",
    duration: "2h",
    category: "Poetry & Wellness",
    registrationLink: "https://example.com/webinar/poetry-healing",

  },
];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Webinars</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhanced Literature Journey</p>
        </div>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={featuredWebinars.map(webinar=>(
            {
              title:webinar.title,
              description:webinar.description,
              link:"/"
            }
          ))}/>
        </div>
        <div className="mt-10 text-center">
          <Link href={"/"} 
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">View all Webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Upcomingwebinars
