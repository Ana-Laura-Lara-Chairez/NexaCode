import React, {useState, useEffect} from 'react'
//images
import banner from '../assets/NexaCode/banner.jpg'
import web from '../assets/NexaCode/web.jpg'
import movil from '../assets/NexaCode/movil.jpg'
import soluciones from '../assets/NexaCode/soluciones.jpg'


const images = [web, movil, soluciones]

function Sponsor() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % images.length);
        }, 1500);
        return () => clearInterval(interval);
    }, [currentSlide]);

  return (
    <div style={{backgroundImage:`url(${banner})`}} className='w-full h-[230px] bg-center bg-no-repeat bg-cover flex justify-center items-center '>
        <img
        className="w-[350px] h-25 object-contain"
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
      />
    </div>
  )
}

export default Sponsor