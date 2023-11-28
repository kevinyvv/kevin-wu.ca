import './App.css';
import './More/more.jsx'
import More from './More/more.jsx';
import {
  FaGithubSquare,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt
} from 'react-icons/fa'
import aos from 'aos';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Main = () => {
  useEffect(()=> {
    aos.init({duration: 1500})
  },[])
  return (
    <div className="w-screen h-screen bg-[#fffaf0]">
      <text></text>
      <header className="relative -bottom-1/3 
      text-black font-bold text-4xl md:text-5xl lg:text-6xl text-center">
        Kevin Wu
        <div className='flex justify-center space-x-2 my-2 mt-6'>
        <NavLink to="/Resume" data-aos="fade-in"  data-aos-delay="1200" > 
        <FaFileAlt className="hover:scale-105" size ={28}/> </NavLink>
        <a data-aos="fade-in"  data-aos-delay="900"
        href="https://www.linkedin.com/in/wuyukun" target="_blank"><FaLinkedin className="hover:scale-105" size = {30}/> </a>
        <a data-aos="fade-in"  data-aos-delay="600"
        href="https://github.com/kevinyvv" target="_blank"><FaGithubSquare className="hover:scale-105" size = {30}/></a>
        <a data-aos="fade-in"  data-aos-delay="300"
        href="mailto:kwu4578@gmail.com"> <FaEnvelope className="hover:scale-105" size ={31}/> </a> 
        </div>
      </header>
      
      <More/>
    </div>
  );
}

export default Main;
