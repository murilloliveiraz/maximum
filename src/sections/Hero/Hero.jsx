import scrollreveal from 'scrollreveal'
import { bmwX6 } from '../../assets/images'
import { logomini } from '../../assets/images'
import './hero.css'

const Hero = () => {
  scrollreveal({
    reset: true,
    distance : '60px',
    duration : 2500,
    delay : 400
    });

    scrollreveal().reveal('.logo', {delay:600 , origin: 'left'});
    scrollreveal().reveal('.carro', {delay:600 , origin: 'right'});
    scrollreveal().reveal('.about-us', {delay:600 , origin: 'top'});
    scrollreveal().reveal('.inner div', {delay:500 , origin: 'bottom', interval: 200});
    scrollreveal().reveal('.article-reviews div', {delay:500 , origin: 'bottom', interval: 200});
    scrollreveal().reveal('.contact-section', {delay:600 , origin: 'top'});
    
  return (
    <section className='hero-section'>
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