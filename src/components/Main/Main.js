import './Main.css';
import { useState } from 'react';

import Promo from '../Promo/Promo';
import Description from '../Description/Description';
import Brend from '../Brend/Brend';
import Spray from '../Spray/Spray';
import Popup from '../Popup/Popup';

function Main({ translateCoordinates, scrollToDesc, touchClick, touchEnd }) {
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  function handlePopupOpen() {
    setPopupIsOpen(!popupIsOpen);
  }

  return (
    <main
      className='main'
      style={{ transform: `translateX(-${translateCoordinates}px)` }}
      onTouchStart={!popupIsOpen ? touchClick : undefined}
      onTouchEnd={!popupIsOpen ? touchEnd : undefined}
    >
      <Promo onScroll={scrollToDesc} />
      <Description />
      <Brend openPopup={handlePopupOpen} />
      <Spray />
      <Popup isOpen={popupIsOpen} onClose={handlePopupOpen} />
    </main>
  );
}

export default Main;
