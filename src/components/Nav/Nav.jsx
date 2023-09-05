import { logopng } from '../../assets/images'
import { menu, close } from '../../assets/icons'
import { useRef } from 'react'
import './Nav.css'

const Nav = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 100) {
      header.style.backgroundColor = "#121212"; header.style.transition = '600ms'
    }
  });
  
  
  return (
    <header className='header'>
        <img src={logopng} height={80} className='logo-nav' alt="" />
        <button className='nav-btn' onClick={showNavBar}>
          <img src={menu} id='menu-icon' alt="" />
        </button>
      <nav ref={navRef}>
        <ul className='list-items'>
          <button className='nav-btn nav-close-btn' onClick={showNavBar}>
            <img src={close} id='menu-icon' alt="" />
          </button>
          <li><a href="#aboutUs">Sobre Nós</a></li>
          <li><a href="#ourServices">Serviços</a></li>
          <li><a href="#reviews">Avaliações</a></li>
          <li><a href="#contactUs">Contato</a></li>
        </ul>
      </nav>

    </header>
  )
}

export default Nav