import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from  "./pages/Layout"
import Home from  "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}></Route>
          <Route path="/home" element={<Layout><Home/></Layout>}></Route>
          <Route path="/about" element={<Layout><About/></Layout>}></Route>
          <Route path="/contact" element={<Layout><Contact/></Layout>}></Route>
          <Route path="/help" element={<Layout><Help/></Layout>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
