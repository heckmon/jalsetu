import "../styles/header.css";
import { useState, useEffect } from 'react';
import { Droplet } from 'lucide-react';
import { createRoot } from 'react-dom/client';
import HomePage from '../pages/HomePage';
import EducationPage from '../pages/EducationPage';
import SmartIrrigationGuide from '../pages/SmartIrrigationGuide';
import { useNavigate } from "react-router-dom";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (component: React.ReactNode) => {
    const root = createRoot(document.getElementById('root') as HTMLElement);
    root.render(component);
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <div className="header-logo-animation">
            <Droplet className="logo-icon pulse-animation" />
          </div>
          <span className="logo-text">JalSetu</span>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="menu-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav className="desktop-nav">
          <a href="#" className="nav-link hover-animation" onClick={() => navigate("/")}>
            Home
          </a>
          <a href="#" className="nav-link hover-animation" onClick={() => navigate("/education")}>
            Education
          </a>
          <a href="#" className="nav-link hover-animation" onClick={() => navigate("/smartig")}>
            Irrigation
          </a>
          <a href="#" className="nav-link hover-animation">
            Disasters
          </a>
          <a href="#" className="nav-link hover-animation">
            Campaigns
          </a>
          <a href="#" className="nav-link hover-animation">
            Partners
          </a>
        </nav>
      </div>

      <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
        <ul className="mobile-nav-list">
          <li>
            <a href="#" className="mobile-nav-link" onClick={() => handleNavigation(<HomePage />)}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="mobile-nav-link" onClick={() => handleNavigation(<EducationPage />)}>
              Education
            </a>
          </li>
          <li>
            <a href="#" className="mobile-nav-link" onClick={() => handleNavigation(<SmartIrrigationGuide />)}>
              Irrigation
            </a>
          </li>
          <li>
            <a href="#" className="mobile-nav-link">
              Disasters
            </a>
          </li>
          <li>
            <a href="#" className="mobile-nav-link">
              Campaigns
            </a>
          </li>
          <li>
            <a href="#" className="mobile-nav-link">
              Partners
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;