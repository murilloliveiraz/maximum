import { frente } from '../../assets/images'
import './AboutUs.css'

const AboutUs = () => {

  return (
    <section className='about-us' id='aboutUs'>
    <img src={frente} className='sobre-logo' alt="" />
      <div className='texto-sobre'>
        <h1 className='titulo-sobre'>Sobre Nós</h1>
        <p className='paragrafo-sobre'>Na Maximum, nossa paixão por carros vai muito além do metal e da mecânica, somos apaixonados por elevar a experiência de possuir um veículo. Nossa equipe é formada por profissionais automotivos dedicados a transformar carros comuns em obras-primas, contando a história única de cada veículo com brilho e perfeição. Oferecemos uma ampla gama de serviços, do rejuvenescimento da pintura à lavagem detalhada, com o compromisso de superar suas expectativas. Na Maximum, não cuidamos apenas de veículos; cuidamos de sonhos e paixões. Seu carro merece nada menos do que a excelência, e é isso que oferecemos.
        </p>
      </div>
    </section>
  )
}

export default AboutUs