import { Flex, Space } from 'antd'
import React from 'react'
import PreVNotice from './PreVNotice/PreVNotice'
import PreVParenting from './PreVParenting/PreVParenting'
import PreVQnA from './PreVQnA/PreVQnA'



const PreViewLine = () => {
  const headBox = {
    marginBottom: '5px',
    border: '1px solid RGB(22,104,168)',
    backgroundColor: 'RGB(22,104,168)',
    color: '#FFF',
    textAlign: 'center',
    width: '130px',
    lineHeight: '25px',
    borderRadius: '15px'
  }
  const noticeStyle = {
    display: 'inline-block',
    width: '340px',
    height: '260px',
    // border: '1px solid',
    // backgroundColor: 'red'
  }
  const parentingKnwlStyle = {
    width: '480px',
    height: '130px',
    // backgroundColor: 'blue'
  }
  const qnaStyle = {
    width: '480px',
    height: '130px',
    // backgroundColor: 'Yellow'
  }

  return (
    <div style={{ width: '820px', margin: '0 auto' }}>
      <Flex>
        <Space direction="horizontal" size="middle">
          {/* 공지사항 =================================== */}
          <div style={noticeStyle}>
            <div
              style={headBox}>공지사항</div>
            {PreVNotice()}
          </div>
          <Flex vertical>
            <Space direction="vertical" size="large" style={{ display: 'flex' }}>
              {/* 육아지식 =================================== */}
              <div style={parentingKnwlStyle}>
                <div style={headBox}>오늘의 육아지식</div>
                {PreVParenting()}
              </div>
              {/* QnA =================================== */}
              <div style={qnaStyle}>
                <div style={headBox}>QnA</div>
                {PreVQnA()}
              </div>
            </Space>
          </Flex>
        </Space>
      </Flex>

    </div >
  )

}

export default PreViewLine