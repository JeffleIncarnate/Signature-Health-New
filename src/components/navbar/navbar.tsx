"use client";

import "./navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ path }: { path: string }) => {
  return (
    <>
      <nav className="Navbar">
        <div className="Navbar__Home">
          <a href="/" className={path === "/" ? "nav__active" : ""}>
            Home
          </a>
        </div>

        <div className="Navbar__Links">
          <a href="/about" className={path === "/about" ? "nav__active" : ""}>
            About Us
          </a>
          <a
            href="/services"
            className={path === "/services" ? "nav__active" : ""}
          >
            Our Services
          </a>
          <a
            href="/contact"
            className={path === "/contact" ? "nav__active" : ""}
          >
            Contact Us
          </a>
        </div>

        <div className="Navbar__Small">
          <FontAwesomeIcon
            onClick={() => {
              let entireNav = document.getElementById("Navbar__Side");

              entireNav!.style.width = "100lvw";
            }}
            className="Navbar__Small__Icon"
            icon={faBars}
          />
        </div>
      </nav>

      <div id="Navbar__Side">
        <FontAwesomeIcon
          onClick={() => {
            let entireNav = document.getElementById("Navbar__Side");

            entireNav!.style.width = "0";
          }}
          className="Navbar__Side__Icon"
          icon={faXmark}
        />
        <a href="/about">About Us</a>
        <a href="/services">Our Services</a>
        <a href="/contact">Contact Us</a>
        <a href="/ourTeam">Our Team</a>
        <a href="/joinOurTeam">Join Our Team</a>
      </div>
    </>
  );
};

export default Navbar;
