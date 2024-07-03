import { Button } from 'antd';
import React from 'react';
import ad1 from '../../img/main_ad1.png';
import logo from '../../img/육아사전_logo_ver2.1.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navBtnStyle = {
    margin: '0 50px',
    border: '1px none',
    color: '#fff',
    textDecorationLine: 'none',
    width: '100px',
    height: '40px',
    fontWeight: 'bold'

  }
  return (
    <div style={{ position: 'relative' }}>
      {/* 로고 */}
      <a href="/parentingDictionary">
        <img
          style={{
            position: 'absolute',
            left: '10px', top: '5px',
            width: '190px',
            height: '95px',
            zIndex: '100'
          }}
          src={logo}
          alt='로고 이미지' />
      </a>
      <div style={{ position: 'relative', margin: '0 auto', lineHeight: '100px', textAlign: 'center', width: '1200px' }}>
        <Link style={{
          display: 'inline-block',
        }} to='/notice'><button type='primary' style={{
          margin: '0 50px',
          border: '1px none',
          color: '#fff',
          borderRadius: '10px',
          backgroundColor: '#1677ff',
          textDecorationLine: 'none',
          width: '100px',
          height: '40px',
          fontWeight: 'bold'
        }}>공지사항</button></Link>
        <Link to='#'><Button type='primary' style={{
          margin: '0 50px',
          border: '1px none',
          color: '#fff',
          textDecorationLine: 'none',
          width: '100px',
          height: '40px',
          fontWeight: 'bold'
        }}>육아지식</Button></Link>
        <Button href='/' type='primary' style={{
          margin: '0 50px',
          border: '1px none',
          color: '#fff',
          textDecorationLine: 'none',
          width: '100px',
          height: '40px',
          fontWeight: 'bold'
        }}>육아장터</Button>
        <Button href='/' type='primary' style={{
          margin: '0 50px',
          border: '1px none',
          color: '#fff',
          textDecorationLine: 'none',
          width: '100px',
          height: '40px',
          fontWeight: 'bold'
        }}>마이페이지</Button>
        <div style={{ position: 'absolute', top: '10px', right: '-7%' }}>
          <a href='/'>
            <img style={{
              objectFit: 'cover',
              width: '190px',
              height: '100px'
            }} src={ad1} alt='광고 이미지' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar