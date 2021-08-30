import { TextField } from '@material-ui/core'
import React from 'react'
import landing_illustration from '../../assets/landing_illustration.svg'
import Nav from '../Nav/Nav'
import './Landing.css'


function Landing() {
    return (
        <>
        <Nav />
     
            <div className="container my-lg-5 py-lg-5">
                <div className="row my-auto">
                    <div className="col my-auto">
                        <img src={landing_illustration} alt="landing_illustration"style={{width:"500px"}} className="img-fluid"/>

                    </div>
                    <div className="col">
                        <h6>LOG IN </h6>
                        <form>
                            <div className="container">
                                <div className="row header">
                                    <h4 className="mx-auto my-auto headertext">Sign in with Registration Number</h4>
                                </div>
                                <div className="row bottom">
                                    <div className="container mx-auto my-auto">
                                        <div className="row mt-3">
                                            <h6 className="mx-auto headertext1">Sign in with credentials</h6>

                                        </div>

                                        <div className="row mb-3">
                                            <TextField className="input mx-auto"  color="default" id="filled-basic" label="Registration Number" variant="filled" placeholder="" type="text" />
                                        </div>
                                        <div className="row my-3">
                                            <TextField className="input mx-auto"  id="filled-basic" label="Password" variant="filled"  placeholder="" type="password"/>
                                        </div>
                                        <div className="row mt-3">
                                            <h6 className="mx-auto headertext1">Don't have an account yet ? <a className="signup"  href="/signup"><span >Sign up</span></a></h6>

                                        </div>
                                    <div className="row">
                                    <button type="button" className="btn btn-light mx-auto"><h6>SIGN IN</h6></button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        
                    </div>

                </div>
            </div>
     
            
        </>
    )
}

export default Landing
