import "./App.css";
import { Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
// Reusable Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
