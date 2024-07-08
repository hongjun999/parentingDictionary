import React, { useState } from 'react';
import DataTable from './DataTable';


const NoticeList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <>
      <div style={{ textAlign: 'right', margin: '-25px 100px 50px 0' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>검색</button>
      </div>
      <div style={{ color: 'red', margin: '0 auto', width: '800px' }}>
        <DataTable />
      </div>
    </>
  );
}
export default NoticeList