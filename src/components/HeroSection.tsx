import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import {Button} from "./ui/moving-border"


const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
       <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
     <div className="p-4 relative z-10 w-full text-center">

      <h1 className="mt-20 md:mt-0  text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Curated journey Through Literature</h1>

      <p 
      className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Welcome to your sanctury of stories ,where each takes you to your imagination .. Escape reality with us !!</p>

      <div className="mt-8 ">
        <Link href={"/courses"}>
        <Button>Explore Courses</Button>
        </Link>
      </div>
     </div>
    </div>
  )
}

export default HeroSection
