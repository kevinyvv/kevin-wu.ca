import React from 'react'
import {FaExternalLinkAlt} from 'react-icons/fa'

const Projectcontainer = ( {title, imag, description, link, stack} ) => {

  return (

    <div className='mt-4 max-w-full min-h-[20svh] max-h-[30svh]
    rounded-lg border border-gray-300 flex flex-col shadow-gray-500 hover:scale-[101%]
    shadow-md p-4
    xl:h-[25svh]
    '>
        <div className='flex justify-between items-center'>
            <h1 className='font-bold mx-auto
            text-sm sm:text-md md:text-lg'> {title} </h1>
            <a href={link} target='_blank'> <FaExternalLinkAlt size={'15px'}/> </a>
        </div>
        <div className='flex justify-between mt-2'>
            <img src={imag}  alt="Project Image" className="project-images h-12 w-12 lg:w-20 lg:h-20 rounded-lg"/>
            <p className='ml-4 h-[10svh] w-full text-start text-sm lg:text-md text-wrap text-ellipsis overflow-auto'> 
            {description}  </p>
        </div>
        <p className='relative mt-2 mb-1 text-xs lg:text-sm text-start invisible sm:visible'> 
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