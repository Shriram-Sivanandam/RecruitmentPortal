import axios from "axios";
import React , {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminDashboard from "./components/admin/Dashboard/AdminDashboard";
import QuesUpload from "./components/admin/Dashboard/UploadQuestions";
import Dashboard from "./components/Dashboard/Dashboard";
import Quizbox from "./components/Dashboard/Quizbox";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Login from "./components/Login/Login";
import ManagementQuiz from "./components/ManagementQuiz/ManagementQuiz";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./components/SignUp";
import StickerWall from "./components/StickerWall/StickerWall";
import StudentList from "./components/StudentList/StudentList";
import ThankYou from "./components/ThankYou/ThankYou";
import Register from './components/Register'
import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./contexts/AuthContext";
import Constants from './components/constants'
import Landing1 from './components/Landing/Landing1'

function App() {

  const [token,setToken] = useState("")
  const {currentUser} = useAuth();
  if (currentUser){
    currentUser.getIdToken().then((response) => {
      setToken(response)
    })


    
  }
  console.log(token)
//   var common_axios = axios.create({
//     baseURL: 'http://localhost:3000'
// });

// // Set default headers to common_axios ( as Instance )
// common_axios.defaults.headers.common['Authorization'] =  `Bearer ${token}` ;
// // Check your Header
// console.log(common_axios.defaults.headers);
//   // const {token} = Constants()
//   // console.log(token)

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


  const studentRegister = () => {
    axios.post('http://localhost:3000/student/register', {
      email: "prerit.rawtani2020@vitstudent.ac.in",
      password: "Password1234",
      name: "Prerit",
      regno: "20BCT0262",
      phone_no:"9300486573",
      domains: ["TECH"]


    }).then(() => {
      alert("hello")
      console.log("success")
    }).catch((err) => {
      alert("error")
      console.log(err)
    })

  }

  const totalTests = () => {
    axios.get('http://localhost:3000/student/test').then((response) => {
      console.log(response.data)
    })
  }

  // const slotBook = () => {
  //   axios.post('http://localhost:3001/student/apti_test', {

  //   })
  // }

  

  const assignTest = () => {
    axios.post('http://localhost:3000/student/apti_test' , {
      test_id:"TEST101"
    }).then(() => {
      console.log("hogya assign")
    }).catch((err) => {
      console.log(err.message)
    })
  }

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
  const defaultOptions = {
    baseURL: "http://localhost:3000",
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });




  const getUser =  () => {
    try{
       axios.get('http://localhost:3000/student/profile').then((response) => {
         alert("hey")
                
                console.log(token)
        console.log(response.data)
      }).catch((err) =>{
        alert("error")
        console.log(err)
  
      })

    }catch(err){
      console.log(err)
    }
   
  }


  const getQuestions = () => {
    axios.get('http://localhost:3000/student/start_test').then((response) =>{
      console.log(response.data)
    }).catch((err) => {
      console.log(err)
      console.log("because of ishaan")
    })
  }

  const scoreCalculate = () => {
    axios.post('http://localhost:3000/student/score', {
      answers:["11:09","Brother","Uncle", "2°" , "7" , "564" , "121" , "The cost price is Rs.50" , "20m" , "9-Apr"]
    }, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
                            

    }).then((response) =>{
      console.log(response.data)

    }).catch((err) => {
      console.log(err)

    })
  }

  const managementQuiz = () => {
    axios.post('http://localhost:3000/student/mgmt_quiz',{
      
        "answer1":"Hwssdwdwdwdw",
        "answer2":"Idwdwwddwds",
        "answer3":"Chdwdwdwdwwota Ustaad",
        "answer4":"Becdwdwdwdause I am",
        "answer5":"A Gdwdwdwwdwdwenius"
    
    }).then((response) => {
      console.log(response.data)

    }).catch((err) => {
      console.log(err)
    })
  }

  

  




  
  


  return (
    <div className="App">
      {/* <Landing1 /> */}
      <button onClick={assignTest}>Hello</button>
    
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/quiz-dashboard" component={Dashboard} />
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
            {/* <PrivateRoute exact path="/stickers" component={StickerWall} /> */}
            <PrivateRoute exact path="/student-list" component={StudentList} />
            <PrivateRoute exact path="/apt-quiz" component={Quizbox} />
            <PrivateRoute path="/thankyou" component={ThankYou} />
            <Route path="/signup" component={SignUp} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
             <Route path="/" component={Landing1} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
