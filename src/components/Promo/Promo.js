import './Promo.css';

import ActionBtn from '../ActionBtn/ActionBtn';

function Promo() {
  function click() {
    console.log('I am working');
  }

  return (
    <section className='promo'>
      <div className='promo__container'>
        <p className='promo__paragraph'>Привет,</p>
        <div className='promo__body'>
          <h1 className='promo__title'>
            Это <span className='promo__span-accent'>не</span> коммерческое задание
          </h1>
          <ActionBtn mode='btn-scroll' onClick={click} />
        </div>
      </div>
    </section>
  );
}

export default Promo;
