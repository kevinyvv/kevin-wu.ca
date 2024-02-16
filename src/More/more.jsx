import React, {Fragment, useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { TypeAnimation } from "react-type-animation";
import ReadMoreReact from 'read-more-react';
import ReactTyped from "react-typed";
import { NavLink } from "react-router-dom";
import Projectcontainer from "./projectcontainer";
import mascot from '../mascot.png';
import memoir from './memoir.png';
import spotify from './spotify.png'

const Me = () => {
  const [full, setFull] = useState(false);
  return(   
          <div className='
          mt-6 mx-auto w-2/4 h-2/4 text-sm md:text-lg lg:text-xl' >
            <div className="flex flex-wrap">
            <p> Hi there, </p>
            <p>  &nbsp; I'm Kevin. I'm currently a first year Computer Science student at the University of Waterloo. Welcome to my corner of the internet! </p>
            </div>
            <div>
            {full === true ? 
            <div className="relative">
            <p className="">
              Some quick things about myself: I like reading manga, going to the gym, and coding (pretty basic right?).
              Regarding school and work, I'm pretty much open to learning about and working on anything related to computer science right now.
              There's so many possibilities, which is really cool. 
              Currently though, I'm just trying to get through my pile of assignments, then work on stuff I find interesting
              - there always seems to be something to do.
              Anyways, thanks for visiting, and feel free to reach out to me about anything we share in common.
            </p>
            </div>
            : 
            <button
            className="mr-3 md:mr-6 focus:font-bold" onClick={() => setFull(true)}> [more] </button> }
            </div>
          </div>
  )

}

const Projects = () => {
  return(   
    <div className='flex flex-col text-center justify-center
          my-6 mx-auto w-2/4 h-2/4 text-sm md:text-lg lg:text-xl space-y-8' >
            Check out some of my projects below!
            {/*
            <p>This summer, I built a web app, <a href="https://github.com/kevinyvv/spotify-react" target="_blank" data-aos="fade-in"  data-aos-delay="150" className="font-bold"
           > &nbsp; [Spotify Discover Weekly Whenever], </a>
            that allows you to get song recommendations whenever. I plan on adding more features to it eventually.
             Recently, I've also made an &nbsp;
              <a href="https://github.com/kevinyvv/Email-Manager" target="_blank" data-aos="fade-in"  data-aos-delay="150" className="font-bold">
                [Email Manager]
              </a>
              &nbsp; that uses AI to determine whether to delete emails or automatically draft a response.
             The idea isn't exactly game-changing, but I was able to learn how to:
              use and connect PostgreSQL to a React frontend and make my own REST API endpoints with Flask.
            
            Inspired by how the Spotify Recommendation Algorithm works, 
            I'm currently creating a
            <NavLink to="/mangaproject" data-aos="fade-in"  data-aos-delay="150" className="hover:font-bold"
           >  [Manga Project], </NavLink>
  with the hopes of using it to find new recommendations for myself.
           </p>
           <p data-aos="fade-in"  data-aos-delay="150">
            Now, it's time to decide what I will make next...
           </p>
           */}
           <div className="space-y-4 mb-8">
           <Projectcontainer title='Memoir' imag = {memoir} description = "Social media app prototype linking users by past memories." link="https://github.com/kevinyvv/memoir"/>
           <Projectcontainer title='EmailManager' imag = {mascot} description = "Email manager with automated AI-generated replies." link="https://github.com/kevinyvv/Email-Manager"/>
           <Projectcontainer title='Spotify Recommendations' imag = {spotify} description = "Web app to get new Spotify recommendations whenever." link="https://github.com/kevinyvv/spotify-react"/>
           </div>
    </div>
  )

}


const Interests = () => {
  return(   
    <div className=' flex flex-wrap justify-center
    mt-6 mx-auto w-2/4 h-2/4 text-sm md:text-lg lg:text-xl text-center' >
      <p> I'm currently interested in: &nbsp; </p>
      <TypeAnimation
      sequence={[
        'improving my leetcode skills',
        1000, 
        'cats!!',
        1000,
        'finding new manga to read',
        1000,
        'relearning the piano',
        1000,
        'exploring internet rabbit holes on computer history',
        1000
      ]}
      wrapper="span"
      speed={25}
      repeat={Infinity}
    />
    <p> Feel free to shoot me a message about anything regarding my interests! If you want to see more insight on these interests, feel free to 
      access them here: &nbsp;
      <NavLink to="/interests" className="hover:font-bold"
           > [interests] </NavLink>
    </p>
    </div>
  )

}

const More = () => {
    const [selected, setSelected] = useState("me")
    
    return(
        <section id='more' className="relative top-1/3
        text-center mt-4 mb-6 md:mb-12 font-tnr text-md sm:text-lg md:text-xl dark:text-white">
          <div className="flex justify-center h-min">
          <p className="font-bold"> about my: </p>
          <button 
          className="mr-3 md:mr-6 focus:font-bold" onClick={() => setSelected("me")}> self </button>
          <button 
          className="mr-3 md:mr-6 focus:font-bold" onClick={() => setSelected("interests")}> current interests </button>
          <button 
          className="mr-3 md:mr-6 focus:font-bold" onClick={() => setSelected("projects")}> projects </button>
          </div>
          <div className="flex: justify-center align-center backdrop-blur-sm">
                {selected === "me" ? <Me/> : "" }
                {selected === "interests" ? <Interests/> :"" }
                {selected === "projects" ? <Projects/> :"" }
                {selected === null ? "" :"" }
          </div>
        </section>
    )
}

export default More