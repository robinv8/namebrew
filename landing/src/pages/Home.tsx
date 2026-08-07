import Nav from '../sections/Nav'
import Hero from '../sections/Hero'
import Why from '../sections/Why'
import Example from '../sections/Example'
import Process from '../sections/Process'
import Schools from '../sections/Schools'
import Principles from '../sections/Principles'
import Install from '../sections/Install'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Why />
        <Example />
        <Process />
        <Schools />
        <Principles />
        <Install />
      </main>
      <Footer />
    </div>
  )
}
