import React from 'react'
import {FaExternalLinkAlt} from 'react-icons/fa'

const Projectcontainer = ( {title, imag, largeImage, description, shortDescription, link, stack} ) => {

  return (

    <div className='mt-4 max-w-full h-[10rem] md:h-[10rem] lg:h-[12rem]
    rounded-lg border border-gray-300 flex flex-col shadow-gray-500 hover:scale-[101%]
    shadow-md p-4
    xl:h-[27rem]
    '>
        <div className='flex justify-between items-center'>
            <h1 className='font-bold mx-auto
            text-sm sm:text-md md:text-lg'> {title} </h1>
            <a href={link} target='_blank'> <FaExternalLinkAlt size={'15px'}/> </a>
        </div>

        <div className='flex flex-col md:flex-row xl:flex-col xl:items-center
        md:items-start justify-center items-center mt-2'>
          <img 
              src={imag} 
              alt="Project Image" 
              className="project-images
               w-20 h-20 md:h-12 md:w-12 lg:w-20 lg:h-20 rounded-lg
               xl:hidden"
          />
          <img
            src={largeImage}
            alt="Project Image XL"
            className='hidden xl:block w-[36rem]  h-[18rem] rounded-lg'
          />

          <p className='mt-2 xl:pt-2 md:mt-0 md:ml-4 h-[4rem] w-full text-center 
          md:text-start text-sm md:text-md lg:text-md xl:text-base text-wrap hidden md:block'> 
              {description}  
          </p>

          <p className='md:hidden mt-2 text-sm'>
            {shortDescription}
          </p>
        </div>



        <p className='relative mt-2 mb-1 text-xs lg:text-sm text-start invisible sm:visible xl:hidden'> 
          {stack?.map((tech, index) => (
            <b key={index} className='button-hide mr-4 overflow-hidden bg-[#D7CAB2]
             dark:bg-gray-400 rounded-xl p-1'>
              {tech}
            </b>
          ))}
        </p>

    </div>

  )
}

export default Projectcontainer