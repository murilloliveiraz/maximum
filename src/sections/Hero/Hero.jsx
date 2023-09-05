import { bmwX6 } from '../../assets/images'
import { logomini } from '../../assets/images'
import './hero.css'

const Hero = () => {
  return (
    <section className='hero-section' id='hero'>
      <div>
        <img src={logomini } className='logo' alt="" />
      </div>
      <div>
        <img src={bmwX6} className='carro' alt="" />
      </div>
    </section>
  )
}

export default Hero