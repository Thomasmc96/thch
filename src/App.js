import "./App.css";

// Import routing components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import internal components
// import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Tools from "./components/tools/Tools";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import NotFound from "./components/errors/NotFound";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
