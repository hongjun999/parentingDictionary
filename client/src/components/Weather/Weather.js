import React, { useEffect } from 'react'
import { API_KEY, API_URL } from '../config'
import weather from '../../img/main_날씨3.png'

const Weather = () => {

  useEffect(() => {
    let endpointInfo = `${API_URL}?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&base_date=20210628&base_time=0600&nx=55&ny=127`
    fetch(endpointInfo)
      .then(res => {
        console.log(res)
      })


  }, [])
  return (
    <div style={{marginTop: '20px'}}>
      <img style={{ width: '280px', height: '170px' }} src={weather} />
    </div>
  )
}

export default Weather