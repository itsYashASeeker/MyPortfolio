import { BrowserRouter, Navigate, Route, Routes, redirect, useNavigate } from "react-router-dom"
import Home from "./Home"
import SecP from "./SecP"
import "../src/css/App.css";
import axios from "axios";

function App() {

  function RedirectHome() {

    return (
      <Navigate to="/" />
    )
  }

  return (
    <BrowserRouter>
      <Routes>

        {/* <Route exact path="/r" element={<Home />} /> */}
        <Route exact path="/" element={<SecP />} />
        <Route path="*" element={<RedirectHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
