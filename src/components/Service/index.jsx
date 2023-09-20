import './style.css'
import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { services } from '../../sections/OurServices/constants';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Service = () => {
  const { id } = useParams();
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  const service = services[id];
  const details = service.descricaoEtapas;
  const imagens = service.etapasImagens;
  return (
    <section className='servicoCompleto'>
      <h1 className='serviceTitle'>{service.name}</h1>
      <motion.div ref={carousel} className='carouselImagens' whileTap={{cursor: "grabbing"}}>
          <motion.div className='inner'
           drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100}}
            animate={{x: 0}}
            transition={{duration: 0.8}}
            >
            { imagens.map((imagem, index) => (
              <motion.div key={index}>
                <img src={imagem.imgURL} alt={imagem.name}  className='imagemServico'/>
              </motion.div>
              ))}
          </motion.div>
      </motion.div>
      <h3 className='serviceH3'>{service.descricaoTitle}</h3>
      <p className='textoEtapa'>{service.descricaoParagrafo}</p>
      <ul className='etapas'>
        {details.map((detail, index) => (
          <li className='etapa' key={index}>{detail.etapa}</li>
        ))}
      </ul>
      <Link to={"/"}> <button className='botao'>Voltar</button> </Link>
    </section>
  )
}

export default Service