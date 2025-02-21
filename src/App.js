import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Tools from "./components/tools/Tools";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import NotFound from "./components/errors/NotFound";

import ToucanThief from "./components/tools/projects/ToucanThief";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tools/toucan-thief" element={<ToucanThief />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
