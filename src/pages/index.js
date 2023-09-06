import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import Mission from '@/components/OurMission'
import JoinUs from '@/components/whynow'
import EventDetails from '@/components/Eventdetails'
import EventHighlights from '@/components/EventHighlights'
import Gifts from '@/components/Gifts'
import Donate from '@/components/Donate'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection /> 
    <AboutSection/> 
    <Mission/>
    <JoinUs/>
    <EventDetails/>
    <EventHighlights/>
    <Gifts/>
    <Donate/>
    </>
    
  )
}
