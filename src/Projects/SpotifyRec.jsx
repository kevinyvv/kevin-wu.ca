
import {
  FaGithubSquare,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt
} from 'react-icons/fa'
import aos from 'aos';
import { Fragment, useEffect } from 'react';
import spotifyapp from '../Projects/spotifyapp.png'

const Projectone = () => {
  useEffect(()=> {
    aos.init({duration: 1500})
  },[])
  return (
    <div className="w-screen h-screen bg-[#fffaf0]">
      <img src={spotifyapp} data-aos="fade-in"  data-aos-delay="200" 
      className='relative top-1/4 mx-auto -mt-32 -mb-8' height="600" width="500"/> {/* add images later */}
      <div className='relative -bottom-1/3 align-center text-center bg-[#fffaf0]"'>
      <header data-aos="fade-in"  data-aos-delay="0" className="
      text-black font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-8">
        Spotify Recommendations
      </header>
      <Fragment data-aos="fade-in"  data-aos-delay="200">
      <a href="https://kevinyvv.github.io/spotify-react" target="_blank"
      className='align-center border-2 rounded-sm px-8 py-4 font-semibold hover:scale-10 my-4 mx-8'>Try It</a>
      <a href="https://github.com/kevinyvv/spotify-react" target="_blank"
      className='align-center border-2 rounded-sm px-8 py-4 font-semibold my-4 hover:scale-105'>Github</a>
    </Fragment>
      <h3 
      className='font-bold text-xl md:text-2xl lg:text-3xl mt-16'>Project details </h3>
      <p data-aos="fade-in"  data-aos-delay="600"
      className='mt-12 text-center mb-12'> 
      A web app utilising the Spotify API to grab users' top songs, generate recommendations and create playlists.
      Built using React, Tailwind, and SpotifyAPI.
      </p>
      <p>[more details to be added]</p>
      </div>
    </div>
  );
}

export default Projectone;
