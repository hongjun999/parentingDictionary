import { List } from 'antd';
import React from 'react'

const data = Array.from({
  length: 1,
}).map(() => ({
  href: '#',
  title: `신생아 시절 알았더라면 좋았을 육아지식`,
  content:
    `육아, 힘들다.'는 생각이 들 때 저는 육아서적을 뒤적이게 되더라고요. 아기가 도대체 왜 이러는지 책에는 답이 나와있을까, 조금 더 아기를 이해하고 가까워지고 싶다는 마음으로 책을 읽어요. 아직 그 답은 찾지 ...`,
}));

const PreVParenting = () => {
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

export default PreVParenting