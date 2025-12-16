import BegleiteUns from "./components/BegleiteUns"
import Contact from "./components/contact"
import Gemeinschaft from "./components/Gemeinschaft"
import Goenner from "./components/Goenner"
import Hero from "./components/Hero"
import Partners from "./components/Partners"
import PassedEvents from "./components/PassedEvents"
import Whatsapp from "./components/Whatsapp"

const Home = () => {
  
  return (
    <main className="mt-20">
        <Hero />
        <PassedEvents />
        <Goenner />
        <Whatsapp />
        <BegleiteUns />
        <Gemeinschaft />
        <Partners />
        <Contact />
    </main>
  )
}

export default Home
