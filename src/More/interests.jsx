import aos from 'aos';
import { useEffect, Fragment } from 'react';
  
  const Interests = () => {
    useEffect(()=> {
      aos.init({duration: 1500})
    },[])
    return (
        <div className="w-screen h-screen bg-[#fffaf0]">
        <img></img> {/* add images later */}
        <div className='relative -bottom-1/3 align-center text-center'>
        <header data-aos="fade-in"  data-aos-delay="0" className="
        text-black font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-8">
          (coming soon)
        </header>
        <Fragment data-aos="fade-in"  data-aos-delay="200">
      </Fragment>
        <h3 
        className='font-bold text-xl md:text-2xl lg:text-3xl mt-16'> ?? </h3>
        <p data-aos="fade-in"  data-aos-delay="600"
        className='mt-12 text-center mb-12 w-auto px-40'> 
        Currently writing about my interests! this section will be added soon.
        </p>
        <p>[work in progress]</p>
        </div>
      </div>
    );
  }
  
  export default Interests;
  