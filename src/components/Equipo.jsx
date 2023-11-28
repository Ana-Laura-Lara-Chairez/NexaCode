import React from 'react'
import {motion} from 'framer-motion'
import DeeDee from "../assets/NexaCode/DeeDee.jpg";
import Adilene from "../assets/NexaCode/Adilene.jpg";
import Jimena from "../assets/NexaCode/Jimena.jpg";
import Salma from "../assets/NexaCode/Salma.jpg";


function Equipo() {
  return (
    <div>
    <section className='mt-20 mb-20' >
    <span id='equipo' className='anchor'></span>
        <div className='flex flex-col items-center gap-5'>
            <motion.p 
            initial={{ translateY: 200 }}
            whileInView={{ translateY: 0 }}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            viewport={{once: true}}
            className='text-lg lg:text-xl xl:text-2xl font-bold p-3 border-b-2 border-amarillo text-azul mb-10'>Equipo de trabajo</motion.p>
            <motion.div
            initial={{ translateY: 200 }}
            whileInView={{ translateY: 0 }}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            viewport={{once: true}}
             className='flex flex-col md:gap-10 md:flex-row lg:gap-20 justify-around items-center'>
                <div class="max-w-xs rounded overflow-hidden shadow-lg justify-around items-center ">
                <img src={DeeDee} alt="Dee Dee Gtz"/>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Didier Ortiz</div>
                      <p class="text-gray-700 text-base">
                          Desarrollador?
                      </p>
                    </div>
                </div>

                <div class="max-w-xs rounded overflow-hidden shadow-lg justify-around items-center ">
                <img src={Adilene} alt="Dee Dee Gtz"/>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Adilene Díaz</div>
                      <p class="text-gray-700 text-base">
                          Desarrollador?
                      </p>
                    </div>
                </div>

                <div class="max-w-xs rounded overflow-hidden shadow-lg justify-around items-center ">
                <img src={Jimena} alt="Dee Dee Gtz"/>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Jimena Luna</div>
                      <p class="text-gray-700 text-base">
                          Desarrollador?
                      </p>
                    </div>
                </div>

                <div class="max-w-xs rounded overflow-hidden shadow-lg justify-around items-center ">
                <img src={Salma} alt="Dee Dee Gtz"/>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Salma Delgado</div>
                      <p class="text-gray-700 text-base">
                          Desarrollador?
                      </p>
                    </div>
                </div>
                
            </motion.div>
        </div>
    </section>
    </div>
  )
}

export default Equipo