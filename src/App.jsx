import { BrowserRouter, Navigate, Route, Routes, redirect, useNavigate } from "react-router-dom"
import Home from "./Home"
import SecP from "./SecP"


function App() {

  function RedirectHome() {
    // const navigate = useNavigate();
    // navigate("/");
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
