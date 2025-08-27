'use client'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip';

const instructors = [
  {
    id: 1,
    name: 'Dr. Ananya Kapoor',
    designation: 'Literature Mentor',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 2,
    name: 'Prof. Michael Harris',
    designation: 'Digital Library Specialist',
    image:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 3,
    name: 'Sushmita Singh',
    designation: 'Poetry & Wellness Guide',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 4,
    name: 'Elena Briggs',
    designation: 'Book Critic & Reviewer',
    image:
      'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
  }
];

const Instructors = () => {
  return (
    <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
     <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
      <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Meet Out Instructors</h2>
      <p className=' text-base md:text-lg text-white text-center mb-4'>Discover the talented professionals who will guide you</p>
      <div className=' flex flex-row justify-center items-center mb-10 w-full'><AnimatedTooltip items={instructors}/></div>
     </WavyBackground>

    </div>
  )
}

export default Instructors
