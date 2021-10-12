import { TextField } from '@material-ui/core'
import React from 'react'
import admin_login from '../../../assets/admin_login.svg'


function Adminlogin() {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark " id="nav" style={{backgroundColor: "#0a0a4b"}}> 
      <a className="navbar-brand ml-lg-5 pl-lg-5 ml-xs-0 pl-xs-0" href="/" ><h3 className="logo_text"><b>EASY</b>RECRUIT</h3></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
     

      </nav>
      <div className="container my-lg-5 py-lg-5">
                <div className="row my-auto">
                    <div className="col my-auto">
                        <img src={admin_login} alt="admin"style={{width:"500px"}} className="img-fluid"/>

                    </div>
                    <div className="col">
                        <h6>LOG IN </h6>
                        <form>
                            <div className="container">
                                <div className="row header">
                                    <h4 className="mx-auto my-auto headertext">Admin login</h4>
                                </div>
                                <div className="row bottom">
                                    <div className="container mx-auto my-auto">
                                        <div className="row mt-3">
                                            <h6 className="mx-auto headertext1">Log in with credentials</h6>

                                        </div>

                                        <div className="row mb-3">
                                            <TextField className="input mx-auto"  color="default" id="filled-basic" label="Admin id" variant="filled" placeholder="" type="text" />
                                        </div>
                                        <div className="row my-3">
                                            <TextField className="input mx-auto"  id="filled-basic" label="Password" variant="filled"  placeholder="" type="password"/>
                                        </div>
                                       
                                    <div className="row my-3">
                                    <button type="button" className="btn btn-light mx-auto"><h6>LOG IN</h6></button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Adminlogin
