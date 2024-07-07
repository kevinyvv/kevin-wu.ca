import './App.css';
import './More/more.jsx'
import More from './More/more.jsx';
import {
  FaGithubSquare,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt
} from 'react-icons/fa'
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import mascot from "./mascot.png";
import ModeSwitch from './sunandmoon';
import Stars from './stars';
import { BrowserView } from 'react-device-detect'

const Main = () => {
  return (
    
    <div className="w-full h-screen overflow-auto dark:bg-[#0a0e23] bg-[#fffaf0]">
            <Stars/>
            <ModeSwitch/>
      <div className="relative top-[10%] flex flex-col dark:text-white">
        <div className='flex flex-col justify-center items-center'>
            <button onClick={()=>window.location.reload()} className='rounded-full dark:shadow-2xl dark:shadow-yellow-500'>
              <img src={mascot} height={100} width={100} />
            </button>
            <h1 className='text-black dark:text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center'> Kevin Wu </h1>
        </div>
        <div className='flex justify-center space-x-2 my-2 mt-6'>
        <NavLink to="/Resume" > 
        <FaFileAlt className="hover:scale-105" size ={28}/> </NavLink>
        <a 
        href="https://www.linkedin.com/in/wuyukun" target="_blank"><FaLinkedin className="hover:scale-105" size = {30}/> </a>
        <a 
        href="https://github.com/kevinyvv" target="_blank"><FaGithubSquare className="hover:scale-105" size = {30}/></a>
        <a 
        href="mailto:kwu4578@gmail.com"> <FaEnvelope className="hover:scale-105" size ={31}/> </a> 
        </div>
      </div>
      
      <More/>
    </div>
  );
}

export default Main;
