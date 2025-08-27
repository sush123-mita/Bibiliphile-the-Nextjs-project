import FeaturedCourses from "@/components/DefinedBooks";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";


import Testcard from "@/components/Testcard";
import Upcomingwebinars from "@/components/Upcomingwebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-3xl text-center p-5 font-bold">BiBiliophile</h1>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <Testcard/>
      <Upcomingwebinars/>
     <Instructors/>
     <Footer/>
     

    </main>
  );
}
