import { logopng } from '../../assets/images'
import { menu } from '../../assets/icons'

import './Nav.css'

const Nav = () => {
  return (
    <header>
        <img src={logopng} height={80} className='logo-nav' alt="" />
      <nav>
        <img src={menu} id='menu-icon' alt="" />
        <ul>
          <li><a href="#">Sobre Nós</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Avaliações</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>

    </header>
  )
}

export default Nav