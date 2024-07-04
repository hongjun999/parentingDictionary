import { Space, Table } from "antd";

import React from 'react';

const DataTable = () => {
  const columns =
    [
      {
        title: '제목',
        dataIndex: 'title',
        key: 'title',
        render: (text) =>
          <Space size="small"><a>{text}</a></Space>,
      },
      {
        title: '작성자',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '작성일',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: '조회',
        dataIndex: 'view',
        key: 'view',
        // render: (_, record) => (
        //   <Space size="small">
        //     <a>Invite{record.title}</a>
        //     <a>Delete</a>
        //   </Space>
        // ),
      },
    ];
  const data = [
    {
      key: '1',
      title: '(공지)[마이비댄스학원] 남녀노소 누구나 즐길 수 있는 댄스학원!! 5월간 진행되는 1 + 1 BIG 이벤트!!',
      name: 'move Your Body',
      date: '2024.05.26',
      view: '118'
    },
    {
      key: '2',
      title: '(공지)[드림여성한의원]사춘기 생리통 90일 프로그램!!! 드림여성한의원과 함께 하는 여성 생애주기 케어 프로젝트 1탄!!!',
      name: '드림여성한의원',
      date: '2024.05.26',
      view: '132'
    },
    {
      key: '3',
      title: '(공지)[루바토아동발달센터] 언어치료, 놀이치료 추가 모집 안내',
      name: '루바토아동발달센터',
      date: '2024.05.26',
      view: '104'
    },
    {
      key: '4',
      title: '(공지)[아임샘생각놀이터] 수학이 처음인 친구들(4~11세) 놀이수학/ 원리수학/요리가베/수학가베/멘사사고력수학',
      name: '아임샘',
      date: '2024.05.26',
      view: '179'
    },
    {
      key: '5',
      title: '(공지)[파랑컴퍼니] 청소년 가족 연극 "시간을 파는 상점" 세종시 어린이날 특별공연',
      name: '파랑컴퍼니',
      date: '2024.04.10',
      view: '534'
    },
    {
      key: '6',
      title: '(공지)[공주시] 2024 공주 석장리 구석기축제 5.3(금) ~ 5.6(월)공주 석장리박물관 일원',
      name: '세종 라이프',
      date: '2024.04.11',
      view: '343'
    },
    {
      key: '7',
      title: '(공지)[배배샵 세종점] 브로우 전문 배배샵 가정의 달 이벤트',
      name: '록타',
      date: '2024.04.27',
      view: '1048'
      
    },
    {
      key: '8',
      title: '(공지)[세종창조경제혁신센터] 여성 (예비)창업자 지원 사업 참가자 모집',
      name: '세종창조경제혁신센터',
      date: '2024.04.26',
      view: '156'
    },
    {
      key: '9',
      title: '(공지)[행사안내] 현대자동차 2024 H-Family Day',
      name: '2024 H Family Day',
      date: '2024.04.26',
      view: '123'
    },
    {
      key: '10',
      title: '(공지)[밸라쥬여성의원] 5월 가정의달 할인 및 무료혜택 이벤트',
      name: '밸라쥬 여성의원',
      date: '2024.04.23',
      view: '356'
    },
  ];

  return (
    <Table style={{ color: 'red', cursor: 'default' }} pagination={{ pageSize: 10, position: ["bottomCenter"] }} columns={columns} dataSource={data} />
  )
}


export default DataTable

