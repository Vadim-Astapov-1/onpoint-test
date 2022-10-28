import './Spray.css';

import bubbleBlue from '../../images/spray-img/bubble-blue.png';
import bubbleBlueBig from '../../images/spray-img/bubble-blue-big.png';
import bubblePinkOne from '../../images/spray-img/bubble-pink-1.png';
import bubblePinkTwo from '../../images/spray-img/bubble-pink-2.png';
import bubblePinkThree from '../../images/spray-img/bubble-pink-3.png';
import spray from '../../images/spray-img/splinker.png';

function Spray() {
  return (
    <div className='spray'>
      <img className='spray__img' src={spray} alt='Spray'></img>
      <img className='spray__bubble spray__bubble_type_one' src={bubbleBlue} alt='Bubble'></img>
      <img className='spray__bubble spray__bubble_type_two' src={bubbleBlue} alt='Bubble'></img>
      <img className='spray__bubble spray__bubble_type_three' src={bubbleBlue} alt='Bubble'></img>
      <img className='spray__bubble spray__bubble_type_four' src={bubbleBlue} alt='Bubble'></img>
      <img className='spray__bubble spray__bubble_type_five' src={bubbleBlueBig} alt='Bubble'></img>
      <img className='spray__bubble spray__bubble_type_six' src={bubblePinkOne} alt='Bubble'></img>
      <img
        className='spray__bubble spray__bubble_type_seven'
        src={bubblePinkTwo}
        alt='Bubble'
      ></img>
      <img
        className='spray__bubble spray__bubble_type_eight'
        src={bubblePinkThree}
        alt='Bubble'
      ></img>
    </div>
  );
}

export default Spray;
