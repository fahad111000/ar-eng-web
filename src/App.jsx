import Navbar from "./components/layout/navbar"
import Footer from "./components/layout/footer"
import Hero from "./components/sections/hero"
import Services from "./components/sections/services"
import Commitment from "./components/sections/commitment"
import Contact from "./components/sections/contact"
import WhatsAppButton from "./components/common/whatsAppButton"

export default function App() {
  return <>
  <WhatsAppButton />
    <Navbar />
    <Hero />
    <Services />
    <Commitment />
    <Contact />
    <Footer />
  </>
}