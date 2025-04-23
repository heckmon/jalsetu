import { useState } from "react";
import {
  Calendar,
  Droplet,
  Info,
  MapPin,
  AlertTriangle,
  Users,
  ExternalLink,
} from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  village: string;
  image: string;
  quote: string;
}

// Mock Data
const testimonials = [
  {
    id: 1,
    name: "Ramesh Patel",
    village: "Dharmapuri",
    image: "/api/placeholder/80/80",
    quote:
      "JalSetu's rainwater harvesting techniques helped me save 30% water while increasing crop yield by 20%.",
  },
  {
    id: 2,
    name: "Lakshmi Devi",
    village: "Anantapur",
    image: "/api/placeholder/80/80",
    quote:
      "With smart irrigation methods from JalSetu, my farm survived last year's drought when others struggled.",
  },
  {
    id: 3,
    name: "Suresh Kumar",
    village: "Bellary",
    image: "/api/placeholder/80/80",
    quote:
      "The flood warning system saved our livestock and crops. The preparation guidance was invaluable.",
  },
];

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Droplet />
          <span>JalSetu</span>
        </div>

        {/* Mobile menu button */}
        <button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            width="24"
            height="24"
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

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <a href="#">Home</a>
          <a href="#">Education</a>
          <a href="#">Irrigation</a>
          <a href="#">Disasters</a>
          <a href="#">Campaigns</a>
          <a href="#">Partners</a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="nav-mobile">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Education</a>
            </li>
            <li>
              <a href="#">Irrigation</a>
            </li>
            <li>
              <a href="#">Disasters</a>
            </li>
            <li>
              <a href="#">Campaigns</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-logo">
          <Droplet size={48} />
        </div>
        <h1>JalSetu</h1>
        <p>Empowering Rural Communities for Water Resilience</p>
        <p>
          Bridging knowledge gaps, providing tools, and building resilience for
          sustainable water management in rural India
        </p>
        <div className="hero-buttons">
          <button>
            <Info size={18} />
            <span>Get Educated</span>
          </button>
          <button>
            <Droplet size={18} />
            <span>Irrigation Guide</span>
          </button>
          <button>
            <AlertTriangle size={18} />
            <span>Disaster Help</span>
          </button>
          <button>
            <Users size={18} />
            <span>Join Campaigns</span>
          </button>
        </div>
      </div>
    </section>
  );
};

// Mission Section
const Mission = () => {
  return (
    <section className="mission">
      <div className="mission-container">
        <h2>Our Mission</h2>
        <div className="mission-grid">
          <div className="mission-card">
            <div className="mission-card-icon">
              <Info size={32} />
            </div>
            <h3>Education</h3>
            <p>
              Empowering farmers with knowledge about sustainable water
              management and conservation techniques.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-card-icon">
              <AlertTriangle size={32} />
            </div>
            <h3>Preparedness</h3>
            <p>
              Building resilience against water-related disasters through early
              warnings and response strategies.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-card-icon">
              <Users size={32} />
            </div>
            <h3>Community</h3>
            <p>
              Creating a network of water-conscious communities working together
              towards sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-header">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="testimonial-image"
        />
        <div>
          <h4>{testimonial.name}</h4>
          <p>
            <MapPin size={14} /> {testimonial.village}
          </p>
        </div>
      </div>
      <p className="testimonial-card-quote">"{testimonial.quote}"</p>
      <a href="#" className="testimonial-card-link">
        Read full story <ExternalLink size={14} />
      </a>
    </div>
  );
};

// Testimonials Section
const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>Farmer Stories</h2>
        <p>
          Real success stories from communities that have transformed their
          water management practices
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <div className="testimonials-button">
          <button>
            View more stories <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

// Stats Section
const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stats-grid">
          <div>
            <div>10,000+</div>
            <p>Farmers Empowered</p>
          </div>
          <div>
            <div>215</div>
            <p>Villages Supported</p>
          </div>
          <div>
            <div>30%</div>
            <p>Average Water Saved</p>
          </div>
          <div>
            <div>150+</div>
            <p>Community Campaigns</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Upcoming Events
const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Rainwater Harvesting Workshop",
      date: "May 10, 2025",
      location: "Anantapur District",
    },
    {
      id: 2,
      title: "Farmer's Water Conservation Summit",
      date: "May 25, 2025",
      location: "Dharmapuri",
    },
  ];

  return (
    <section className="events">
      <div className="events-container">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-card-content">
                <Calendar />
                <div>
                  <h3>{event.title}</h3>
                  <p>{event.date}</p>
                  <p className="event-card-location">
                    <MapPin size={14} /> {event.location}
                  </p>
                  <button>Register Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <Droplet />
              <span>JalSetu</span>
            </div>
            <p>
              Empowering rural communities to achieve water resilience through
              education, tools, and community action.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Education</a>
              </li>
              <li>
                <a href="#">Irrigation Guide</a>
              </li>
              <li>
                <a href="#">Disaster Preparedness</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#">Campaigns</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Contact Us</h3>
            <p>Have questions or want to get involved? Reach out to us!</p>
            <a href="#" className="footer-contact-button">
              Contact Us
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 JalSetu. All rights reserved.</p>
          <div className="footer-social">
            <a href="#">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Home Page Component
export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <Mission />
        <Testimonials />
        <Stats />
        <UpcomingEvents />
      </main>
      <Footer />
    </div>
  );
}
