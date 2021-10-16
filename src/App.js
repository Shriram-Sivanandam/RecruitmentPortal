import React from "react";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import Profile from "./components/Profile";
import ManagementQuiz from "./components/ManagementQuiz/ManagementQuiz";
import ThankYou from "./components/ThankYou/ThankYou";
import Dashboard from "./components/Dashboard/Dashboard";
import AdminDashboard from "./components/admin/Dashboard/AdminDashboard";
import Quizbox from "./components/Dashboard/Quizbox";
import QuesUpload from "./components/admin/Dashboard/UploadQuestions";
import StudentList from "./components/StudentList/StudentList";

function App() {
  return (
    <div className="App">
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
            <PrivateRoute exact path="/student-list" component={StudentList} />
            <PrivateRoute exact path="/apt-quiz" component={Quizbox} />
            <PrivateRoute path="/thankyou" component={ThankYou} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
