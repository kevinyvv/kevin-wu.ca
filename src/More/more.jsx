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
          Hi there, I'm Kevin. 
          I'm currently a SWE intern at <a target="_blank" href="https://www.nationgraph.com" className="font-bold font-satoshi italic pr-1 text-sumi hover:text-sumi-dark dark:text-white"> NationGraph, </a> 
          building out the backend processes. In the past, I've interned at Safuture, where I spent most of my time building out a full-stack product.
          I'm interested in working on all aspects of computer science. 
        </p>
      </div>

      <div className="text-start mt-10">
        <p className="leading-relaxed"> 
          In terms of work, I've had the most experience with full-stack development.
          Recently though, I've been trying out game development, and I've been working on 
          <a 
            target="_blank" 
            href="https://github.com/dieterwhitt/Solaris" 
            className="pl-2 font-bold font-satoshi italic cursor-pointer pr-2 text-sumi hover:text-sumi-dark dark:text-white"
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
                  src="https://github.com/user-attachments/assets/b29f43f6-c964-45e8-b01e-7ca64d0f3ea7"
                  type="video/mp4"
                />
              </video>
            </div>)}
          
          with friends.
          You can check out some of my projects on my github, and see my experiences on my <NavLink to="/Resume" className="font-bold font-satoshi italic text-sumi hover:text-sumi-dark dark:text-white"> Resume </NavLink>.
        </p>
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
          Hi there, I'm Kevin. When I'm not coding, I like to do a variety of things in my spare time. 
          Recently, I've been trying to get better at running, relearning the piano, and climbing.
          If you have any helpful tips for improving at any of these, please let me know!
        </p>
      </div>
      
      <div className="mt-10 text-start">
        <p className="leading-relaxed">
          Apart from my current interests, I also like reading (<a target='_blank' href='https://myanimelist.net/mangalist/milkedchicken' className="font-bold font-satoshi italic pr-1 -ml-1 text-sumi hover:text-sumi-dark dark:text-white"> manga </a> and books), swimming, and going to the gym.
        </p>
      </div>
      
      <div className="mt-10 text-start">
        <p className="leading-relaxed">
          I've also played a lot of Supercell games as a teen, and I've completed
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
          I haven't had as much time recently, but I used to play the other games as well (add my sc id @kingkevin)
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