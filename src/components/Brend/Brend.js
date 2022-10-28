import './Brend.css';

import ActionBtn from '../ActionBtn/ActionBtn';

import iconPlate from '../../images/brend-img/plate.png';
import iconCalender from '../../images/brend-img/calender.png';

import bubbleBlue from '../../images/brend-img/bubble-blue.png';
import bubbleBlueBig from '../../images/brend-img/bubble-blue-big.png';
import bubblePinkOne from '../../images/brend-img/bubble-pink-1.png';
import bubblePinkTwo from '../../images/brend-img/bubble-pink-2.png';
import bubblePinkThree from '../../images/brend-img/bubble-pink-3.png';
import spray from '../../images/brend-img/splinker.png';

function Brend({ openPopup }) {
  return (
    <section className='brend'>
      <div className='brend__container'>
        <p className='brend__paragraph'>Ключевое сообщение</p>
        <h2 className='brend__title'>
          Brend<span className='brend__span-accent'>xy</span>
        </h2>
        <div className='brend__desc'>
          <div className='brend__window brend__window_type_plate'>
            <img
              className='brend__window-icon brend__window-icon_type_plate'
              src={iconPlate}
              alt='Window icon'
            ></img>
            <p className='brend__text'>
              Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus
              ultricies
            </p>
          </div>
          <div className='brend__window brend__window_type_calender'>
            <img
              className='brend__window-icon brend__window-icon_type_calender'
              src={iconCalender}
              alt='Window icon'
            ></img>
            <p className='brend__text'>A arcu cursus vitae</p>
          </div>
          <ActionBtn name='btn-popup' onClick={openPopup} />
        </div>
      </div>
      <div className='brend__spray'>
        <img className='brend__spray-img' src={spray} alt='Spray'></img>
        <img
          className='brend__bubble brend__bubble_type_one'
          src={bubbleBlue}
          alt='Bubble'
        ></img>
        <img
          className='brend__bubble brend__bubble_type_two'
          src={bubbleBlue}
          alt='Bubble'
        ></img>
        <img
          className='brend__bubble brend__bubble_type_three'
          src={bubbleBlue}
          alt='Bubble'
        ></img>
        <img
          className='brend__bubble brend__bubble_type_four'
          src={bubbleBlue}
          alt='Bubble'
        ></img>
        <img
          className='brend__bubble brend__bubble_type_five'
          src={bubbleBlueBig}
          alt='Bubble'
        ></img>
        <img
          className='brend__bubble brend__bubble_type_six'
          src={bubblePinkOne}
          alt='Bubble'
        ></img>
        <img
          className='brend__bubble brend__bubble_type_seven'
          src={bubblePinkTwo}
          alt='Bubble'
        ></img>
        <img
          className='brend__bubble brend__bubble_type_eight'
          src={bubblePinkThree}
          alt='Bubble'
        ></img>
      </div>
    </section>
  );
}

export default Brend;
