import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Timer from "./Pages/Timer";
import Stopwatch from "./Pages/StopWatch";


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Timer/>}/>
        <Route path="/sw" element={<Stopwatch/>}/>
      </Routes>
    </Router>
  );
}

export default App;
