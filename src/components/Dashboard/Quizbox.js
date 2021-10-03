import React from 'react'
import Nav2 from '../Nav/Nav2'
import './Quizbox.css'

function Quizbox() {
    return (
        <>
        <Nav2 />
        <div className="container">
            <div className="row my-5">
                <div className="mr-auto">
                   <h4 style={{fontWeight:"600"}}> Question :<span style={{color:"#5E72E4",whiteSpace:"nowrap"}}> 1 / 10</span></h4>

                </div>
                <div className="ml-auto">
                <h4 style={{fontWeight:"600"}}> Time remaining : <span style={{color:"#23BE7B",whiteSpace:"nowrap"}}> 20:00 </span></h4>
                    
                </div>
            </div>
        <div className="quizbox container"> 
        <div className="row my-1">
            <b>
                <h3>
                    Question 1
                </h3>
            </b>

        </div>
        <div className="row my-3">
            <h5>
            What is the shortcut for the adding Auto Layout in Figma?
            </h5>
        </div>
        <div className="col">
            <div className="row my-2">
        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
   Ctrl + A
  </label>
</div></div>
<div className="row my-2">
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2">
    Shift + A
  </label>
</div></div>
<div className="row my-2">
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
  <label class="form-check-label" for="flexRadioDefault3">
    Tab + A
  </label>
</div></div>
<div className="row my-2">
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
  <label class="form-check-label" for="flexRadioDefault4">
   Alt + A
  </label>
</div></div>
      
        </div>
        <div className="row my-5">
              
                <div className="ml-auto">
                <button type="button" class="btn btn-primary" style={{backgroundColor:"#5E72E4"}}>Next Question</button>
                    
                </div>
            </div>

</div>


        </div>
       
       
        </>
    )
}


export default Quizbox
