import React from 'react'
import './OurStrength.scss'
import { CompleteEvent, deleteEventId, getEventAll } from '../../services/admin.service';
import { useEffect, useState } from 'react';

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
      <div className='d-flex' style={{overflowX:'scroll' ,padding:'0.2vh' ,fontSize:"2.4vh"}}> 
        <table className='table table-hover' >
          <tr  className="thead-dark">
            <th scope='col'>sr no</th>
            <th scope='col' >Name of equipment</th>
            <th scope='col'>No of Unit</th>
            <th scope='col'>Maker</th>
            <th scope='col'>Capacity</th>
            <th scope='col'>Current location</th>
          </tr>

          {
            dataRow.map((item, index) => {
              return (

                <tr>
                  <td scope="row" >{index + 1}</td>
                  <td >{item.name}</td>
                  <td>{item.noUnits}</td>
                  <td>{item.madeBy}</td>
                  <td>{item.capacity}</td>
                  <td>{item.location}</td>

                </tr>
              )
            })
          }

        </table >
      </div>

    </>
  )
}

export default OurStrength