import Home from "./Pages/Home/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Experience from "./Pages/Home/Experience";
import Projects from "./Pages/Home/Projects";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
