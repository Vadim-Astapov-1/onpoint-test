import './Footer.css';

import logo from '../../images/logo.svg';

function Footer() {
  return (
    <footer className='footer'>
      <img className='footer__logo' src={logo} alt='logo'></img>
    </footer>
  );
}

export default Footer;
