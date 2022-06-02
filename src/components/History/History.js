import React from 'react'
import './History.css'
import Header from './Header'

const History = () => {
    

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
                  <td><span className='status'>In Progress</span></td>
                  <td>3/8/22</td>
                  <td>5/8/22</td>
                </tr>
                <tr>
                  <td>5543</td>
                  <td className='cus-name'>Prince Charlse<br/><span className='name-description'>Takoradi</span></td>
                  <td><span className='status'>Oh Hold</span></td>
                  <td>3/8/22</td>
                  <td>5/8/22</td>
                </tr>
                <tr>
                  <td>5543</td>
                  <td className='cus-name'>Ekow Amissah<br/><span className='name-description'>Madina</span></td>
                  <td><span className='status'>Delivered</span></td>
                  <td>3/8/22</td>
                  <td>5/8/22</td>
                </tr>
                <tr>
                  <td>5543</td>
                  <td className='cus-name'>Alfred Yeboah<br/><span className='name-description'>Cape Coast</span></td>
                  <td><span className='status'>Cancelled</span></td>
                  <td>3/8/22</td>
                  <td>5/8/22</td>
                </tr>
                <tr>
                  <td>5543</td>

                  <td className='cus-name'>Maria Anders
                    <br/>
                    <span className='name-description'>Accra</span>
                  </td>

                  <td><span className='status'>In Progress</span></td>
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