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
      <div style={{ textAlign:'right' , margin: '20px' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>검색</button>
      </div>
      <div style={{ margin: '0 auto', width: '800px' }}>
        <DataTable />
      </div>
      {/* <div style={{ margin: '20px' }} >
        <img  src={noticeList} />
      </div> */}
    </>
  );
}
export default NoticeList