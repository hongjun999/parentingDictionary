import React, { useState } from 'react';
import noticeList from '../../../img/notice_1.png'


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
      <div style={{ margin: '20px' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>검색</button>
      </div>
      <div style={{ margin: '20px' }} >
        <img  src={noticeList} />
      </div>
    </>
  );
}
export default NoticeList