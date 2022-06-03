import { bgcolor } from '@mui/system'
import React, {Component, Profiler} from 'react'
import './Header.css'
import {LinkNames} from './Navlinks'
import profilePic from '../../assets/profile.png'
import logo from '../../assets/drycelogy.png'




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
                      <i class={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars" } style={{color: 'black'}}></i>
                    </div>

                    <div id="logo">
                        <h3><img src={logo} width={"41px"} height={"41px"} alt="logo" ></img>DrYce</h3>
                    </div>


                    <div className='admin-details'>
                        <div className='profile-pic'>
                            <img src={profilePic} width={"55px"} height={"55px"} alt="profilePic"></img>
                        </div>
                        <div className='profile-name'>
                            Reujoy E. Amissah
                        </div>
                    </div>
                </div>

                    {/*links for menu*/}
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
                    </div>{/*links for menu END*/}


                </nav>
            </header>
      )

  }
}

export default Header