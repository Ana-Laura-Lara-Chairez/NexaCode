import React from 'react'
//icons
import { BsWhatsapp } from 'react-icons/bs'
//images
import heroimg from '../assets/NexaCode/hero.png'


function Hero() {
  return (
    
    <section style={{backgroundImage: `url(${heroimg})`}} id='/' className=' w-full h-screen relative overflow-hidden pt-[78px] bg-cover bg-center'>
      <div className='bg-opacity-80 bg-black h-full'>
        <div className='w-full h-full flex flex-col p-5 justify-start md:justify-center items-center gap-16 pt-32'>
          <div className=' md:-mt-5 flex flex-col gap-5 '>
            <p className=' font-bold text-4xl md:text-6xl xl:text-7xl text-gray-300'>Nexa<span className='text-amarillo'>Code</span></p>
            <p className=' font-normal text-gray-400 text-md md:text-2xl max-w-[300px] md:max-w-[440px] '>Conectando Ideas con Tecnología</p>
          </div>
          <a href='#services'><button className='uppercase font-semibold border text-azul bg-white hover:bg-gray-200 self-center px-6 py-2 text-md mt-3 flex items-center gap-2 rounded-xl'>Descubrir más</button> </a>
        </div>
      </div>        
    </section>
  )
}

export default Hero