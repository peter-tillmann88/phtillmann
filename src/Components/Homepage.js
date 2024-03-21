import React from 'react';
import './Homepage.css'; // Make sure the CSS path is correct
//import { ReactComponent as TwitterIcon } from './icons/twitter.svg'; // Icons are React components
//import { ReactComponent as LinkedInIcon } from './icons/linkedin.svg';
//import { ReactComponent as DiscordIcon } from './icons/discord.svg';
//import { ReactComponent as InstagramIcon } from './icons/instagram.svg';

function HomePage() {
  return (
    <div className="container">
      <div className="social-links">
        {/* Icons as components, linking to your profiles */}
        {/* <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
        <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
        <a href="https://discordapp.com/users/yourhandle" target="_blank" rel="noopener noreferrer"><DiscordIcon /></a>
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a> */}
      </div>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="content">
        <div className="text-section">
          <h1>Hello, I'm</h1>
          <h2>Peter Tillmann</h2>
          <p>Software Engineer</p>
          <button>Download Resume</button>
        </div>
        <div className="profile-pic-section">
          <img src="profile-pic.jpeg" alt="Peter Tillmann" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
