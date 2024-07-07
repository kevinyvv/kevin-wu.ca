import React, {Fragment, useEffect, useState, useCallback } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { TypeAnimation } from "react-type-animation";
import ReadMoreReact from 'read-more-react';
import ReactTyped from "react-typed";
import { NavLink } from "react-router-dom";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";

import Projectcontainer from "./projectcontainer";
import mascot from '../mascot.png';
import memoir from './memoir.png';
import spotify from './spotify.png'
import cat from './cat.png'

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Me = () => {

  return(   
    <div className='mt-6 mx-auto w-2/3 min-h-fit text-sm md:text-lg lg:text-xl'>
    <div className="text-start">
      <p>Hi there, I'm Kevin. I'm a <span className="font-bold font-tnr italic cursor-pointer pr-1">Computer Science </span> student at the University of Waterloo. 
      Currently, I'm working as a Software Developer at Safuture.

      </p>
      <p className="my-6"> 
      <button className="font-bold font-tnr italic pr-1"
      onClick={()=> {}}>
         Welcome 
         </button> to my corner of the internet!</p>
    </div>

    <div className="text-start">
      <p> In terms of software, I've had the most experience with full-stack work.
        Recently though, I've been trying out game development, and I've been working on <span className="font-bold font-tnr italic cursor-pointer pr-1"> creating a game </span> with friends.
        You can check out some of my work below, and see my experiences on my <NavLink to="/Resume" className="font-bold font-tnr italic"> Resume </NavLink>.
      </p>
    </div>
  </div>
  
  )
}

const Projects = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return(   
    <div className="embla flex w-2/3 mx-auto">

    <button className="embla__prev xl:invisible" onClick={scrollPrev}>
        <FaChevronLeft />
      </button> 

    <div className="embla__viewport mt-[5svh]" ref={emblaRef}>
      <div className="embla__container space-x-4">
        <div className="embla__slide">
        <Projectcontainer 
        title='Memoir' 
        imag = {memoir} 
        description = "Social media app prototype connecting users through past memories." 
        link="https://github.com/kevinyvv/memoir"
        stack={['React', 'Flask', 'sci-kit']}
        />
        </div>
        <div className="embla__slide">
        <Projectcontainer 
        title='EmailManager' 
        imag = {mascot} 
        description = "Email app with spam-filter and the feature of creating and sending AI-generated responses."
        link="https://github.com/kevinyvv/Email-Manager"
        stack={['Next.js', 'Flask', 'PostgreSQL']}
        />
        </div>
        <div className="embla__slide pr-4">
        <Projectcontainer 
        title='Spotify Recs'
         imag = {spotify} 
         description = "Web app to generate Spotify recommendations on demand." 
         link="https://github.com/kevinyvv/spotify-react"
        stack={['React']}/>
        </div>

      </div>
    </div>

    <button className="embla__next xl:invisible" onClick={scrollNext}>
        <FaChevronRight/>
    </button>
    
    </div>
  )

}


const Hobbies = () => {
  return(   
    <div className='mt-6 mx-auto w-2/3 h-[50svh] text-sm md:text-lg lg:text-xl'>
    <div className="text-start">
      <p>Hi there, I'm Kevin. When I'm not coding, I like to do a variety of things in my spare time. 
      Recently, I've been trying to get better at running, relearning the piano, and climbing.
      If you have any helpful tips for improving at any of these, please let me know!
      
      </p>
      <p className="my-6">
        Apart from my current interests, I also like reading (<a target='_blank' href='https://myanimelist.net/mangalist/milkedchicken' className="font-bold font-tnr italic pr-1 -ml-1"> manga </a> and books), swimming, and going to the gym.
      </p>
      <p className="my-6">
        I've also played a lot of Supercell games  as a teen, and I'm about to 
        max out in <a target="_blank" href='https://link.clashofclans.com/en?action=OpenPlayerProfile&tag=8QGLL2JV0' className="font-bold font-tnr italic pr-1"> Clash of Clans. </a> I haven't had 
        as much time recently, but I used to play the other games as well (add my sc id @kingkevin)
      </p>
    </div>

    <div className="text-start">
      <p> 
        
      </p>
    </div>
      
    <div>
    </div>
  </div>
  )
}

const Self = () => {
  return(   
    <div className='mt-6 mx-auto w-2/3 h-[50svh] text-sm md:text-lg lg:text-xl'>
    <div className="text-center">
      <p>
        I'll probably add more to this section later.
      </p>
      <img
      src = {cat}
      className="mx-auto my-6"
      />
      <p className="">
      Thanks for visiting!
      </p>
    </div>
  </div>
  )

}


const More = () => {
    const [selected, setSelected] = useState("work")
    
    return(
        <section id='more' className="relative top-[10%]
        text-center mt-4 mb-6 md:mb-12 text-md sm:text-lg md:text-xl dark:text-white">
          <div className="flex justify-center h-min">
            <p className="font-bold"> about my &nbsp; </p>

            <button
              className={`mr-3 md:mr-6 ${selected === "work" ? "font-bold" : "opacity-30"}`}
              onClick={() => setSelected("work")}
            >
              work
            </button>
            <button
              className={`mr-3 md:mr-6 ${selected === "hobbies" ? "font-bold" : "opacity-30"}`}
              onClick={() => setSelected("hobbies")}
            >
              hobbies
            </button>
            <button
              className={`mr-3 md:mr-6 ${selected === "self" ? "font-bold" : "opacity-30"}`}
              onClick={() => setSelected("self")}
            >
              self
            </button>
          </div>
          <div className="flex: justify-center align-center backdrop-blur-sm">
                {selected === "work" ? 
                  <div className="h-fit">
                    <Me/>
                    <Projects/>
                   </div>
                  : "" }
                {selected === "hobbies" ? <Hobbies/> :"" }
                {selected === "self" ? <Self/> :"" }
                {selected === null ? "" :"" }
          </div>
        </section>
    )
}

export default More