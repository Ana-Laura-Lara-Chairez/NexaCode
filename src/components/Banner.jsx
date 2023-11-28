import React from 'react'
//icons
import banner from '../assets/NexaCode/banner.jpg'

function Banner() {
  return (
    <div style={{backgroundImage:`url(${banner})`}} className=' h-[150px] flex flex-col items-center justify-start pt-4 gap-3 bg-no-repeat bg-cover bg-center '>
        <div className='text-white text-sm md:text-xl mt-5'>Conoce más sobre nuestra empresa</div>
        
    </div>
  )
}

export default Banner