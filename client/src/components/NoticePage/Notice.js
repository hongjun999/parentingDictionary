import React from 'react'
import NoticeList from './NoticeList/NoticeList'
import { Link } from 'react-router-dom';
const Notice = () => {
  return (
    <div style={{ margin: '0, auto', textAlign: 'center' }}>
      <Link to='/notice'>
        <button
          style={{
            backgroundColor: '#fff',
            color: '#000',
            fontWeight: 'bold',
            border: '1px solid #ddd',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          공지사항
        </button>
      </Link>

      {NoticeList()}
    </div>
  )
}

export default Notice