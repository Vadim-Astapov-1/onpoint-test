import './Slider.css';
import { useState } from 'react';

function Slider({ isOpen, onClose }) {
  const [slidePosition, setSlidePosition] = useState(1);

  // Можно было сделать одной функцией, чтобы слайды по кругу менялись, независимо на какую стрелку нажал.
  // Но решил разделить логику.
  function handleSlideForward() {
    // Проверка тоже не нужна, ведь их всего два.
    setSlidePosition(2);
  }

  function handleSlideBack() {
    setSlidePosition(1);
  }

  return (
    <div className='slider'>
      <div className='slider__container'>
        <h3 className='slider__subtitle'>Преимущества</h3>
        <h2 className='slider__title'>
          Brend<span className='slider__span-accent'>xy</span>
        </h2>
        {/* Fix: Дочерний visibility: visible стоит поверх секции, что загораживало кнопку */}
        {isOpen ? (
          <>
            <div className='slider__window'>
              <ul className={`slider__item ${slidePosition === 1 ? 'slider__item_visible' : ''}`}>
                <li className='slider__item-content'>
                  <h4 className='slider__item-title'>01</h4>
                  <p className='slider__item-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </li>
                <li className='slider__item-content'>
                  <h4 className='slider__item-title'>02</h4>
                  <p className='slider__item-text'>Faucibus pulvinar elementum integer enim</p>
                </li>
                <li className='slider__item-content'>
                  <h4 className='slider__item-title'>03</h4>
                  <p className='slider__item-text'>Faucibus pulvinar elementum integer enim</p>
                </li>
              </ul>
              <ul className={`slider__item ${slidePosition === 2 ? 'slider__item_visible' : ''}`}>
                <li className='slider__item-content'>
                  <h4 className='slider__item-title'>04</h4>
                  <p className='slider__item-text'>
                    Mi bibendum neque egestas congue quisque egestas diam
                  </p>
                </li>
                <li className='slider__item-content'>
                  <h4 className='slider__item-title'>05</h4>
                  <p className='slider__item-text'>Venenatis lectus magna fringilla urna</p>
                </li>
                <li className='slider__item-content'>
                  <h4 className='slider__item-title'>06</h4>
                  <p className='slider__item-text'>Venenatis lectus magna fringilla urna </p>
                </li>
              </ul>
            </div>
            <div className='slider__control'>
              <button
                type='button'
                className='slider__btn-flip slider__btn-flip_type_back'
                name='btn-slider-back'
                onClick={handleSlideBack}
              ></button>
              <div
                className={`slider__status-slide ${
                  slidePosition === 1 ? 'slider__status-slide_active' : ''
                }`}
              ></div>
              <div
                className={`slider__status-slide ${
                  slidePosition === 2 ? 'slider__status-slide_active' : ''
                }`}
              ></div>
              <button
                type='button'
                className='slider__btn-flip slider__btn-flip_type_forward'
                name='btn-slider-forward'
                onClick={handleSlideForward}
              ></button>
            </div>
          </>
        ) : null}
        <button type='button' className='slider__btn-close' onClick={onClose}></button>
      </div>
    </div>
  );
}

export default Slider;
