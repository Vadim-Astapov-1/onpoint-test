import './Description.css';
import { useRef, useState } from 'react';

import spermOne from '../../images/desc-img/sperm-1.png';
import spermTwo from '../../images/desc-img/sperm-2.png';
import spermThree from '../../images/desc-img/sperm-3.png';
import spermFour from '../../images/desc-img/sperm-4.png';
import spermFive from '../../images/desc-img/sperm-5.png';

function Description() {
  // max 30%
  const [translateY, setTranslateY] = useState(0);
  // max 80%
  const [translateTopThumb, setTranslateTopThumb] = useState(0);
  const sliderRef = useRef();

  function mouseMove(evt) {
    let spaceTop = sliderRef.current.getBoundingClientRect().top;
    // 401px max
    let truck = sliderRef.current.getBoundingClientRect().height;
    let coordinateY = parseInt(evt.changedTouches[0].clientY);
    let scrollTruck = coordinateY - spaceTop;

    if (scrollTruck > truck || scrollTruck < 0) {
      return;
    }

    // 401px / 80 = 5px in 1%
    let topThumbCoordinate = scrollTruck / 5;
    //  401px / 30 = 13.4px in 1%
    let translateText = scrollTruck / 13.4;

    setTranslateY(translateText);
    setTranslateTopThumb(topThumbCoordinate);
  }

  // Т.к работа будет проверятся в масштабе ipad, для экономии времени используется только onTouchMove.
  // Из-за чего вождение мышкой не покажет результатов.
  return (
    <section className='description'>
      <div className='description__container'>
        <h2 className='description__title'>Текст сообщения</h2>
        <div className='description__body'>
          <div className='description__scroll' onTouchMove={mouseMove}>
            <div className='description__scroll-truck'></div>
            <div
              className='description__scroll-thumb'
              style={{ top: `${translateTopThumb}%` }}
            ></div>
          </div>
          <div className='description__text'>
            <div className='description__container-text' ref={sliderRef}>
              <p
                className='description__content'
                style={{ transform: `translateY(-${translateY}%)` }}
              >
                <span className='description__span-accent'>Lorem ipsum dolor sit amet,</span>{' '}
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi
                tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Nulla
                pharetra diam sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim
                lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse interdum
                consectetur libero id. Nec ullamcorper sit amet risus nullam eget felis eget. Mollis
                aliquam ut porttitor leo a diam sollicitudin tempor id. Euismod quis viverra nibh
                cras pulvinar mattis nunc. Massa massa ultricies mi quis. Sit amet massa vitae
                tortor condimentum lacinia. Et malesuada fames ac turpis egestas integer eget.
                Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.
                <br></br>
                <br></br>Amet justo donec enim diam vulputate ut pharetra sit. Risus ultricies
                tristique nulla aliquet enim tortor at auctor. Velit sed ullamcorper morbi tincidunt
                ornare massa. Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim diam
                quis enim. Gravida neque convallis a cras. Ut enim blandit volutpat maecenas
                volutpat. Mauris sit amet massa vitae tortor condimentum lacinia quis vel.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        className='description__sperm description__sperm_type_one'
        src={spermOne}
        alt='Sperm'
      ></img>
      <img
        className='description__sperm description__sperm_type_two'
        src={spermTwo}
        alt='Sperm'
      ></img>
      <img
        className='description__sperm description__sperm_type_three'
        src={spermThree}
        alt='Sperm'
      ></img>
      <img
        className='description__sperm description__sperm_type_four'
        src={spermFour}
        alt='Sperm'
      ></img>
      <img
        className='description__sperm description__sperm_type_five'
        src={spermFive}
        alt='Sperm'
      ></img>
    </section>
  );
}

export default Description;
