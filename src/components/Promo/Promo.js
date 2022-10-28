import './Promo.css';

import ActionBtn from '../ActionBtn/ActionBtn';

import baktiActiveOne from '../../images/promo-img/active-bakti-1.png';
import baktiActiveTwo from '../../images/promo-img/active-bakti-2.png';
import baktiActiveThree from '../../images/promo-img/active-bakti-3.png';
import baktiActiveFour from '../../images/promo-img/active-bakti-4.png';
import baktiBlurOne from '../../images/promo-img/blur-bakti-1.png';
import baktiBlurTwo from '../../images/promo-img/blur-bakti-1.png';
import baktiLongOne from '../../images/promo-img/long-bakti-1.png';
import spermPinkOne from '../../images/promo-img/pink-sperm-1.png';
import spermPinkTwo from '../../images/promo-img/pink-sperm-2.png';

function Promo({ onScroll }) {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <p className='promo__paragraph'>Привет,</p>
        <div className='promo__body'>
          <h1 className='promo__title'>
            Это <span className='promo__span-accent'>не</span> коммерческое задание
          </h1>
          <ActionBtn mode='btn-scroll' onClick={onScroll} />
        </div>
      </div>
      <img
        className='promo__bakti promo__bakti_type_one'
        src={baktiActiveOne}
        alt='Bacteria'
      ></img>
      <img
        className='promo__bakti promo__bakti_type_two'
        src={baktiActiveTwo}
        alt='Bacteria'
      ></img>
      <img
        className='promo__bakti promo__bakti_type_three'
        src={baktiActiveThree}
        alt='Bacteria'
      ></img>
      <img
        className='promo__bakti promo__bakti_type_four'
        src={baktiActiveFour}
        alt='Bacteria'
      ></img>
      <img className='promo__bakti promo__bakti_type_five' src={baktiBlurOne} alt='Bacteria'></img>
      <img className='promo__bakti promo__bakti_type_six' src={baktiBlurTwo} alt='Bacteria'></img>
      <img className='promo__bakti promo__bakti_type_seven' src={baktiLongOne} alt='Bacteria'></img>
      <img className='promo__bakti promo__bakti_type_eight' src={spermPinkOne} alt='Bacteria'></img>
      <img className='promo__bakti promo__bakti_type_nine' src={spermPinkTwo} alt='Bacteria'></img>
    </section>
  );
}

export default Promo;
