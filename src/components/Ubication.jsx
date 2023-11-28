import React from 'react'
import {motion} from 'framer-motion'

function Ubication() {
  return (
    <div>
    <section className='mt-20 mb-20' >
    <span id='ubication' className='anchor'></span>
        <div className='flex flex-col items-center gap-5'>
            <motion.p 
            initial={{ translateY: 200 }}
            whileInView={{ translateY: 0 }}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            viewport={{once: true}}
            className='text-lg lg:text-xl xl:text-2xl font-bold p-3 border-b-2 border-amarillo text-azul mb-10'>¿Donde nos ubicamos?</motion.p>
            <motion.div
            initial={{ translateY: 200 }}
            whileInView={{ translateY: 0 }}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            viewport={{once: true}}
             className='flex flex-col md:gap-10 md:flex-row lg:gap-20 justify-around items-center'>
                <iframe className=' w-[300px] md:w-[450px] lg:w-[600px] xl:w-[800px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.160232078744!2d-104.62015572465663!3d23.990118278507577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb833da45df2b%3A0x2392fefbf317535!2sUniversidad%20Tecnol%C3%B3gica%20de%20Durango!5e0!3m2!1ses-419!2smx!4v1701149274032!5m2!1ses-419!2smx" width="400" height="400" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> </iframe> 
                <div className='flex md:flex-col justify-around gap-6 mt-5'>
                    <div>
                    <p className='text-md'><span className='font-bold text-amarillo'>Dirección</span> <br/>Durango - Mezquital km  4.5, <br/>
                    34308 Gabino Santillán, <br/> 
                        Durango
                    </p>

                    <p className='text-md mt-5'><span className='font-bold text-amarillo'>Contacto</span> <br/>618 123 45 67<br/>
                    </p>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
    </div>
  )
}

export default Ubication