import React from 'react'
import './History.css'


const History = () => {
    

  return (
    <div className="history-main">
        <h1 className='history-header'>History</h1>
        <table id="history-table">
          <tr id="table-header">
            <th>ID</th>
            <th>Client Info</th>
            <th>Status</th>
            <th>Order Date</th>
            <th>Delivery Date</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Berglunds snabbköp</td>
            <td>Christina Berglund</td>
            <td>Sweden</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
        </table>

    </div>
  )
}

export default History