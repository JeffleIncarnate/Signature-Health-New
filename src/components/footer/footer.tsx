import "./footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Links">
        <Link href="/about">About Us</Link>
        <i>•</i>
        <Link href="/services">Our Services</Link>
        <i>•</i>
        <Link href="/contact">Contact Us</Link>
      </div>

      <div className="Socials">
        <Link href={"/contact"}>
          <FontAwesomeIcon className="Socials__Icon" icon={faEnvelope} />
        </Link>

        <a
          href="https://www.linkedin.com/company/signaturehealthgroup/"
          target="_blank"
        >
          <FontAwesomeIcon className="Socials__Icon" icon={faLinkedin} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61563617425142"
          target="_blank"
        >
          <FontAwesomeIcon className="Socials__Icon" icon={faFacebook} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
