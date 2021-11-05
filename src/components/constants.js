import React, {useState} from 'react'
import { useAuth } from "../contexts/AuthContext";
export default function Constants() {
  //   const [token , setToken] = useState("");
  //   const {currentUser} = useAuth();
  // if (currentUser){
  //   currentUser.getIdToken().then(async (response) => {
  //     await setToken(response)
  //   //   console.log(token)
  //   })

    
  // }

    return {
        token : "token"
    } 
}


