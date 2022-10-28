import './ActionBtn.css';

import plusIcon from '../../images/icon-plus.svg';
import strelkaIcon from '../../images/icon-strelka.svg';

function ActionBtn({ mode, onClick }) {
  return (
    <button
      type='button'
      className={`action-btn ${
        mode === 'btn-scroll' ? 'action-btn_type_promo' : 'action-btn_type_brend'
      }`}
      name={mode}
      onClick={onClick}
    >
      <div className='action-btn__container'>
        <div className='action-btn__circle'>
          <img
            className={`action-btn__symbol ${
              mode === 'btn-scroll'
                ? 'action-btn__symbol_type_promo'
                : 'action-btn__symbol_type_brend'
            }`}
            src={mode === 'btn-scroll' ? strelkaIcon : plusIcon}
            alt='symbol'
          ></img>
        </div>
        <p className='action-btn__text'>{mode === 'btn-scroll' ? 'Что дальше?' : 'Подробнее'}</p>
      </div>
    </button>
  );
}

export default ActionBtn;
