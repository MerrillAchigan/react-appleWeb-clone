import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Navbar from "./components/Navbar"
import Features from "./components/Features"
import HowItWork from "./components/HowItWork"
import Footer from "./components/Footer"

const App = () => {
  
  return (
  <main className="bg-black min-h-screen w-full">
    <Navbar />
    <Hero />
    <Highlights />
    <Model />
    <Features />
    <HowItWork />
    <Footer />
  </main>
  )
}

export default App
