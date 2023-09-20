import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './OurServices.css'
import { services } from './constants.js'
import { motion } from 'framer-motion'

const OurServices = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])


  return (
    <section className='ourServices' id='ourServices'>
      <h1>Nossos Serviços</h1>
      <motion.div ref={carousel} className='carousel' id='carrossel' whileTap={{cursor: "grabbing"}}>
          <motion.div className='inner'
           drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100}}
            animate={{x: 0}}
            transition={{duration: 0.8}}
            >
            { services.map((service, index) => (
              <motion.div className='card' key={index}>
                <img src={service.imgURL} alt={service.name}  className='card-img'/>
                <h3 className='card-title'>{service.name}</h3>
                <Link to={`service/${index}`}><button className='botao'>Ver Detalhes</button></Link>
              </motion.div>
              ))}
          </motion.div>
      </motion.div>
              <h3 className='ourServicesP'>Maximize a beleza do seu veículo! Descubra nossas promoções e pacotes exclusivos. Contate-nos já!</h3>
    </section>
  )
}

export default OurServices