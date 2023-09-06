import { bmwX6 } from '../../assets/images'
import { logomini } from '../../assets/images'
import './hero.css'

const Hero = () => {
  return (
    <section className='hero-section' id='hero'>
      <div className='div-hero-logo'>
        <img src={logomini} className='logo' alt="Logo" />
      </div>
      <div>
        <img src={bmwX6} className='carro' alt="carro" />
      </div>
    </section>
  )
}

export default Hero