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
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '조회',
        key: 'action',
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
      title: '',
      name: 'John Brown',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      title: 'Jim Green',
      name: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      title: 'Joe Black',
      name: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      title: 'Joe Black',
      name: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '5',
      title: 'Joe Black',
      name: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '6',
      title: 'Joe Black',
      name: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '7',
      title: 'Joe Black',
      name: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '8',
      title: 'Joe Black',
      name: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '9',
      title: 'Joe Black',
      name: 32,
      address: 'Sydney No. 1 Lake Park',
    },
  ];

  return (
    <Table pagination={{ pageSize: 10, position: ["bottomCenter"]}} columns={columns} dataSource={data} />
  )
}


export default DataTable

