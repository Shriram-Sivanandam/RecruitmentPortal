import axios from "axios";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import AdminDashboard from "./components/admin/Dashboard/AdminDashboard";
import QuesUpload from "./components/admin/Dashboard/UploadQuestions";
import Dashboard from "./components/Dashboard/Dashboard";
import Quizbox from "./components/Dashboard/Quizbox";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Landing1 from "./components/Landing/Landing1";
import Login from "./components/Login/Login";
import ManagementQuiz from "./components/ManagementQuiz/ManagementQuiz";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import SignUp from "./components/SignUp";
import StudentList from "./components/StudentList/StudentList";
// import EnoughScroll from "./components/Enough/GsapScroll";
import ThankYou from "./components/ThankYou/ThankYou";
import Result from "./components/Result/Result";
import Rejected from "./components/Rejected/NotSelected";
import ResultCheck from "./components/ResultCheck/resultCheck";

function App() {
  const [token, setToken] = useState("");
  const { currentUser } = useAuth();

  console.log(currentUser);
  if (currentUser) {
    currentUser.getIdToken().then((response) => {
      setToken(response);
    });
  }
  // console.log(token);
  //   var common_axios = axios.create({
  //     baseURL: 'http://localhost:3000'
  // });

  // // Set default headers to common_axios ( as Instance )
  // common_axios.defaults.headers.common['Authorization'] =  `Bearer ${token}` ;
  // // Check your Header
  // console.log(common_axios.defaults.headers);
  //   // const {token} = Constants()
  //   // console.log(token)

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  axios.defaults.baseURL = "http://localhost:3000";
  // const studentRegister = () => {
  //   axios
  //     .post("http://localhost:3000/student/register", {
  //       email:"aryajay.wadhwani2020@vitstudent.ac.in",
  //   password:"abcd1234",
  //   name:"Arya Wadhwani",
  //   regno:"20BCE0399",
  //   phone_no:"7722043607",
  //   domains:["MANAGEMENT","TECH", "DESIGN"]
  //     })
  //     .then(() => {
  //       alert("hello");
  //       console.log("success");
  //     })
  //     .catch((err) => {
  //       alert("error");
  //       console.log(err.message);
  //     });
  // };

  // const totalTests = () => {
  //   axios.get("http://localhost:3000/student/test").then((response) => {
  //     console.log(response.data);
  //   });
  // };

  // const slotBook = () => {
  //   axios.post('http://localhost:3001/student/apti_test', {

  //   })
  // }

  // const assignTest = () => {
  //   axios
  //     .post("http://localhost:3000/student/apti_test", {
  //       test_id: "TEST101",
  //     })
  //     .then(() => {
  //       console.log("hogya assign");
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

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
      "Content-Type": "application/json",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    config.headers.Authorization = token ? `Bearer ${token}` : "";

    return config;
  });

  // const getUser = () => {
  //   try {
  //     axios
  //       .get("http://localhost:3000/student/profile")
  //       .then((response) => {
  //         alert("hey");

  //         console.log(token);
  //         console.log(response.data);
  //       })
  //       .catch((err) => {
  //         alert("error");
  //         console.log(err);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const getQuestions = () => {
  //   axios
  //     .get("http://localhost:3000/student/start_test")
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       console.log("because of ishaan");
  //     });
  // };

  // const scoreCalculate = () => {
  //   axios
  //     .post(
  //       "http://localhost:3000/student/score",
  //       {
  //         answers: [
  //           "11:09",
  //           "Brother",
  //           "Uncle",
  //           "2°",
  //           "7",
  //           "564",
  //           "121",
  //           "The cost price is Rs.50",
  //           "20m",
  //           "9-Apr",
  //         ],
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const managementQuiz = () => {
  //   axios
  //     .post("http://localhost:3000/student/mgmt_quiz", {
  //       answer1: "Hwssdwdwdwdw",
  //       answer2: "Idwdwwddwds",
  //       answer3: "Chdwdwdwdwwota Ustaad",
  //       answer4: "Becdwdwdwdause I am",
  //       answer5: "A Gdwdwdwwdwdwenius",
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="App">
      {/* <Landing1 /> */}
      {/* <button onClick={assignTest}>Hello</button> */}
      {/* <Enough /> */}
      {/* <CountdownTimer /> */}
      {/* <Countdown2 /> */}
      {/* <Quizbox /> */}
      {/* <Admin_app /> */}

      <Router>
        <Helmet>
          <meta
            property="og:image"
            itemprop="image"
            content="https://user-images.githubusercontent.com/77565177/141419096-6f33c6b7-7b1d-4acb-b89d-789a35998fac.png "
          />
        </Helmet>
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
            <PrivateRoute exact path="/student-list" component={StudentList} />
            <PrivateRoute exact path="/apt-quiz" component={Quizbox} />
            <Route path="/result" component={Result} />
            <Route path="/not-selected" component={Rejected} />
            <Route path="/result-check" component={ResultCheck} />
            <Route path="/thankyou" component={ThankYou} />
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
