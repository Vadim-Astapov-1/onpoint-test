import './Header.css';

import homeIcon from '../../images/home.png';

function Header({ onScroll }) {
  return (
    <header className='header'>
      <img className='header__icon' src={homeIcon} alt='home' onClick={onScroll}></img>
      <p className='header__text'>Project</p>
    </header>
  );
}

export default Header;
