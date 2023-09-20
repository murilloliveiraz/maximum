import './Footer.css'
import { logopng} from '../../assets/images'

const Footer = () => {
  return (
    <footer>
      <img src={logopng} className='footer-logo' alt="logo" />
      <p>2023<sup>&copy;</sup>. Maximum Detailing and Services</p>

    </footer>
  )
}

export default Footer