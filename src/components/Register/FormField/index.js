import React, { useRef , useState } from "react";

export const Name = ({ setValue , setError, placeholder }) => {
    const name = useRef();

    const handleSubmit = () => {
        if (name.current.value !== null) {
            console.log("type" , typeof(name.current.value))
            setValue(name.current.value)
        }else{
            console.log('hello')
            setError("Please Enter Name")
    
        }

    }
   
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
            ref={name}
            className="inputField"
            placeholder={placeholder}
            required={true}
            onChange={(e) => {
                e.preventDefault();
                handleSubmit();

            }}
          />

            </form>
             
            
        </div>
    )
}
export const Email = ({ setValue , setError, placeholder }) => {
    const email = useRef();
    
    const handleSubmit = () => {
        if (email.current.value !== undefined) {
            setValue(email.current.value)
        }else{
            setError("Please Enter Email")
    
        }

    }
    return (
        <div>
             <input
            ref={email}
            className="inputField"
            placeholder={placeholder}
            type="email"
            onChange={(e) => {
                e.preventDefault();
                handleSubmit()
            }}
          />
            
        </div>
    )
}

export const PhoneNo = ({ setValue , setError, placeholder }) => {
    const phoneNo = useRef();
    // const answerRef1 = useRef();
   
    const handleSubmit = () => {
        if (phoneNo.current.value !== undefined) {
            setValue(phoneNo.current.value)
        }else{
            setError("Please Enter Phone Number")
    
        }

    }
    return (
        <div>
            {/* <input
            ref={answerRef1} 
            /> */}
             <input
            ref={phoneNo}
            className="inputField"
            placeholder={placeholder}
            onChange={(e) => {
                e.preventDefault();
                handleSubmit()
            }}
          />
            
        </div>
    )
}

export const Password = ({ setValue , setError, placeholder }) => {
    const password = useRef();
    const confirmPassword = useRef();
    const handleSubmit = () => {
        if (password.current.value !== undefined && password.current.value === confirmPassword.current.value) {
            setError(null)
            setValue(password.current.value)
        }else{
            if(password.current.value !== confirmPassword.current.value){
                setError("Please Make sure the Two Passwords Match")
            }else{
                setError("Please enter valid Password")
            }
    
        }
        console.log("1" , password.current.value)
        console.log("2" , confirmPassword.current.value)

    }
   
    return (
        <div>
             <input
            ref={password}
            className="inputField mb-5"
            placeholder="Enter Your Password"
            onChange={(e) => {
                e.preventDefault();
                handleSubmit()
            }}
          />
          <input
            ref={confirmPassword}
            className="inputField"
            placeholder="Confirm Password"
            onChange={(e) => {
                e.preventDefault();
                handleSubmit()

            }}
          />
            
        </div>
    )
}

export const DomainChoose = ({ setValue , setError }) => {
    const [selected , setSelected] = useState([])


    const component = {
        "Tech" : "TECH",
        "Management" : "MGMT" , 
        "Design" : "DESIGN"
    }

   

    const onToggle = (domain) => {
        
        if ( selected.includes(component[domain])) {
            const index = selected.indexOf(component[domain])
            console.log(index)
            // setSelected(selected.splice(index,index))
            selected.splice(index,1)
        }else{

            setSelected([...selected, component[domain]])
        }

        if (selected !== []){
            setValue(selected)
        }

        

    }
    console.log(selected)


   
    



    return(
        <div >
            <h3>You may select one or more than one domain(s)</h3>
            <button   onClick={(e) => {
                e.preventDefault();
                onToggle("Tech")
            }} className={ selected.includes("TECH") ? "selected" : "buttons"}>
                    Tech
            </button>
            <button   onClick={(e) => {
                e.preventDefault();
                onToggle("Design")
            }} className={ selected.includes("DESIGN") ? "selected" : "buttons"}>
                Design
            </button>
            <button   onClick={(e) => {
                e.preventDefault();
                onToggle("Management")
            }} className={ selected.includes("MGMT") ? "selected" : "buttons"}>
                Management

            </button>
        </div>


    )
}


export const DateChoose = ({setValue , setError}) => {
    const [selected , setSelected] = useState({
        month: "",
        date: "",
        day: ""
    })

    const dates = [
        {
            month: "October",
            date: "03",
            day: "Sun"
        },
        {
            month: "October",
            date: "04",
            day: "Mon"
        },
        {
            month: "October",
            date: "05",
            day: "Tues"
        },
        {
            month: "October",
            date: "06",
            day: "Wed"
        }
    ]







    return (
        <div>
             {  dates.map((date, index) => {
                 <button>
                     <div>
                         <h3>date.month</h3>
                         <h3>date.date</h3>
                         <h3>date.day</h3>

                     </div>
                 </button>
             }) }
            

        </div>

    )

}




