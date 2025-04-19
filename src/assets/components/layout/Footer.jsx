import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="cyber-footer">
      <div className="footer-socials">
        <a href="#" aria-label="GitHub"><FaGithub /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" aria-label="CodePen"><FaCodepen /></a>
      </div>
      <div className="footer-signature">
        Carbo © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;