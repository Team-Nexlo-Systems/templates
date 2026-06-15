import Navbar from '/components/Navbar.jsx'
import Hero from '/components/Hero.jsx'
import Services from '/components/Services.jsx'
import Doctors from '/components/Doctors.jsx'
import Testimonials from '/components/Testimonials.jsx'
import Timings from '/components/Timings.jsx'
import Contact from '/components/Contact.jsx'
import Footer from '/components/Footer.jsx'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Doctors />
      <Testimonials />
      <Timings />
      <Contact />
      <Footer />
    </main>
  )
}
