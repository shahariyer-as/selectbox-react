import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import InputForm from "./components/InputForm";

import InputData from "./components/InputData";
import MyData from "./components/MyData/MyData";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Routes>
        <Route path="" element={<InputData />}></Route>
        <Route path="input" element={<InputData />}></Route>
        <Route path="data" element={<MyData />}></Route>
      </Routes>
    </div>
  );
}

export default App;
