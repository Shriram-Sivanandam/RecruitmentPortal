import React, { useState } from "react";
import Constants from "./constants";
import axios from "axios";

function User() {
  const { token } = Constants();
  const [user , setUser] = useState([])
//   const getUser = () => {
//        axios
//       .get("http://localhost:3000/student/profile", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         // console.log("hello");
//         // console.log(response.data);
//        setUser(response.data);
//       })
//       .catch((err) => {
//           console.log("error")
//         console.log(err);
//       });
//   }

//   getUser()
  


  return {
   user: user
  };
}

export default User;
