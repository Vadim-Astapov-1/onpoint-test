import './Main.css';

import Promo from '../Promo/Promo';
import Description from '../Description/Description';
import Brend from '../Brend/Brend';

function Main({ translateCoordinates, scrollToDesc, touchClick, touchEnd }) {
  return (
    <main
      className='main'
      style={{ transform: `translateX(-${translateCoordinates}px)` }}
      onTouchStart={touchClick}
      onTouchEnd={touchEnd}
    >
      <Promo onScroll={scrollToDesc} />
      <Description />
      <Brend />
    </main>
  );
}

export default Main;
