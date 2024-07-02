import React from 'react'
import ad2 from '../../img/main_ad2.png';

const AdLeft = () => {
  return (
    <div>
      <a href='#'>
        <img style={{
          position: 'absolute',
          top: '30px',
          left: '10px',
          objectFit: 'cover',
          width: '200px',
          height: '150px',
          zIndex: 99
        }} src={ad2} alt='광고 이미지' />
      </a>
    </div>
  )
}
export default AdLeft;