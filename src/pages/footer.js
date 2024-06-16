import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook, FaLinkedin, FaPatreon } from 'react-icons/fa';
import { BsSubstack } from 'react-icons/bs'; // Import Substack icon from react-icons/bs

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content text-center">
        <nav>
          <h6 className="footer-title">Services</h6> 
          <a className="link link-hover">Areas of Expertise</a>
          <a className="link link-hover">Case Studies</a>
          <a className="link link-hover">Services</a>
        </nav> 
        <nav>
          <h6 className="footer-title">About</h6> 
          <a className="link link-hover">About</a>
          <a className="link link-hover">Experience</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Contact</h6> 
          <a className="link link-hover">Get in Touch</a>
        </nav>
      </footer> 
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current">
            <path d="M12 1.75C6.615 1.75 2.25 6.115 2.25 11.5S6.615 21.25 12 21.25 21.75 16.885 21.75 11.5 17.385 1.75 12 1.75zm0 17.5c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5 7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5zm0-13a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 9.5a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
          </svg>
          <p> Ross Brannigan <br/>Providing innovative solutions since 2006</p>
        </aside> 
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://x.com/rossbrannigan" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="fill-current" />
            </a>
            <a href="https://www.linkedin.com/in/ross-brannigan/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="fill-current" />
            </a>
            <a href="https://www.patreon.com/user?u=10068956&view_as=patron" target="_blank" rel="noopener noreferrer">
              <FaPatreon size={24} className="fill-current" />
            </a>
            <a href="https://rossbrannigan.substack.com" target="_blank" rel="noopener noreferrer">
              <BsSubstack size={24} className="fill-current" />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
