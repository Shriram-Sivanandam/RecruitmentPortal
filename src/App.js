import "./App.css";
import Landing from "./components/Landing/Landing"; //don't remove this for now please
import Signup from "./components/Signup/Signup";
// import TakeQuizBtn from "./components/TakeQuizBtn/TakeQuizBtn";
import Dashboard from "./components/Dashboard/Dashboard";
import Quizbox from "./components/Dashboard/Quizbox";

function App() {
  return (
    <div className="App">
 
  <Landing/>
  <Signup/>
  <Dashboard/>
  <Quizbox/>
    </div>
  );
}

export default App;
