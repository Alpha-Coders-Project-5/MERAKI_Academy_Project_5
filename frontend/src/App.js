import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>WELCOME TO FACEBOOK CLONE</h1>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;