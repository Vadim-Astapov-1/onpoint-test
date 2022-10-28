import './Brend.css';

import ActionBtn from '../ActionBtn/ActionBtn';

import iconPlate from '../../images/brend-img/plate.png';
import iconCalender from '../../images/brend-img/calender.png';

import bubbleBlueOne from '../../images/brend-img/bubble-blue-1.png';
import bubbleBlueTwo from '../../images/brend-img/bubble-blue-2.png';
import bubbleBlueThree from '../../images/brend-img/bubble-blue-3.png';
import bubbleBlueFour from '../../images/brend-img/bubble-blue-4.png';
import bubbleBlueFive from '../../images/brend-img/bubble-blue-5.png';
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
          className='brend__bubble brend__bubble_type_one hidden'
          src={bubbleBlueOne}
          alt='Bubble'
        ></img>
        <img
          className='brend__bubble brend__bubble_type_two hidden'
          src={bubbleBlueTwo}
          alt='Bubble'
        ></img>
        <img
          className='brend__bubble brend__bubble_type_three hidden'
          src={bubbleBlueThree}
          alt='Bubble'
        ></img>
        <img
          className='brend__bubble brend__bubble_type_four hidden'
          src={bubbleBlueFour}
          alt='Bubble'
        ></img>
        <img
          className='brend__bubble brend__bubble_type_five hidden'
          src={bubbleBlueFive}
          alt='Bubble'
        ></img>
        <img
          className='brend__bubble brend__bubble_type_six hidden'
          src={bubblePinkOne}
          alt='Bubble'
        ></img>
        <img
          className='brend__bubble brend__bubble_type_seven hidden'
          src={bubblePinkTwo}
          alt='Bubble'
        ></img>
        <img
          className='brend__bubble brend__bubble_type_eight hidden'
          src={bubblePinkThree}
          alt='Bubble'
        ></img>
      </div>
    </section>
  );
}

export default Brend;
