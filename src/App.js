import "./App.css";
import Landing from "./components/Landing/Landing"; //don't remove this for now please
import Signup from "./components/Signup/Signup";
import TakeQuizBtn from "./components/TakeQuizBtn/TakeQuizBtn";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";

function App() {
  return (
    <div className="App">
      <CountdownTimer />
    </div>
  );
}

export default App;
