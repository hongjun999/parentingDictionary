import React from 'react'
import ad2 from '../../img/main_ad2.png';
import { Link } from 'react-router-dom';

const AdLeft = () => {
  return (
    <div
    // style={{
    //   position: 'absolute',
    //   top: '30px',
    //   left: '10px'}}
    >
      <Link to='#'>
        <img style={{
          objectFit: 'cover',
          width: '200px',
          height: '150px',
          // zIndex: 99
        }} src={ad2} alt='광고 이미지' />
      </Link>
    </div>
  )
}
export default AdLeft;