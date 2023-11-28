import React from 'react'
//components
import Banner from './Banner'
import Card from './Card'
//images
import logo from "../assets/NexaCode/logo.png";
import mision from "../assets/NexaCode/mision.jpg";
import vision from "../assets/NexaCode/vision.jpg";
import { motion } from 'framer-motion'

function Servicios() {
  return (
    <section >
      <span id='services' className='anchor'></span>
        <div className=' bg-black w-full h-[100px] text-blanco items-center flex justify-center uppercase font-semibold text-xl'>
            <motion.span 
            initial={{ translateY: 200 }}
            whileInView={{ translateY: 0 }}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            viewport={{once: true}}
            className='w-[80%] text-lg lg:text-xl xl:text-2xl text-center border-b pb-5 text-blanco'>¿Quiénes Somos?</motion.span>
        </div>
        <div className='flex flex-col lg:flex-row items-center bg-black md:pt-10 p-5 gap-16 lg:gap-10 lg:px-10 justify-between xl:gap-32 pb-8 md:pb-20 '>
          <motion.div
          initial={{ translateY: 200 }}
          whileInView={{ translateY: 0 }}
          transition={{duration: 0.5, ease: 'easeInOut'}}
          viewport={{once: true}}
          className='bg-black text-white text-left flex flex-col gap-10 flex-1 overflow-hidden'>
            <p>NexaCode es una empresa líder en el campo de la tecnología de la información (TI) que se especializa en el desarrollo de proyectos de  
              <span className='font-bold text-amarillo '> software personalizados y soluciones tecnológicas innovadoras. </span> </p> 
              <p>Nuestra idea es proporcionar soluciones personalizadas en las áreas de <span className='font-bold text-amarillo '>desarrollo móvil y desarrollo web </span>s que permitan a las organizaciones prosperar en un mundo cada vez más impulsado por la tecnología. </p>
              <p> Con una pasión por la excelencia en el desarrollo de software y la resolución de problemas tecnológicos, estamos comprometidos a ofrecer <span className='font-bold text-amarillo '> resultados excepcionales </span> a nuestros clientes y socios comerciales. </p> 
          </motion.div>
          <div className='lg:w-1/2 flex-1 bg-black lg:max-w-[557px] overflow-hidden'>
            <motion.div
            initial={{ translateY: 200 }}
            whileInView={{ translateY: 0 }}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            viewport={{once: true}}>
              <img className='w-3/6 lg:max-h-[371px] rounded-xl ' src={logo} alt="" />
            </motion.div>
          </div>
        </div>
        <Banner />
        <div className=' relative flex justify-center h-[1430px]  md:h-[940px] xl:h-[450px] '>
          <div
          className='absolute -top-8 flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-center '>
            <motion.div 
            initial={{ translateY: 200 }}
            whileInView={{ translateY: 0 }}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            viewport={{once: true}}>
              <Card img={mision} titulo="Misión" parrafo="En NexaCode, nos comprometemos a ser líderes en la industria de la tecnología de la información, proporcionando soluciones innovadoras y de alta calidad a nuestros clientes. A través de la excelencia en el desarrollo de software y la colaboración estratégica, creamos un impacto positivo en el mundo digital y contribuimos al éxito de nuestros socios comerciales."/>
            </motion.div>
            <motion.div
            initial={{ translateY: 200 }}
            whileInView={{ translateY: 0 }}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            viewport={{once: true}}>
              <Card img={vision} titulo="Visión" parrafo="Nuestra visión en NexaCode es ser reconocidos globalmente como un referente en el desarrollo de proyectos de TI, con un enfoque destacado en el desarrollo web y móvil. Buscamos la excelencia en la programación e innovación en la resolución de problemas en estos campos específicos, trabajando en colaboración con nuestros clientes." />
            </motion.div>
          </div>
        </div>
    </section>
  )
}

export default Servicios