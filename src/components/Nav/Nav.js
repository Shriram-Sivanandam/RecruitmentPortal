import React from 'react'
import insta_logo from '../../assets/instagram-logo.png'
import facebook_logo from '../../assets/facebook.png'
import linkedin_logo from '../../assets/linkedin.png'

import './Nav.css'

function Nav() {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark " id="nav" style={{backgroundColor: "transparent"}}> 
      <a className="navbar-brand ml-lg-5 pl-lg-5 ml-xs-0 pl-xs-0" href="/" ><h3 className="logo_text"><b>EASY</b>RECRUIT</h3></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <div className="mr-lg-5 pr-lg-5" style={{display:'flex'}}>
            <li className="nav-item active mx-2 my-3"><a href="  " className="button current"><img style={{width:"24px"}} src={insta_logo} alt="ig_logo"/></a>
               
            </li>
            <li className="nav-item mx-2 my-3"><a href=" " className="button current"><img style={{width:"24px"}} src={facebook_logo} alt="fb_logo"/></a>
                
            </li>
            <li class="nav-item mx-2 my-3 current" id="linkedin_logo">
            <a href="#0" className="button"><img src={linkedin_logo} style={{width:"24px"}} alt="linkedin_logo"/></a>
            </li>
            </div>
            </ul>
        </div>

      </nav>
 
            
        </>
    )
}

export default Nav
