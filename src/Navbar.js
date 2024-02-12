import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav>
          <div>
            <img
              src="https://pngimg.com/uploads/mercedes_logos/mercedes_logos_PNG18.png"
              alt=""
            />
          </div>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Carfilter">Service</Link>
            </li>

            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contactus</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
