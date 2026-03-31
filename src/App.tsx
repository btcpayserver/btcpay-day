import Navbar from '@/components/Navbar'
import StickyBar from '@/components/StickyBar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Speakers from '@/components/Speakers'
import Agenda from '@/components/Agenda'
import Location from '@/components/Location'
import Supporters from '@/components/Supporters'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <StickyBar />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Agenda />
        <Location />
        <Supporters />
      </main>
      <Footer />
    </>
  )
}
