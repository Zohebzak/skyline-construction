import React from 'react'
import './OurStrength.scss'
import { CompleteEvent, deleteEventId, getEventAll } from '../../services/admin.service';
import { useEffect,useState } from 'react';

function OurStrength() {
  const [dataRow, setDataRow] = useState([])

  const fetchData = async () => {
    const data = await getEventAll()
    console.log(data.data.Events, "data");
    setDataRow(data.data.Events);
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div className='main_Strength'>
        <h2>EQUIPMENTS</h2>
        <p>Our Comprehensive Range of Construction Equipment

          At Skyline contractors, we understand the importance of having the right equipment to ensure that every construction project is completed to the highest standards of quality and safety. That's why we have invested in a comprehensive range of construction equipment to cater to every project's specific needs. From excavators and bulldozers to cranes and concrete mixers, our equipment is well-maintained and operated by skilled professionals to deliver results that exceed expectations. Explore our extensive range of equipment below and see how we can help you bring your construction project to life.</p>

      </div>
      <table>
        <tr>
          <th>sr no</th>
          <th>Name of equipment</th>
          <th>No of Unit</th>
          <th>Maker</th>
          <th>Capacity</th>
          <th>Current location</th>
        </tr>
        
        {
          dataRow.map((item,index)=>{
            return (
              
              <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.noUnits}</td>
              <td>{item.madeBy}</td>
              <td>{item.capacity}</td>
              <td>{item.location}</td>
    
            </tr>
            )
          })
        }
        
      </table >

    </>
  )
}

export default OurStrength