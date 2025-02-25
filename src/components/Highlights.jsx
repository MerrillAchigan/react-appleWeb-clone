import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import {rightImg, watchImg} from '../utils'
import VideoCarousel from "./VideoCarousel"

const Highlights = () => {

  useGSAP(() => {
    gsap.to('#title',{
      opacity: 1,
      y:0
    })
    gsap.to('.link',{
      opacity: 1,
      y:0,
      duration:1,
      stagger:0.5
    })
  }, [])
  return (
    <section id="highlights" className="w-screen overflow-hidden common-padding bg-zinc-900">
    <div className="screen-max-width">
      <div className="mb-12 w-full flex flex-col md:flex-row items-center justify-between">
        {/* Title Section */}
        <h1 id="title" className="section-heading">Get the highlights.</h1>
  
        {/* Links Section */}
        <div className="flex flex-wrap items-center gap-5 mt-5 md:mt-0">
          <p className="link flex items-center">
            Watch the films
            <img src={watchImg} alt="watch" className="ml-2" />
          </p>
          <p className="link flex items-center">
            Watch the event
            <img src={rightImg} alt="right" className="ml-2" />
          </p>
        </div>
      </div>
      <VideoCarousel />
    </div>
  </section>
  )
}

export default Highlights