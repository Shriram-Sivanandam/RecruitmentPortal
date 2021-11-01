import axios from "axios";
import React , {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminDashboard from "./components/admin/Dashboard/AdminDashboard";
import QuesUpload from "./components/admin/Dashboard/UploadQuestions";
import Dashboard from "./components/Dashboard/Dashboard";
import Quizbox from "./components/Dashboard/Quizbox";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import ManagementQuiz from "./components/ManagementQuiz/ManagementQuiz";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./components/SignUp";
import StickerWall from "./components/StickerWall/StickerWall";
import StudentList from "./components/StudentList/StudentList";
import ThankYou from "./components/ThankYou/ThankYou";
import Register from './components/Register'
import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./contexts/AuthContext";
function App() {
  const [token,setToken] = useState("")
  const {currentUser} = useAuth();
  console.log(currentUser)
  if (currentUser){
    currentUser.getIdToken(true).then(async (response) => {
      await setToken(response)
      console.log(token)
    })

    
  }

  // const studentRegister = () => {
  //   axios.post('http://localhost:3001/student/register', {
  //     name: "Shriram",
  //     regno: "20BCT0262",
  //     phone_no:"9300486523",
  //     domains: ["MGMT", "TECH"]


  //   },{
  //     headers: {
  //       'Authorization': `Bearer ${token}` 
  //     }
  //   }).then(() => {
  //     console.log("success")
  //   }).catch((err) => {
  //     console.log(err)
  //   })

  // }

  // const slotBook = () => {
  //   axios.post('http://localhost:3001/student/apti_test', {

  //   })
  // }

  

  // const assignTest = () => {
  //   axios.post('http://localhost:3001/student/apti_test' , {
  //     test_id:"TEST102"

  //   }, {
  //     headers: {
  //             'Authorization': `Bearer ${token}` 
  //           }

      
  //   }).then(() => {
  //     console.log("hogya assign")
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }

  // const updateUser = () => {
  //   axios.patch('http://localhost:3001/student/profile/update', {
  //     name: "Shriram",
  //     domains: ["TECH"]


  //   }, {
  //     headers: {
  //                   'Authorization': `Bearer ${token}` 
  //                 }

  //   }).then(() => {
  //     console.log("hello")
  //   }).catch((error) => {
  //     console.log(error)
  //   })

  // }

  // const getUser = () => {
  //   axios.get('http://localhost:3001/student/profile', {
  //     headers: {
  //                         'Authorization': `Bearer ${token}` 
  //                       }
      

  //   }
    
  //   ).then((response) =>{
  //     console.log("hello")
  //     console.log(response.data)
  //   }).catch((err) =>{
  //     console.log(err)

  //   })
  // }


  // const getQuestions = () => {
  //   axios.get('http://localhost:3001/student/start_test', {
  //     headers: {
  //                               'Authorization': `Bearer ${token}` 
  //                             }
            
  //   }).then((response) =>{
  //     console.log(response.data)
  //   }).catch((err) => {
  //     console.log(err)
  //     console.log("because of ishaan")
  //   })
  // }

  // const scoreCalculate = () => {
  //   axios.post('http://localhost:3001/student/score', {
  //     answers:["4test","1test2"]
  //   }, {
  //     headers: {
  //       'Authorization': `Bearer ${token}` 
  //     }
                            

  //   }).then((response) =>{
  //     console.log(response.data)

  //   }).catch((err) => {
  //     console.log(err)

  //   })
  // }



  




  
  


  return (
    <div className="App">
      {/* <Landing1 /> */}
      {/* <button onClick={scoreCalculate}>Hello</button> */}
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute
              exact
              path="/management-quiz"
              component={ManagementQuiz}
            />
            <PrivateRoute
              exact
              path="/admin-dashboard"
              component={AdminDashboard}
            />
            <PrivateRoute
              exact
              path="/upload-questions"
              component={QuesUpload}
            />
            <PrivateRoute exact path="/stickers" component={StickerWall} />
            <PrivateRoute exact path="/student-list" component={StudentList} />
            <PrivateRoute exact path="/apt-quiz" component={Quizbox} />
            <PrivateRoute path="/thankyou" component={ThankYou} />
            <Route path="/signup" component={SignUp} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
