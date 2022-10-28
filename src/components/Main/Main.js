import './Main.css';

import Promo from '../Promo/Promo';
import Description from '../Description/Description';
import Brend from '../Brend/Brend';

function Main({ translateCoordinates, scrollToDesc, touchClick, touchEnd, handlePopupOpen }) {
  return (
    <main
      className='main'
      style={{ transform: `translateX(-${translateCoordinates}px)` }}
      onTouchStart={touchClick}
      onTouchEnd={touchEnd}
    >
      <Promo onScroll={scrollToDesc} />
      <Description />
      <Brend openPopup={handlePopupOpen} />
    </main>
  );
}

export default Main;
