import React from 'react'
import {FaExternalLinkAlt} from 'react-icons/fa'

const Projectcontainer = ( {title, imag, description, link} ) => {

  return (

    <div className='mt-4 max-w-full min-h-[10vh] w-full sm:w-[50vw]
    rounded-lg border border-gray-300 flex flex-col shadow-gray-500 hover:scale-[101%]
    shadow-md p-4 overflow-auto'>
        <div className='flex justify-between items-center'>
            <h1 className='font-bold text-sm sm:text-md md:text-lg lg:text-xl'> {title} </h1>
            <a href={link} target='_blank'> <FaExternalLinkAlt size={'15px'}/> </a>
        </div>
        <div className='flex justify-between'>
            <img src={imag}  alt="Project Image" className="h-12 w-12 lg:w-20 lg:h-20 rounded-lg my-2"/>
            <p className='ml-4 w-full text-sm sm:text-md md:text-lg lg:text-xl overflow-hidden'> 
            {description}  </p>
        </div>
    </div>

  )
}

export default Projectcontainer