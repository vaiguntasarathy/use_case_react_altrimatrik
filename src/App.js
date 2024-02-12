import Navbar from "./Navbar";
import CarFilter from "./CarFilter.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarLogo from "./CarLogo.js";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<CarLogo />}></Route>
          <Route path="/CarFilter" element={<CarFilter />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
