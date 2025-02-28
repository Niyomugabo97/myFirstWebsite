import React from "react";
import { FaWhatsapp, FaXTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">Follow us on</p>
        <div className="social-icons">
          <a href="https://wa.me/0787592790" target="_blank" rel="noopener noreferrer" className="whatsapp">
            <FaWhatsapp />
          </a>
          <a href="https://x.com/your-profile" target="_blank" rel="noopener noreferrer" className="x-twitter">
            <FaXTwitter />
          </a>
          <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="facebook">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="linkedin">
            <FaLinkedin />
          </a>
        </div>
        <p className="footer-bottom">&copy; {new Date().getFullYear()} , All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
