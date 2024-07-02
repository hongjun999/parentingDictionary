import React from 'react'
import { List } from 'antd';

const data = Array.from({
  length: 1,
}).map(() => ({
  href: '#',
  title: `육아 질문 있어요.! 참견 부탁드립니다.!`,
  content:
    `어설프게나마 육아 하며 하루하루 지내고 있는데요. 궁금한 것들이 있어 길지만 몇가지 적어보아요.! 1. 잠자리 처음에는 스와들업 + 천기저귀하고 천기저귀 아기 베개마냥 베개하고... 애기 면봉 or 콧물 흡입기 가끔 ...`,
}));

const PreVQnA = () => {
  return (
    <div>
      <List
        size="small"
        style={{ border: '1px solid #ddd', backgroundColor: '#fff', borderRadius: '10px' }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.title}
          >
            <List.Item.Meta
              title={<a style={{ fontSize: '17px', color: 'blue' }} href={item.href}>{item.title}</a>} />
            {item.content}
          </List.Item>
        )} />
    </div>
  )
}

export default PreVQnA