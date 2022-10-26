import './Header.css';

import homeIcon from '../../images/home.png';

function Header() {
  return (
    <header className='header'>
      <img className='header__icon' src={homeIcon} alt='home'></img>
      <p className='header__text'>Project</p>
    </header>
  );
}

export default Header;
