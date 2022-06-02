import { bgcolor } from '@mui/system'
import React, {Component, Profiler} from 'react'
import './Header.css'
import {LinkNames} from './Navlinks'
import profilePic from './profilePic.png'

class Header extends Component{
    // clickState condition variables
  state = {clicked: false}

  handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
  }

  render () {
      return (
        <header>
              <nav className="navBar">
                  <div className="navBar-container">
                    
                    {/*menu bar with js condition==> ? clicked "classMenu" : "bar or X"*/}
                    <div className='navIcon' onClick={this.handleClick}>
                      <i class={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars" }></i>
                    </div>

                    <div>
                        <h3>DrYce</h3>
                    </div>

                    <div className='buttons'>
                      {/*nav links, imported from Navlinks.js #used Links*/}
                      <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                          {LinkNames.map((link, index) =>{
                            return (
                              <li key={index}>
                                <a className={link.cName} href={link.url}>
                                  {link.name}
                                </a>
                              </li>
                            );
                          })}
                    </ul>
                    </div>

                    <div className='admin-details'>
                        <div className='profile-pic'>
                            <img src={profilePic} width={"55px"} height={"55px"} alt="people washing"></img>
                        </div>
                        <div className='profile-name'>
                            Reujoy E.
                        </div>
                    </div>
                </div>
                </nav>
            </header>
      )

  }
}

export default Header