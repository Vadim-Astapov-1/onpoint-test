import './App.css';
import { useState } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  const [translateX, setTranslateX] = useState(2048);
  const [startCoordinate, setStartCoordinate] = useState(0);
  const [slidePosition, setSlidePosition] = useState(3);

  function handleScrollRight() {
    if (slidePosition >= 3) {
      return;
    }

    setTranslateX(translateX + window.innerWidth);
    setSlidePosition(slidePosition + 1);
  }

  function handleScollLeft() {
    if (slidePosition <= 1) {
      return;
    }

    setTranslateX(translateX - window.innerWidth);
    setSlidePosition(slidePosition - 1);
  }

  function handleScrollToHome() {
    setTranslateX(0);
    setSlidePosition(1);
  }

  // Нажатие пальцем - захват стартовой точки
  function handleObserverClick(evt) {
    let start = parseInt(evt.changedTouches[0].clientX);
    setStartCoordinate(start);
  }

  // Отпуск пальца - начнется расчет разницы. Если она превышает 100px начнется скроллинг.
  function handleObserverEnd(evt) {
    let end = parseInt(evt.changedTouches[0].clientX);
    let difference = startCoordinate - end;

    if (difference > 0 && Math.abs(difference) > 100) {
      return handleScrollRight();
    }

    if (difference < 0 && Math.abs(difference) > 100) {
      return handleScollLeft();
    }
  }

  return (
    <div className='App'>
      <Header onScroll={handleScrollToHome} />
      <Main
        translateCoordinates={translateX}
        scrollToDesc={handleScrollRight}
        touchClick={handleObserverClick}
        touchEnd={handleObserverEnd}
      />
      <Footer />
    </div>
  );
}

export default App;
