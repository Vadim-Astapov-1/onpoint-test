import './Popup.css';

import Slider from '../Slider/Slider';

function Popup({ isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <Slider onClose={onClose} />
    </div>
  );
}

export default Popup;
