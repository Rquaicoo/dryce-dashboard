import React from 'react'
import './Odetails.css'
import Header from '../History/Header'

const Odetails = () => {

    const inProgress = {
        color: 'white',
        backgroundColor: 'rgb(15, 148, 15)',
        fontWeight: 'bold',
        padding: '10px 20px',
        borderRadius: '5px',
        border: '0'
      }

  return (
    <div className='details-form'>

      <div className='main-header'>                         {/* HEADER CONTAINER*/}
        <Header></Header>                                   {/*imported Header component*/}
      </div>

        <div className='user-info'> 
            <div className='p-info'>
                <span className='info-header'>Personal Information</span><br/><br/>
                <span className='main-text'>Mariah Anders</span><br/>
                <span className='secondary-text'>Atlanta, US</span>
            </div>
            <div className='h-info'>
                <span className='info-header'>Contact Information</span><br/><br/>
                <span className='main-text'>andersmariah243@gmail.com</span><br/>
                <span className='secondary-text'>(233) 551 321 749</span>
            </div>
            <div className='p-status'>
                <span className='info-header'>Order Status</span><br/>
                <button style={inProgress} className="btn">In Progress</button>
            </div>
        </div>
        <table id="history-table">
                <tr id="table-header">                       {/*table header section*/}
                  <th>Dresses</th>
                  <th>Shirts</th>
                  <th>Underwear</th>
                  <th>Suits</th>
                </tr>
                <tr>
                  <td>5</td>
                  <td>2</td>
                  <td>0</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>GHc 400</td>
                  <td>GHc 300</td>
                  <td>GHc 0</td>
                  <td>GHc 230</td>
                </tr>
        </table>

        <div className='pricing'>
            <span className='price-header'>Total Amout</span><br/>
            <button style={inProgress} className="btn">GHs 930</button>
        </div>
    </div>
  )
}

export default Odetails