import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="mystical-header">
      <div className="stars-overlay"></div>
      <div className="header-content">
        <h1>Samy Oserapis</h1>
        <p className="tagline">Where Reality Bends and Mystery Transcends</p>
        <div className="mystical-symbol">
          <svg viewBox="0 0 100 100" className="rotating-symbol">
            <circle cx="50" cy="50" r="45" className="outer-circle" />
            <polygon points="50,5 95,90 5,90" className="triangle" />
            <circle cx="50" cy="50" r="5" className="center-point" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;