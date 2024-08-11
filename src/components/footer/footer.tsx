import "./footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Links">
        <a href="/about">About Us</a>
        <i>•</i>
        <a href="/services">Our Services</a>
        <i>•</i>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="Socials">
        <a href="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>

        <a
          href="https://www.linkedin.com/company/signaturehealthgroup/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61563617425142"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
