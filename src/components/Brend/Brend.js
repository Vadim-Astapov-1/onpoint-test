import './Brend.css';

import ActionBtn from '../ActionBtn/ActionBtn';

import iconPlate from '../../images/brend-img/plate.png';
import iconCalender from '../../images/brend-img/calender.png';

function Brend({ openPopup }) {
  return (
    <section className='brend'>
      <div className='brend__container'>
        <h3 className='brend__subtitle'>Ключевое сообщение</h3>
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
    </section>
  );
}

export default Brend;
