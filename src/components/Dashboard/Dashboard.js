import React from 'react'
import Nav2 from '../Nav/Nav2'
import technical from '../../assets/Technical.svg'
import management from '../../assets/Managment.svg'
import design from '../../assets/Design.svg'
import './Dashboard.css'

function Dashboard() {
    return (
        <>
        <Nav2 />
        <div className="card-deck mx-auto my-5">
  <div className="card">
    <img className="card-img-top mx-auto img-fluid " src={technical} alt="Cardcap"/>
    <div className="card-body">
      <h5 className="card-title mx-auto">Technical</h5>
      <p className="card-text">The domain for people who want to venture into the various niches of technology right from web and app development to forthcoming domains like ML and data science.</p>
   
    <button type="button" className="btn btn-dark mx-auto" data-toggle="modal" data-target="#exampleModal"><h6>Take Quiz</h6></button>
   
    </div>
  </div>
  <div className="card">
    <img className="card-img-top mx-auto img-fluid " src={management} alt="Cardcap"/>
    <div className="card-body">
      <h5 className="card-title mx-auto">Management</h5>
      <p className="card-text">This Domain is the Backbone of our community. Learn and understand the do's, don'ts, and intricacies of hosting various events, managing daily operations, creating effective content and much more.</p>
    
      <button type="button" className="btn btn-dark mx-auto" data-toggle="modal" data-target="#exampleModal"><h6>Take Quiz</h6></button>
     
    </div>
  </div>
  <div className="card">
    <img className="card-img-top img-fluid  mx-auto py-2" src={design} alt="Cardcap"/>
    <div className="card-body">
      <h5 className="card-title mx-auto">Design</h5>
      <p className="card-text mx-auto">This Domain is for those whose creativity has no limits. Create Smart and Intuitive Designs that not only plant your ideas but also makes a statement. </p>
      
      <button type="button" className="btn btn-dark mx-auto " data-toggle="modal" data-target="#exampleModal"><h6>Take Quiz</h6></button>
     
    </div>
  </div>
</div>
<div class="modal" tabindex="-1" role="dialog" id="exampleModal">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title mx-4">Instructions</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <ol>
          <li>
          <p>There will be 2 quizzes - Aptitude (20 questions) and Domain Specific (15 questions)</p>
          </li>
          <li>
            <p>Once you click on next question your response will be automatically saved</p>
          </li>
          <li>
            <p>
            You cannot go back to the questions you answered or skipped earlier.
            </p>
          </li>
        </ol>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Start Quiz</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
            
        </>
    )
}

export default Dashboard
