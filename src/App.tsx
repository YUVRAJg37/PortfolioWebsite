import Home from "./Pages/Home/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Experience from "./Pages/Home/Experience";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
}

export default App;
