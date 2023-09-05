import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import Mission from '@/components/OurMission'
import JoinUs from '@/components/whynow'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection /> 
    <AboutSection/> 
    <Mission/>
    <JoinUs/>
    </>
    
  )
}
