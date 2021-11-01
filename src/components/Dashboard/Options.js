import React from 'react'
import "./Options.css";
function Options({ option , text }) {
    return (
        <div className="d-flex justify-content-start border m-2 rounded p-3 option  ">
            <div className="dot mr-2 mt-1" >
                <span className="p-2">{ option}</span>
                
            </div>
            <div >
                <h4>{text}</h4>
            </div>
            
        </div>
    )
}

export default Options
