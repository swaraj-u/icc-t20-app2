import Home from "./Home";
import Login from "./Login";
import Signin from "./Signin";
import Error from "./Error";
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [brightLow, setBrightLow] = useState(false); 
  const [isLoggedIn, setIsLoggedIn]  = useState(false);

  return (
    <Router basename="/icc-t20-app2">
    <div className="App">
      <Routes>
      <Route path="/" element={<Home brightLow={brightLow} setBrightLow={setBrightLow} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/home" element={<Home brightLow={brightLow} setBrightLow={setBrightLow} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={< Error />} />
      </Routes>
    </div>
    </Router>
  );   
}
 
export default App;
