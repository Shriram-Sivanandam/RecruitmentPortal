import "./App.css";
import Landing from "./components/Landing/Landing"; //don't remove this for now please
import Signup from "./components/Signup/Signup";
import TakeQuizBtn from "./components/TakeQuizBtn/TakeQuizBtn";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import StudentList from "./components/StudentList/StudentList";
// import TakeQuizBtn from "./components/TakeQuizBtn/TakeQuizBtn";
import Dashboard from "./components/Dashboard/Dashboard";
import ManagementQuiz from "./components/ManagementQuiz/ManagementQuiz";
import ThankYou from "./components/ThankYou/ThankYou";
import Quizbox from "./components/Dashboard/Quizbox";

function App() {
  return (
    <div className="App">
      <ManagementQuiz />
      {/* <Landing />
      <Signup />
      <Dashboard />
      <Quizbox /> */}
    </div>
  );
}

export default App;
