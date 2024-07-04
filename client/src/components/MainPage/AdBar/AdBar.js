import React from 'react'
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import adbar1 from '../../../img/ad_bar.png';
import adbar2 from '../../../img/ad_bar2.png';
import adbar3 from '../../../img/ad_bar3.png';
import adbar4 from '../../../img/ad_bar4.png';

const contentStyle = {
  margin: '30px auto 8px auto',
  width: '724px',
  height: '110px',
  backgroundColor: 'RGBA(103,205,238,0.5)',
};

const AdBar = () => {
  return (
    <div style={{ margin: '0 auto', width: '725px' }}>
      <Carousel
        pauseOnHover={true}
        autoplay
        autoplaySpeed={5000}
      >
        <div>
          <Link to='/'><div style={contentStyle}><img src={adbar1} alt='광고 이미지' /></div></Link>
        </div>
        <div>
          <Link to='/'><div style={contentStyle}><img src={adbar2} alt='광고 이미지' /></div></Link>
        </div>
        <div>
          <Link to='/'><div style={contentStyle}><img src={adbar3} alt='광고 이미지' /></div></Link>
        </div>
        <div>
          <Link to='/'><div style={contentStyle}><img src={adbar4} alt='광고 이미지' /></div></Link>
        </div>
      </Carousel>
    </div>
  )
}

export default AdBar