import React from 'react'
import NoticeList from './NoticeList/NoticeList'

const Notice = () => {
  return (
    <div style={{ margin: '0, auto', textAlign: 'center' }}>
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
      
      {NoticeList()}
    </div>
  )
}

export default Notice