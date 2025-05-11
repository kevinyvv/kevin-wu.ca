import React, {Fragment, useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import cat from './Images/cat.png';
import coc from './Images/clashofclans.png';

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
    <div className='mt-8 mx-auto w-3/4 lg:w-2/4 h-[50svh] text-sm md:text-lg lg:text-xl'>
      <div className="text-start">
        <p className="leading-relaxed">
          I'm currently a computer science student at the University of Waterloo, learning about algorithms, data structures, and cognitive psychology this term.
          I just wrapped up my internship at NationGraph, 
          where I was building out data pipelines. In the past, I've interned at Safuture, where I spent most of my time building out a web app for equipment management.
        </p>
      </div>

      <div className="text-start mt-10">
        <p className="leading-relaxed">  
          In terms of experience, I'm most familiar with full-stack development.
          Recently though, I've been able to explore some other aspects of software through a variety of different projects:
        </p>
        <ul className="list-disc list-inside mt-4">
          <li className="leading-relaxed">robot that applies bandaids to hand injuries
          </li>
          <li className="leading-relaxed"> botting script for an RPG I used to play
          </li>
          <li className="leading-relaxed"> and a manga scanlation app (work in progress)
          </li>
        </ul>
      </div>
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
    <div className='mt-8 mx-auto w-3/4 lg:w-2/4 h-[50svh] text-sm md:text-lg lg:text-xl'>
      <div className="text-start">
        <p className="leading-relaxed"> 
          Outside of software, I like to do a variety of things in my spare time. 
          Recently, I've been pretty focused on getting better at climbing.
          If you have any helpful tips for improving quickly as a beginner, let me know!
        </p>
      </div>
      
      <div className="mt-10 text-start">
        <p className="leading-relaxed">
          Some other hobbies I enjoy are: reading (<a target='_blank' href='https://myanimelist.net/mangalist/milkedchicken' className="font-bold font-satoshi italic pr-1 -ml-1 text-sumi hover:text-sumi-dark dark:text-white"> manga </a> and books), swimming, and going to the gym.
        </p>
      </div>
      
      <div className="mt-10 text-start">
        <p className="leading-relaxed">
          I haven't been playing video games recently, but I'm proud that I've completed
          <a 
            target="_blank" 
            href='https://link.clashofclans.com/en?action=OpenPlayerProfile&tag=8QGLL2JV0' 
            className="pl-1 font-bold font-satoshi italic pr-1 text-sumi hover:text-sumi-dark dark:text-white"
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
          I haven't had as much time recently, but I used to play the other supercell games as well (add my sc id @kingkevin)
        </p>
      </div>
    </div>
  )
}

const Self = () => {
  return(   
    <div className='mt-8 mx-auto w-3/4 lg:w-2/4 h-[50svh] text-sm md:text-lg lg:text-xl'>
      <div className="text-center">
        <p className="leading-relaxed">
          Hi there, I'm Kevin. Welcome to my corner of the internet! 
        </p>
        <p className="my-8 leading-relaxed">
          I'll probably add more to this site later. Thanks for visiting!
        </p>

        <img
          src={cat}
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
          <div className="flex justify-center h-min mb-2">
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
          <div className="flex justify-center align-center">
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