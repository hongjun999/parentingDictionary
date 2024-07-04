import { Space, Table } from "antd";
import data_table from './data_table.json';
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
      },
    ];
  const data = data_table;

  return (
    <Table style={{ color: 'red', cursor: 'default' }} pagination={{ pageSize: 10, position: ["bottomCenter"] }} columns={columns} dataSource={data} />
  )
}


export default DataTable

