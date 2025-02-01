import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Login from "./pages/Login";
import FetchUser from "./pages/FetchUser"; 
import Footer from "./Footer";

function App() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/login" element={<Login />} />
            <Route path="/fetch-user" element={<FetchUser />} />
          </Routes>
        </Router>
        <Footer author='Felipe Pastana' />
      </div>
      
    )
}

export default App;