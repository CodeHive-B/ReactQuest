import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Login from "./pages/Login";
import FetchUser from "./pages/FetchUser"; 
import ConditionalRendering from "./pages/ConditionalRendering";
import Footer from "./Footer";
import ListsKeys from "./pages/ListsKeys";

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
            <Route path="conditional_rendering" element={<ConditionalRendering/>} />
            <Route path="lists_keys" element={<ListsKeys/>} />
          </Routes>
        </Router>
        <Footer author='Felipe Pastana' />
      </div>
      
    )
}

export default App;