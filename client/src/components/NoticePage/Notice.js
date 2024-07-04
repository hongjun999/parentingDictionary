import React from 'react'
import NoticeList from './NoticeList/NoticeList'
import { Link } from 'react-router-dom';
import { Flex } from 'antd';
import AdLeft from '../MainPage/AdLeft';
import LogInBox from '../MainPage/LogInBox';
import Weather from '../Weather/Weather';
const Notice = () => {
  return (
    <div style={{ margin: '0, auto', textAlign: 'center' }}>
      {/* <Link to='/notice'>
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
      </Link> */}

      {/* {NoticeList()} */}
      <div style={{ justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto ' }}>
        <Flex >
          <div><AdLeft /></div>
          <Flex style={{ margin: '0 100px' }} vertical>
            {/* <div><AdBar /></div> */}
            {/* <div><PreViewLine /></div> */}
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
          </Flex>
          <Flex vertical>
            <div style={{ margin: '10px auto 0 -20px' }}>
              <LogInBox />
              <Weather />
            </div>
          </Flex>
        </Flex>
      </div>
    </div>
  )
}

export default Notice