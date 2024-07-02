import { Carousel } from 'antd';
import React from 'react';
import ad3 from '../../img/ad_bar.png';

const contentStyle = {
  margin: '30px auto 8px auto',
  width: '724px',
  height: '110px',
  backgroundColor: 'RGBA(103,205,238,0.5)',

};
const MiddleLine = () => {
  return (
    <div style={{ position: 'relative', height: '200px' }}>
      <div style={{ margin: '0 auto', width: '725px' }}>
        <a href='#'>
          <Carousel
            pauseOnHover={true}
            autoplay
            autoplaySpeed={5000}
          >
            <div>
              <div style={contentStyle}><img src={ad3} alt='광고 이미지' /></div>
            </div>
            <div>
              <div style={contentStyle}><img src={ad3} alt='광고 이미지' /></div>
            </div>
            <div>
              <div style={contentStyle}><img src={ad3} alt='광고 이미지' /></div>
            </div>
            <div>
              <div style={contentStyle}><img src={ad3} alt='광고 이미지' /></div>
            </div>
          </Carousel>
        </a>
      </div>
    </div>
  )
}

export default MiddleLine;