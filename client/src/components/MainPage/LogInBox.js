import React from 'react'
import kakao from '../../img/kakao.png'
import { Link } from 'react-router-dom'
import { Button } from 'antd';

const LogInBox = () => {
  const boxStyle = {

    top: '130px', right: '0',
    border: '1px solid #ddd',
    backgroundColor: '#FFF',
    width: '250px',
    height: '120px',
    borderRadius: '10px',
    fontSize: '12px',
  }
  const naverBox = {
    border: '1px solid #ddd',
    width: '150px',
    height: '30px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'RGB(3,199,90)',
    borderRadius: '5px',
  }
  const kakaoBox = {
    border: '1px solid #ddd',
    width: '150px',
    height: '30px',
    fontSize: '10px',
    fontWeight: 'bold',
    backgroundColor: 'RGB(254,229,0)',
    borderRadius: '5px',
    marginTop: '2px',


  }
  return (
    <div style={{
      // position: 'absolute',
      // top: '30px', right: '1%',
      textAlign: 'center',
      zIndex: 100
    }}>
      <div style={boxStyle}>
        <p style={{ margin: '7px auto', fontSize: '10px', fontWeight: 'bold' }}>간편 로그인</p>
        <div>
          <Link to='/'><Button style={naverBox}>NAVER 로그인</Button></Link>
          <Link to='/'><Button style={kakaoBox}>
            <img style={{ verticalAlign: 'bottom', width: '14px' }} src={kakao} alt='카카오 말풍선'
            />카카오계정으로 로그인</Button></Link>
        </div>
        <div style={{ fontSize: '10px' }}>
        <Link style={{ textDecoration: 'none' }} to='/'>아이디 찾기</Link>  &nbsp;&#124;&nbsp;
        <Link style={{ textDecoration: 'none' }} to='/'>비밀번호 찾기</Link> &nbsp;&#124;&nbsp;
        <Link style={{ textDecoration: 'none' }} to='/'>회원가입</Link>
        </div>
      </div>
    </div>
  )
}

export default LogInBox