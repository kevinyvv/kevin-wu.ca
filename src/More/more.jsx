import React, {Fragment, useEffect, useState, useCallback, useRef } from "react";
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
import memoir from './Images/memoir.png';
import memoirxl from './Images/memoirxl.png';
import spotify from './Images/spotify.png';
import spotifyxl from "./Images/spotifyxl.png";
import cat from './Images/cat.png';
import emxl from './Images/emailmanagerxl.jpg';
import git from './Images/gitinsights.png';
import gitxl from './Images/gitinsightsxl.png';
import coc from './Images/clashofclans.png';

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Me = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showImage, setShowImage] = useState(false);
  const containerRef = useRef(null); 

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.pageX;
      const y = e.pageY - rect.top;

      setPosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    
    setShowImage(true); 
    };

  const handleMouseLeave = () => {
    setShowImage(false);
  };
  return(   
    <div className='mt-6 mx-auto w-2/3 h-[50svh] text-sm md:text-lg lg:text-xl'>
    <div className="text-start">
      <p>Hi there, I'm Kevin. 
        I'm currently a SWE intern at <a target="_blank" href="https://www.nationgraph.com" className="font-bold font-tnr italic pr-1"> NationGraph, </a> 
        building out the backend processes. In the past, I've interned at Safuture, where I spent most of my time building out a full-stack product.
        I'm interested in working on all aspects of computer science. 
      </p>
    </div>

    <div className="text-start my-6">
      <p> In terms of work, I've had the most experience with full-stack development.
        Recently though, I've been trying out game development, and I've been working on 
        <a target="_blank" 
        href="https://github.com/dieterwhitt/Solaris" 
        className="pl-2 font-bold font-tnr italic cursor-pointer pr-2"
        rel="noopener noreferrer"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}> 
        creating a game 
        </a> 
        {false && (
                <div
                  className="absolute pointer-events-none transform z-50"
                  style={{
                    top: position.y,
                    left: position.x,
                  }}
                >
                  <video
                  autoplay
                  muted
                  className="w-[128] h-32 object-cover rounded-md shadow-lg opacity-90"
                  >
                    <source
                      src = "https://github.com/user-attachments/assets/b29f43f6-c964-45e8-b01e-7ca64d0f3ea7"
                      type = "video/mp4"
                    />
                  </video>
                  </div>)}
        
        with friends.
        You can check out some of my projects on my github, and see my experiences on my <NavLink to="/Resume" className="font-bold font-tnr italic"> Resume </NavLink>.
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
    <div className="embla flex max-w-full mx-auto overflow-hidden">
    <button className="embla__prev lg:mr-3" onClick={scrollPrev}>
      <FaChevronLeft />
    </button>
  
    <div className="embla__viewport mt-[5svh] mb-[5svh]" ref={emblaRef}>
      <div className="embla__container flex space-x-4">
        <div className="embla__slide">
          <Projectcontainer 
            title="GitInsights" 
            imag={git} 
            largeImage={gitxl} 
            description="Enhances coders' understanding of codebases through generative summaries and visualizations, tracking every code change. Runner-up for best dev tool at HackThe6ix." 
            shortDescription="All-in-one tool for Git." 
            link="https://devpost.com/software/gitinsights" 
            stack={['React', 'Express', 'PostgreSQL']} 
          />
        </div>
        <div className="embla__slide">
        <Projectcontainer 
        title='Memoir' 
        imag = {memoir}
        largeImage={memoirxl}
        description = "Social media app prototype connecting users through past memories. Built with React, Flask, MongoDB, utilising Cohere API and D3.js. Built at UoftHacks XI." 
        shortDescription= "Social Media App."
        link="https://github.com/kevinyvv/memoir"
        stack={['React', 'Flask', 'sci-kit']}
        />
        </div>
        <div className="embla__slide">
        <Projectcontainer 
        title='EmailManager' 
        imag = {mascot}
        largeImage={emxl}
        description = "Email app with spam-filter and the feature of creating and sending AI-generated responses. Built with Next, Flask, and PostgreSQL."
        shortDescription="AI Assistant."
        link="https://github.com/kevinyvv/Email-Manager"
        stack={['Next.js', 'Flask', 'PostgreSQL']}
        />
        </div>
        <div className="embla__slide pr-4">
        <Projectcontainer 
        title='Spotify Recs'
         imag = {spotify}
         largeImage = {spotifyxl}
         description = "Web app to generate Spotify recommendations on demand. Built with React, designed with Figma." 
         shortDescription="Find new songs."
         link="https://github.com/kevinyvv/spotify-react"
        stack={['React']}/>
        </div>
      </div>
    </div>
  
    <button className="embla__next lg:ml-3" onClick={scrollNext}>
      <FaChevronRight />
    </button>
  </div>
  )

}

const Hobbies = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showImage, setShowImage] = useState(false);
  const containerRef = useRef(null); 

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY - rect.top;

      setPosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    
    setShowImage(true); 
    };

  const handleMouseLeave = () => {
    setShowImage(false);
  };
  return(   
    <div className='mt-6 mx-auto w-2/3 h-[50svh] text-sm md:text-lg lg:text-xl'>
    <div className="text-start">
      <p> Hi there, I'm Kevin. When I'm not coding, I like to do a variety of things in my spare time. 
      Recently, I've been trying to get better at running, relearning the piano, and climbing.
      If you have any helpful tips for improving at any of these, please let me know!
      
      </p>
      <p className="my-6">
        Apart from my current interests, I also like reading (<a target='_blank' href='https://myanimelist.net/mangalist/milkedchicken' className="font-bold font-tnr italic pr-1 -ml-1"> manga </a> and books), swimming, and going to the gym.
      </p>
      <p className="my-6">
        I've also played a lot of Supercell games  as a teen, and I've completed 
        <a 
        target="_blank" 
        href='https://link.clashofclans.com/en?action=OpenPlayerProfile&tag=8QGLL2JV0' 
        className="pl-1 font-bold font-tnr italic pr-1"
        rel="noopener noreferrer"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        > 
            Clash of Clans.
          </a>
          {showImage && (
                <div
                  className="absolute pointer-events-none transform z-50"
                  style={{
                    top: position.y,
                    left: position.x,
                  }}
                >
                  <img
                    src={coc}
                    alt="Hover"
                    className="w-[128] h-32 object-cover rounded-md shadow-lg opacity-90"
                  />
                  
                </div>
              )}
        I haven't had as much time recently, but I used to play the other games as well (add my sc id @kingkevin)
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
        Hi there, I'm Kevin. Welcome to my corner of the internet! 
       
      </p>
      <p className="my-6">
        I'll probably add more to this site later. Thanks for visiting!
      </p>

      <img
      src = {cat}
      className="mx-auto my-6"
      />
    </div>
  </div>
  )

}


const More = ({selected, setSelected}) => {
    
    return(
        <section id='more' className="relative top-[10%]
        text-center mt-4 mb-6 md:mb-12 text-md sm:text-lg md:text-xl dark:text-white">
          <div className="flex justify-center h-min">
            <p className="font-bold mr-1 md:mr-1"> about my  </p>

            <button
              className={`mr-2 md:mr-4 ${selected === "work" ? "font-bold" : "opacity-30"}`}
              onClick={() => setSelected("work")}
            >
              work
            </button>
            <button
              className={`mr-2 md:mr-4 ${selected === "hobbies" ? "font-bold" : "opacity-30"}`}
              onClick={() => setSelected("hobbies")}
            >
              hobbies
            </button>
            <button
              className={`mr-2 md:mr-4 ${selected === "self" ? "font-bold" : "opacity-30"}`}
              onClick={() => setSelected("self")}
            >
              self
            </button>
          </div>
          <div className="flex justify-center align-center backdrop-blur-sm">
                {selected === "work" ? 
                  <div className="">
                    <Me/>
                    {/* <Projects/> */}
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