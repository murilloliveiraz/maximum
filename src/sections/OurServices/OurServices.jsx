import { useState, useEffect, useRef } from 'react'

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
    <section className='OurServices'>
      <h1>Nossos Serviços</h1>
      <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
          <motion.div className='inner'
           drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100}}
            animate={{x: 0}}
            transition={{duration: 0.8}}
            >
            { services.map((service) => (
              <motion.div className='card' key={service.name}>
                <img src={service.imgURL} alt={service.name}  className='card-img'/>
                <h3 className='card-title'>{service.name}</h3>
              </motion.div>
              ))}
          </motion.div>
      </motion.div>

    </section>
  )
}

export default OurServices