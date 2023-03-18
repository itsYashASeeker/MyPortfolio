import React from 'react';
import Home from "./pages/Home.js";
import {HashRouter, Route, Link, Routes} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
