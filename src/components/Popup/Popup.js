import './Popup.css';

import Slider from '../Slider/Slider';

function Popup({ isOpen }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <Slider />
    </div>
  );
}

export default Popup;
