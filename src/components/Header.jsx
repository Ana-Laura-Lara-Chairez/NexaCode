import React, { useState } from 'react'
//icons
import { FiMenu, FiX } from 'react-icons/fi'
//components
import Logo from './Logo'

function Header() {
    const [isActive, setIsActive] = useState(false)

  return (
    <header className=' bg-white fixed top-0 right-0 left-0 z-40 shadow-xl '>
        <nav className=' flex p-2 md:ml-5 items-center w-full relative h-[78px]'>
            <a href="#/" ><Logo/></a> 
            <div className='absolute top-6 right-5 text-3xl hover:cursor-pointer md:hidden' onClick={() => { setIsActive(!isActive)}}>
                { isActive? <FiX/> : <FiMenu/> }
            </div>
            <div className={`absolute bg-white top-[78px] transition-all duration-500 w-full right-0 ${isActive? 'translate-x-0' : ' lg:hidden translate-x-full'}  bottom-0 h-screen bg-opacity-0 flex `}>
            <div className='bg-transparent w-1/3 h-full' onClick={() => setIsActive(!isActive)}></div>
            <div className=' p-5 bg-white h-screen w-2/3 flex justify-center pt-10'>
                <ul className=' flex flex-col gap-10 w-full'>
                    <li className='text-black font-semibold hover:text-azul w-full border-b-2 text-center p-3 hover:cursor-pointer'><a href='#/' onClick={() => { setIsActive(!isActive) }}>Inicio</a></li>
                    <li className='text-black font-semibold hover:text-azul w-full border-b-2 text-center p-3 hover:cursor-pointer'><a href="#services"  onClick={() => { setIsActive(!isActive) }}>¿Quiénes somos?</a></li>
                    <li className='text-black font-semibold hover:text-azul w-full border-b-2 text-center p-3 hover:cursor-pointer'><a href="#productos"  onClick={() => { setIsActive(!isActive) }}>Productos</a></li>
                    <li className='text-black font-semibold hover:text-azul w-full border-b-2 text-center p-3 hover:cursor-pointer'><a href="#equipo"  onClick={() => { setIsActive(!isActive) }}>Equipo</a></li>
                    <li className='text-black font-semibold hover:text-azul w-full border-b-2 text-center p-3 hover:cursor-pointer'><a href="#ubication"  onClick={() => { setIsActive(!isActive) }}>Ubicación</a></li>
                </ul>
            </div>
            </div>
            <div className='mx-auto hidden md:block'>
                <ul className=' flex gap-10 text-md pr-10'>
                    <li className='text-black font-semibold hover:text-azul hover:cursor-pointer '><a href='#/' className='hover:border-b-2 hover:border-b-amarillo'>Inicio</a></li>
                    <li className='text-black font-semibold hover:text-azul hover:cursor-pointer '><a href='#services' className='hover:border-b-2 hover:border-b-amarillo' >¿Quiénes somos?</a></li>
                    <li className='text-black font-semibold hover:text-azul hover:cursor-pointer '><a href='#productos' className='hover:border-b-2 hover:border-b-amarillo' >Productos</a></li>
                    <li className='text-black font-semibold hover:text-azul hover:cursor-pointer '><a href='#equipo' className='hover:border-b-2 hover:border-b-amarillo' >Equipo</a></li>
                    <li className='text-black font-semibold hover:text-azul hover:cursor-pointer '><a href='#ubication' className='hover:border-b-2 hover:border-b-amarillo' >Ubicación</a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header