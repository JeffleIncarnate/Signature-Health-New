import "./navbar.scss";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ path }: { path: string }) => {
  return (
    <>
      <nav className="Navbar">
        <div className="Navbar__Home">
          <Link href="/" className={path === "/" ? "nav__active" : ""}>
            Home
          </Link>
        </div>

        <div className="Navbar__Links">
          <Link
            href="/about"
            className={path === "/about" ? "nav__active" : ""}
          >
            About Us
          </Link>
          <a
            href="/services"
            className={path === "/services" ? "nav__active" : ""}
          >
            Our Services
          </a>
          <Link
            href="/contact"
            className={path === "/contact" ? "nav__active" : ""}
          >
            Contact Us
          </Link>
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
        <Link href="/about">About Us</Link>
        <Link href="/services">Our Services</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/join-our-team">Join Our Team</Link>
      </div>
    </>
  );
};

export default Navbar;
