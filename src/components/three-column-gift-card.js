import React from 'react';
import './styles.css';
import iconsedans from '../images/iconsedans.svg';
import iconsuvs from '../images/iconsuvs.svg';
import iconluxury from '../images/iconluxury.svg';

function threeColumnGiftCard() {
  return (
    <div className='main'>
       <div className='first'>
          <img src= {iconsedans} alt='' width={50} />
          <div className='first2'>SEDANS</div>
          <div className='first3'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</div>
          <div className='first4'>Learn More</div>
       </div>
       <div className='second'>
          <img src= {iconsuvs} alt='' width={50}/>
          <div className='second2'>SUVS</div>
          <div className='second3'>Take an SUV for its precious interior, power and versatility. perfect for your next family vocation and off-road adventures.</div>
          <div className='second4'>Learn More</div>
       </div>
       <div className='third'>
          <img src= {iconluxury} alt='' width={50}/>  
          <div className='third2'>LUXURY</div>
          <div className='third3'>Cruise in the best Car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</div>
          <div className='third4'>Learn More</div>
       </div>  
    </div>
  )
}

export default threeColumnGiftCard