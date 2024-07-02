import { List, Typography } from 'antd';
import React from 'react'

const data = [
  '[드림여성한의원] 사춘기 생리통 90일 프...',
  '[루바토아동발달센터] 언어치료, 놀이치...',
  '[아임샘샘각놀이터] 수학이 처음인 친구...',
  '[파랑컴퍼니] 청소년 가족 연극 "시간... [1]',
  '[공주시] 2024 공주 석장리 구석기축... [4]',
  '[배배샵 세종점] 브로우 전문 배배샵 ... [3]',
  '[세종창조경제혁신센터] 여성 (예비)창...'
];

const PreVNotice = () => {
  return (
    <div>
      <List
        size='small'
        bordered
        style={{ backgroundColor: '#fff' }}
        dataSource={data}
        renderItem={(item) => (
          <a href='/parentingDictionary/notice'>
            <List.Item style={{ color: 'RGBA(255,0,0,0.6)' }}>
              <Typography.Text
                style={{
                  backgroundColor: 'RGBA(255,0,0,0.2)',
                  width: '30px'
                }}
                type='danger'>공지</Typography.Text> {item}
            </List.Item>
          </a>
        )} />
    </div>
  )
}

export default PreVNotice