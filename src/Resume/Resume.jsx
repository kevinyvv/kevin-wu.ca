import React from 'react'
import Resume from '../Resume/Resume.pdf'

function Res() {

  return (
    <div className='w-screen h-screen bg-[#fffaf0] '>
       <embed src={Resume} className='w-11/12 h-full align-center mx-auto'/>
    </div>
  )
}

export default Res