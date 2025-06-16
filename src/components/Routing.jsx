import { Route, Routes } from "react-router-dom";
import ContactMe from "../pages/ContactMe";
import About from "../pages/About";
import Services from "../pages/Services";
import App from "../App";
import Home from "../pages/Home";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Routing;
