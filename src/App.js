import React from "react";
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
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      {/* <Landing1 /> */}
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
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
