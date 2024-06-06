import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Help from "./Help";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/help" element={<Help/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
