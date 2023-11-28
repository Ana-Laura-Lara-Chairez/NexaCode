import React from 'react'
//components
//images
import productos from "../assets/NexaCode/DeeDeeFunkos.png";
import { motion } from 'framer-motion'

function Productos() {
  return (
    <section className='mt-20' >
      <span id='productos' className='anchor'></span>
        <div className=' bg-black w-full h-[100px] text-blanco items-center flex justify-center uppercase font-semibold text-xl'>
            <motion.span 
            initial={{ translateY: 200 }}
            whileInView={{ translateY: 0 }}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            viewport={{once: true}}
            className='w-[80%] text-lg lg:text-xl xl:text-2xl text-center border-b pb-5 text-blanco'>Qué Ofrecemos?</motion.span>
        </div>
        <div className='flex flex-col lg:flex-row items-center bg-black md:pt-10 p-5 gap-16 lg:gap-10 lg:px-10 justify-between xl:gap-32 pb-8 md:pb-20 '>
          <motion.div
          initial={{ translateY: 200 }}
          whileInView={{ translateY: 0 }}
          transition={{duration: 0.5, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='bg-black text-white text-left flex flex-col gap-10 flex-1 overflow-hidden'>
            <p>Ofrececemos soluciones a medida tanto en el ámbito del desarrollo móvil como en el desarrollo web. </p>               
             
              <p>Un ejemplo del servicio que realizamos es el desarrollo de un sistema para manejo y promoción de
                una tienda de artículos coleccionables llamada <span className='font-bold text-amarillo '>Dee Dee Funkos</span>. El objetivo principal de NexaCode es diseñar y desarrollar una página web y aplicación móvil atractiva y funcional que represente la tienda y muestre de manera efectiva su inventario de productos. </p>
              <p> Nexacode ofrece este tipo soluciones tecnológicas para todo tipo de negocio o empresa, con atención y diseño personalizado, así como variaciones de costos segun la necesidad.</p>
          </motion.div>
          <div className='lg:w-1/2 flex-1 bg-black lg:max-w-[557px] overflow-hidden'>
            <motion.div
            initial={{ translateY: 200 }}
            whileInView={{ translateY: 0 }}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            viewport={{once: true}}>
              <img className='w-3/6 lg:max-h-[371px] rounded-xl ' src={productos} alt="" />
            </motion.div>
          </div>
        </div>
    </section>
  )
}

export default Productos