import { Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import { Homepage } from "./components/Homepage";
import "./main.css";



function App() {
  return <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/easy" element={<Game gameMode={"easy"}/>}/>
    <Route path="/hard" element={<Game gameMode={"hard"}/>}/>
  </Routes>
  
}

export default App
