import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import SecP from "./SecP"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SecP />} />
        <Route exact path="/r" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
