import React from 'react';
import PreViewLine from './PreViewLine/PreViewLine';
import AdLeft from './AdLeft'
import LogInBox from './LogInBox';
import { Flex } from 'antd';
import Weather from '../Weather/Weather';
import AdBar from './AdBar/AdBar';
const Main = () => {
  return (
    <div style={{ justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto ' }}>
      <Flex >
        <div><AdLeft /></div>
        <Flex style={{ margin: '0 100px' }} vertical>
          <div><AdBar /></div>
          <div><PreViewLine /></div>
        </Flex>
        <Flex vertical>
          <div style={{ margin: '10px auto 0 -45px' }}>
            <LogInBox />
            <Weather />
          </div>
        </Flex>
      </Flex>
    </div>
  )
}

export default Main