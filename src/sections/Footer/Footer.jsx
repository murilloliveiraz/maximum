import './Footer.css'
import { logomini} from '../../assets/images'

const Footer = () => {
  return (
    <footer>
      <img src={logomini} className='footer-logo' alt="logo" />
      <p>2023<sup>&copy;</sup>. Maximum Detailing and Services</p>

    </footer>
  )
}

export default Footer