import { useState, useEffect } from "react";
import {
  Calendar,
  Droplet,
  Info,
  MapPin,
  AlertTriangle,
  Users,
  ExternalLink,
  ArrowRight,
  Cloud,
  Sun,
} from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";


interface AnimatedCounterProps {
  target: number;
  label: string;
}

const AnimatedLogo = () => {
  return (
    <div className="animated-logo-container">
      <div className="ripple-effect"></div>
      <div className="droplet-container">
        <Droplet size={48} className="animated-droplet" />
        <div className="small-droplet droplet-1"></div>
        <div className="small-droplet droplet-2"></div>
        <div className="small-droplet droplet-3"></div>
      </div>
    </div>
  );
};

interface Testimonial {
  id: number;
  name: string;
  village: string;
  image: string;
  quote: string;
}

// Random Data
const testimonials = [
  {
    id: 1,
    name: "Ashutosh",
    village: "Mithila",
    image: "/rengoku2.jpg",
    quote:
      "JalSetu's rainwater harvesting techniques helped me save 30% water while increasing crop yield by 20%.",
  },
  {
    id: 2,
    name: "Akash",
    village: "Attingal",
    image: "/rengoku2.jpg",
    quote:
      "With smart irrigation methods from JalSetu, my farm survived last year's drought when others struggled.",
  },
  {
    id: 3,
    name: "Athul",
    village: "Kollam",
    image: "/rengoku2.jpg",
    quote:
      "The flood warning system saved our livestock and crops. The preparation guidance was invaluable.",
  },
];

// Animated Stats Counter
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Animation will trigger when component is in view
      const interval = setInterval(() => {
        setCount((prevCount) => {
          const nextCount = prevCount + Math.ceil(target / 20);
          if (nextCount >= target) {
            clearInterval(interval);
            return target;
          }
          return nextCount;
        });
      }, 50);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timeout);
  }, [target]);

  return (
    <div className="stat-item">
      <div className="stat-number">{count}</div>
      <p className="stat-label">{label}</p>
    </div>
  );
};

// Weather Animation Component
const WeatherAnimation = () => {
  return (
    <div className="weather-animation">
      <div className="cloud cloud-1">
        <Cloud size={20} />
      </div>
      <div className="cloud cloud-2">
        <Cloud size={14} />
      </div>
      <div className="sun">
        <Sun size={100} />
      </div>
      <div className="rain-container">
        <div className="raindrop raindrop-1"></div>
        <div className="raindrop raindrop-2"></div>
        <div className="raindrop raindrop-3"></div>
        <div className="raindrop raindrop-4"></div>
        <div className="raindrop raindrop-5"></div>
      </div>
    </div>
  );
};
// Hero Section
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Hero = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <section className="hero-section">
      <div className="hero-background-animation">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      <div className="hero-container">
        <div className="hero-icon-container">
          <div className="hero-icon-wrapper">
            <AnimatedLogo />
          </div>
        </div>
        <h1 className="hero-title fade-in">JalSetu</h1>
        <p className="hero-subtitle slide-in">
          Empowering Rural Communities for Water Resilience
        </p>
        <p className="hero-description fade-in-delay">
          Bridging knowledge gaps, providing tools, and building resilience for
          sustainable water management in rural India
        </p>
        <div className="hero-buttons">
          <button
            className="hero-button scale-on-hover"
            onClick={() => navigate("/education")}
          >
            <Info size={18} className="button-icon" />
            <span>Get Educated</span>
          </button>
          <button className="hero-button scale-on-hover" onClick={() => navigate("/smartig")}>
            <Droplet size={18} className="button-icon" />
            <span>Irrigation Guide</span>
          </button>
          <button className="hero-button scale-on-hover">
            <AlertTriangle size={18} className="button-icon" />
            <span>Disaster Help</span>
          </button>
          <button className="hero-button scale-on-hover">
            <Users size={18} className="button-icon" />
            <span>Join Campaigns</span>
          </button>
        </div>
      </div>
      <WeatherAnimation />
      <div className="scroll-down-indicator">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
      </div>
    </section>
  );
};

// Mission Section
const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector(".mission-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="mission-section">
      <div className={`mission-container ${isVisible ? "visible" : ""}`}>
        <h2 className="section-title">Our Mission</h2>
        <div className="mission-cards">
          <div className="mission-card slide-in-left">
            <div className="mission-icon-wrapper">
              <Info size={32} className="mission-icon" />
            </div>
            <h3 className="mission-card-title">Education</h3>
            <p className="mission-card-text">
              Empowering farmers with knowledge about sustainable water
              management and conservation techniques.
            </p>
          </div>

          <div className="mission-card fade-in">
            <div className="mission-icon-wrapper">
              <AlertTriangle size={32} className="mission-icon" />
            </div>
            <h3 className="mission-card-title">Preparedness</h3>
            <p className="mission-card-text">
              Building resilience against water-related disasters through early
              warnings and response strategies.
            </p>
          </div>

          <div className="mission-card slide-in-right">
            <div className="mission-icon-wrapper">
              <Users size={32} className="mission-icon" />
            </div>
            <h3 className="mission-card-title">Community</h3>
            <p className="mission-card-text">
              Creating a network of water-conscious communities working together
              towards sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="testimonial-card hover-float">
      <div className="testimonial-header">
        <div className="testimonial-image-container">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-image"
          />
        </div>
        <div>
          <h4 className="testimonial-name">{testimonial.name}</h4>
          <p className="testimonial-location">
            <MapPin size={14} className="location-icon" /> {testimonial.village}
          </p>
        </div>
      </div>
      <p className="testimonial-quote">"{testimonial.quote}"</p>
      <a href="#" className="testimonial-link">
        Read full story <ExternalLink size={14} className="link-icon" />
      </a>
    </div>
  );
};

// Testimonials Section
const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector(".testimonials-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="testimonials-section">
      <div className={`testimonials-container ${isVisible ? "visible" : ""}`}>
        <h2 className="section-title">Farmer Stories</h2>
        <p className="section-description">
          Real success stories from communities that have transformed their
          water management practices
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-wrapper fade-in-up delay-${index}`}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
        <div className="testimonials-more">
          <button className="view-more-button pulse-animation">
            View more stories{" "}
            <ArrowRight size={16} className="button-icon-right" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Stats Section
const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector(".stats-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="stats-section">
      <div className={`stats-container ${isVisible ? "visible" : ""}`}>
        <div className="stats-grid">
          <AnimatedCounter target={0} label="Farmers Empowered" />
          <AnimatedCounter target={0} label="Villages Supported" />
          <AnimatedCounter target={0} label="Average Water Saved %" />
          <AnimatedCounter target={0} label="Community Campaigns" />
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
      location: "Attingal, Kerala",
    },
    {
      id: 2,
      title: "Farmer's Water Conservation Summit",
      date: "May 25, 2025",
      location: "Trivandrum",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector(".events-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="events-section">
      <div className={`events-container ${isVisible ? "visible" : ""}`}>
        <h2 className="section-title">Upcoming Events</h2>
        <div className="events-grid">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`event-card hover-expand slide-in-${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <div className="event-content">
                <Calendar className="event-icon pulse-animation" />
                <div>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-date">{event.date}</p>
                  <p className="event-location">
                    <MapPin size={14} className="location-icon-small" />{" "}
                    {event.location}
                  </p>
                  <button className="event-register hover-animation">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Home Page Component
export default function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        if (isVisible) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Hero />
        <Mission />
        <Testimonials />
        <Stats />
        <UpcomingEvents />
      </div>
      <Footer />
    </div>
  );
}
