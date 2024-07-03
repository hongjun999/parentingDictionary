import { Button } from 'antd';
import React from 'react';
import ad1 from '../../img/main_ad1.png';
import logo from '../../img/육아사전_logo_ver2.1.png';
import { Link } from 'react-router-dom';

const navBtnStyle = {
  // margin: '0 20px',
  border: '1px none',
  color: '#fff',
  textDecorationLine: 'none',
  width: '120px',
  height: '40px',
  fontWeight: 'bold',
  borderRadius: '10px',
  backgroundColor: '#1677ff'
};

const Navbar = () => {
  return (
    <div style={{ width: '100%', padding: '10px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>

        {/* nav바 좌측 로고 */}
        <a href="/parentingDictionary">
          <img
            style={{
              width: '190px',
              height: '95px'
            }}
            src={logo}
            alt='로고 이미지'
          />
        </a>

        {/* nav바 중앙 메뉴 */}
        <div style={{ display: 'flex' }}>
          <Link to='/notice' style={{ marginLeft: '20px', width: '120px', display: 'inline-block' }}>
            <Button type='primary' style={navBtnStyle}>공지사항</Button>
          </Link>
          <Link to='/notice' style={{ marginLeft: '20px', width: '120px', display: 'inline-block' }}>
            <Button type='primary' style={navBtnStyle}>육아지식</Button>
          </Link>
          <Link to='/notice' style={{ marginLeft: '20px', width: '120px', display: 'inline-block' }}>
            <Button type='primary' style={navBtnStyle}>육아장터</Button>
          </Link>
          <Link to='/notice' style={{ marginLeft: '20px', width: '120px', display: 'inline-block' }}>
            <Button type='primary' style={navBtnStyle}>마이페이지</Button>
          </Link>
        </div>

        {/* nav바 우측 광고 */}
        <div>
          <a href='/'>
            <img
              style={{
                objectFit: 'cover',
                width: '190px',
                height: '100px'
              }}
              src={ad1}
              alt='광고 이미지'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;