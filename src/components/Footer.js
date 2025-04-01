import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Blockchain Platform. All rights reserved.</p>
        <div className="footer-links">
          <a href="/terms" className="footer-link">Terms of Service</a>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
        </div>
        <div className="footer-socials">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-icon">Discord</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
