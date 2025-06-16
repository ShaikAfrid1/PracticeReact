import { Link, Route, Routes } from "react-router-dom";
import About from "../pages/About";
const NavBar = () => {
  return (
    <div>
      <nav className="bg-emerald-950 text-white flex justify-between items-center  p-10">
        <Link to="/" className="text-2xl hover:underline">
          Afrid Shaik
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/about" className="text-xl hover:underline">
            About
          </Link>
          <Link to="/contact" className="text-xl hover:underline">
            Contact Me
          </Link>
          <Link to="/services" className="text-xl hover:underline">
            Services
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
