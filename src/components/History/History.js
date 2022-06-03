import React from 'react'
import './History.css'
import Header from './Header'
import { borderLeft, fontWeight } from '@mui/system'

const History = () => {
    
  const inProgress = {
    backgroundColor: 'rgb(229, 255, 229)',
    color: 'rgb(15, 148, 15)',
    fontWeight: 'bold',
    padding: '5px',
    borderRadius: '5px'
  }
  const onHold = {
    backgroundColor: 'rgb(214, 213, 213)',
    color: 'rgb(99, 99, 99)',
    fontWeight: 'bold',
    padding: '5px',
    borderRadius: '5px'
  }
  const delivered = {
    backgroundColor: 'rgb(185, 219, 230)',
    color: 'rgb(21, 0, 128)',
    fontWeight: 'bold',
    padding: '5px',
    borderRadius: '5px'
  }
  const cancelled = {
    backgroundColor: 'rgb(249, 203, 203)',
    color: 'rgb(160, 20, 20)',
    fontWeight: 'bold',
    padding: '5px',
    borderRadius: '5px'
  }
  

  return (

    <div className='history-page' >

      <div className='main-header'>                         {/* HEADER CONTAINER*/}
        <Header></Header>                                   {/*imported Header component*/}
      </div>

      <div className='history-form'style={{marginTop: '30px' }}>
        <form>
          <div className="history-main">
            
              <h1 className='history-header'>History</h1>    {/*main form header = History*/}
              <table id="history-table">
                <tr id="table-header">                       {/*table header section*/}
                  <th>ID</th>
                  <th>Client Info</th>
                  <th>Status</th>
                  <th>Order Date</th>
                  <th>Delivery Date</th>
                </tr>
                <tr>
                  <td>5543</td>
                  <td className='cus-name'>Maria Anders<br/><span className='name-description'>Accra</span></td>
                  <td><span className='status' style={inProgress}>In Progress</span></td>
                  <td>3/8/22</td>
                  <td>5/8/22</td>
                </tr>
                <tr>
                  <td>5543</td>
                  <td className='cus-name'>Prince Charlse<br/><span className='name-description'>Takoradi</span></td>
                  <td><span className='status' style={onHold}>Oh Hold</span></td>
                  <td>3/8/22</td>
                  <td>5/8/22</td>
                </tr>
                <tr>
                  <td>5543</td>
                  <td className='cus-name'>Ekow Amissah<br/><span className='name-description'>Madina</span></td>
                  <td><span className='status' style={delivered}>Delivered</span></td>
                  <td>3/8/22</td>
                  <td>5/8/22</td>
                </tr>
                <tr>
                  <td>5543</td>
                  <td className='cus-name'>Alfred Yeboah<br/><span className='name-description'>Cape Coast</span></td>
                  <td><span className='status' style={cancelled}>Cancelled</span></td>
                  <td>3/8/22</td>
                  <td>5/8/22</td>
                </tr>
                <tr>
                  <td>5543</td>

                  <td className='cus-name'>Maria Anders
                    <br/>
                    <span className='name-description'>Accra</span>
                  </td>

                  <td><span className='status' style={inProgress}>In Progress</span></td>
                  <td>3/8/22</td>
                  <td>5/8/22</td>
                </tr>
              </table>

          </div>
        </form>
      </div>
    </div>
  )
}

export default History