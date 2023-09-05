import './ContactUs.css'
import {  call, instagram, location, open } from '../../assets/icons'

const ContactUs = () => {
  return (
    <section className='contact-section' id='contactUs'>
      <article>
            <iframe
          title="Localização da Estética Automotiva"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14632.046688164095!2d-46.7896332!3d-23.5320826!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff7f7145d293%3A0xe31753df539f022f!2sMaximum%20Detailing%20and%20service!5e0!3m2!1spt-BR!2sbr!4v1693850594285!5m2!1spt-BR!2sbr"
          width="500"
          height="500"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </article>
      <aside className='contacts'>
        <div>
           <h2 className='contact-title'>Experimente a diferença da nossa estética automotiva!</h2>
          <p>Visite-nos hoje ou entre em contato para um serviço excepcional</p>
        </div>
        <div>
          <ul className='contact-list'>
            <li className='contact-item'><img className='icon' src={call} alt="call" />(11)949118293</li>
            <li className='contact-item'><img className='icon' src={location} alt="call" />Tv. Gilmar de Franca Crispim, 25 - Km 18, Osasco - SP, 06264-030</li>
            <li className='contact-item'><img className='icon' src={instagram} alt="call" /> <a target='blank' href="https://www.instagram.com/maximum_estetica_automotiva/">maximum_estetica_automotiva <img className='icon2' src={open} alt="open" /></a></li>
          </ul>
        </div>
      </aside>
    </section>
  )
}

export default ContactUs