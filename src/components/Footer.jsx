import React from 'react'
//icons
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { FaSearchLocation } from 'react-icons/fa'
//components
import Logo from './Logo'

function Footer() {
  return (
    <footer>
      <div className='bg-black p-4 flex justify-between item lg:justify-around'>
        <div className='flex w-[350px]'>
            <div className='relative text-white '>
              <Logo bgcolor='black'/>
            </div>
            <div className='pt-16'>
              <p className='text-gray-300 text-sm'>Nuestra idea es proporcionar soluciones personalizadas en las áreas de desarrollo móvil y desarrollo web que permitan a las organizaciones prosperar en un mundo cada vez más impulsado por la tecnología.
              </p>
          </div>
        </div>
        <div className='w-[400px] pl-5 flex flex-col gap-4 text-sm md-text-md mt-1'>
          <p className='text-white font-bold mt-[2px] '>Redes sociales</p>
          <div className='text-amarillo flex gap-2 items-center'>
            <BsInstagram size={20} />
            <a href="https://www.instagram.com/" target={'_blank'}>Síguenos en Instagram!</a>
          </div>
          <div className='text-amarillo flex gap-2 items-center'>
            <BsFacebook size={20} />
            <a href="https://www.facebook.com/" target={'_blank'}>Síguenos en Facebook!</a>
          </div>
          <p className='font-bold text-white'>Contacto</p>
          <div className='text-amarillo flex gap-2'>
            <BsWhatsapp size={20}/>
            <span>618 123 45 67</span>
          </div>
          <p className='font-bold text-white'>Direccion</p>
          <div className='flex gap-2'> 
            <div>
              <FaSearchLocation size={20} color='white'/>
            </div>
            <div className='flex flex-col text-amarillo'>
              <span>Durango - Mezquital km 4.5,</span>
              <span>34308 Gabino Santillán,</span>
              <span>Durango</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-azul text-blanco h-[50px] text-md'>
        <div className='flex items-center justify-center h-full text-xs md:text-md'>
          &copy;2023 <span className='font-bold ml-1'>NextCode</span>. Todos los Derechos Reservados.
        </div>
      </div>
    </footer>
    
  )
}

export default Footer  