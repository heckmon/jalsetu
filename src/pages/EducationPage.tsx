import { useEffect, useState, useRef } from "react";
import {
  Book,
  Video,
  Headphones,
  ExternalLink,
  Download,
  PlayCircle,
  Pause,
  Volume2,
  Droplet,
  ChevronRight,
  Award,
  Filter,
  Search,
  Heart,
  Share2,
  Bookmark,
} from "lucide-react";
import "../styles/education.css";
import "../styles/styles.css";
import { createRoot } from "react-dom/client";
import SmartIrrigationGuide from "./SmartIrrigationGuide";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Testimonial Component Type
export interface TestimonialProps {
  id: number;
  name: string;
  village: string;
  image: string;
  beforeImage: string;
  afterImage: string;
  quote: string;
}

// Audio Player Component Type
export interface AudioProps {
  id: number;
  title: string;
  language: string;
  duration: string;
  thumbnail: string;
  listens: number; // Added listens property
}

// Video Card Component Type
export interface VideoProps {
  id: number;
  title: string;
  views: string;
  duration: string;
  thumbnail: string;
  date: string; // Added date property
}

// Mock Data
const infographics = [
  {
    id: 1,
    title: "Drip Irrigation System",
    imageUrl: "/rengoku2.jpg",
    description:
      "Learn how drip irrigation systems save water and increase crop yields",
    downloadable: true,
    likes: 124,
    downloads: 89,
  },
  {
    id: 2,
    title: "Rainwater Harvesting",
    imageUrl: "/rengoku2.jpg",
    description:
      "Simple techniques to collect and store rainwater for future use",
    downloadable: true,
    likes: 98,
    downloads: 76,
  },
  {
    id: 3,
    title: "Water Conservation",
    imageUrl: "/rengoku2.jpg",
    description: "Daily practices for saving water in agricultural operations",
    downloadable: true,
    likes: 156,
    downloads: 112,
  },
  {
    id: 4,
    title: "Groundwater Management",
    imageUrl: "/rengoku2.jpg",
    description: "Sustainable practices for managing groundwater resources",
    downloadable: true,
    likes: 87,
    downloads: 54,
  },
  {
    id: 5,
    title: "Crop Rotation",
    imageUrl: "/rengoku2.jpg",
    description: "How different crops affect water usage and soil health",
    downloadable: true,
    likes: 112,
    downloads: 67,
  },
  {
    id: 6,
    title: "Water-Efficient Farming",
    imageUrl: "/rengoku2.jpg",
    description: "Methods to maximize crop yield while minimizing water usage",
    downloadable: true,
    likes: 143,
    downloads: 98,
  },
];

const audioContent = [
  {
    id: 1,
    title: "Regional Water Rights Explained",
    language: "Hindi",
    duration: "12:35",
    thumbnail: "/rengoku2.jpg",
    listens: 256,
  },
  {
    id: 2,
    title: "Seasonal Irrigation Planning",
    language: "Tamil",
    duration: "08:45",
    thumbnail: "/rengoku2.jpg",
    listens: 182,
  },
  {
    id: 3,
    title: "Water Quality Testing Methods",
    language: "Telugu",
    duration: "15:20",
    thumbnail: "/rengoku2.jpg",
    listens: 209,
  },
];

const videoContent = [
  {
    id: 1,
    title: "Building a Low-Cost Rainwater Harvesting System",
    views: "326",
    duration: "18:22",
    thumbnail: "/rengoku2.jpg",
    date: "2 weeks ago",
  },
  {
    id: 2,
    title: "How to Test Soil Moisture Effectively",
    views: "218",
    duration: "12:15",
    thumbnail: "/rengoku2.jpg",
    date: "1 month ago",
  },
  {
    id: 3,
    title: "Water-Conserving Irrigation Techniques",
    views: "412",
    duration: "22:30",
    thumbnail: "/rengoku2.jpg",
    date: "3 weeks ago",
  },
];

// Enhanced Hero Section with animation
const EducationHero = () => {
  return (
    <section className="hero-section animated-gradient">
      <div className="hero-overlay"></div>
      <div className="hero-container fade-in">
        <h1 className="hero-title slide-in-top">Water Awareness & Education</h1>
        <p className="hero-description slide-in-left">
          Empowering rural communities with knowledge and skills for sustainable
          water management
        </p>
        <div className="hero-buttons slide-in-bottom" style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="#infographics" className="hero-button button-bounce">
            <Book size={18} className="button-icon" />
            Infographics
          </a>
          <a href="#multimedia" className="hero-button button-bounce">
            <Video size={18} className="button-icon" />
            Multimedia
          </a>
          <a href="#experts" className="hero-button button-bounce">
            <Award size={18} className="button-icon" />
            Expert Insights
          </a>
        </div>
      </div>
      <div className="scroll-down-indicator">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
    </section>
  );
};

// Enhanced Search and Filter Component
const SearchAndFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="search-filter-container">
      <div className="search-bar">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Search educational resources..."
          className="search-input"
        />
      </div>
      <div className="filter-container">
        <button
          className="filter-button"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter size={16} /> Filter
        </button>
        {isFilterOpen && (
          <div className="filter-dropdown fade-in-fast">
            <div className="filter-group">
              <h4>Resource Type</h4>
              <label className="filter-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkbox-text">Infographics</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkbox-text">Audio</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkbox-text">Video</span>
              </label>
            </div>
            <div className="filter-group">
              <h4>Language</h4>
              <label className="filter-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkbox-text">English</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkbox-text">Hindi</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkbox-text">Tamil</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" defaultChecked />
                <span className="checkbox-text">Telugu</span>
              </label>
            </div>
            <button className="apply-filter">Apply Filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

// Enhanced Infographics Section
const Infographics = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="infographics" className="infographics-section">
      <div className="container">
        <h2 className="section-title">Educational Infographics</h2>
        <p className="section-description">
          Visual guides to help you understand and implement water conservation
          techniques
        </p>

        <SearchAndFilter />

        <div className="infographics-grid">
          {infographics.map((infographic) => (
            <div
              key={infographic.id}
              className={`infographic-card ${
                hoveredCard === infographic.id ? "card-hover" : ""
              }`}
              onMouseEnter={() => setHoveredCard(infographic.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="infographic-bookmark-button">
                <Bookmark size={20} />
              </div>
              <div className="infographic-image-container">
                <img
                  src={infographic.imageUrl}
                  alt={infographic.title}
                  className="infographic-image"
                />
                <div className="infographic-overlay">
                  <div className="infographic-buttons">
                    <button className="infographic-action-button">
                      <ExternalLink size={18} />
                    </button>
                    {infographic.downloadable && (
                      <button className="infographic-action-button">
                        <Download size={18} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="infographic-content">
                <h3 className="infographic-title">{infographic.title}</h3>
                <p className="infographic-description">
                  {infographic.description}
                </p>
                <div className="infographic-stats">
                  <div className="stat">
                    <Heart size={14} /> <span>{infographic.likes}</span>
                  </div>
                  <div className="stat">
                    <Download size={14} /> <span>{infographic.downloads}</span>
                  </div>
                  <div className="stat">
                    <Share2 size={14} />
                  </div>
                </div>
                <div className="infographic-actions">
                  <button className="view-button">
                    View Full Size{" "}
                    <ExternalLink size={16} className="icon-right" />
                  </button>
                  {infographic.downloadable && (
                    <button className="download-button">
                      Download <Download size={16} className="icon-right" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Audio Player with animation
const AudioPlayer = ({ audio }: { audio: AudioProps }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      progressRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressRef.current as NodeJS.Timeout);
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    } else if (progressRef.current) {
      clearInterval(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div className="audio-player">
      <img
        src={audio.thumbnail}
        alt={audio.title}
        className="audio-thumbnail"
      />
      <div className="audio-content">
        <h3 className="audio-title">{audio.title}</h3>
        <div className="audio-meta">
          <span className="audio-language">Language: {audio.language}</span>
          <span className="audio-duration">{audio.duration}</span>
          <span className="audio-listens">{audio.listens} listens</span>
        </div>
        <div className="audio-controls">
          <button
            className={`play-button ${isPlaying ? "play-button-active" : ""}`}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={16} /> : <PlayCircle size={16} />}
          </button>
          <div className="progress-bar">
            <div
              className="progress progress-animated"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <button className="volume-button">
            <Volume2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Enhanced Video Card with hover effects and animations
const VideoCard = ({ video }: { video: VideoProps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`video-card ${isHovered ? "video-card-hover" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="video-thumbnail-container">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="video-thumbnail"
        />
        <div
          className={`play-overlay ${isHovered ? "play-overlay-visible" : ""}`}
        >
          <button className="play-overlay-button pulse-animation">
            <PlayCircle size={28} />
          </button>
        </div>
        <div className="video-duration">{video.duration}</div>
        <div className="video-date">{video.date}</div>
      </div>
      <div className="video-content">
        <h3 className="video-title">{video.title}</h3>
        <div className="video-meta">
          <span className="video-views">{video.views} views</span>
          <div className="video-actions">
            <button className="video-action-button">
              <Heart size={14} />
            </button>
            <button className="video-action-button">
              <Share2 size={14} />
            </button>
            <button className="video-action-button">
              <Bookmark size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Multimedia Section
// Enhanced Multimedia Section with animations
const Multimedia = () => {
  const [activeTab, setActiveTab] = useState("audio");

  return (
    <section id="multimedia" className="multimedia-section">
      <div className="container">
        <h2 className="section-title slide-in-top">Audio & Video Resources</h2>
        <p className="section-description slide-in-bottom">
          Learn at your own pace with our collection of audio and video content
          in multiple languages
        </p>

        <div className="multimedia-tabs">
          <button
            className={`multimedia-tab ${
              activeTab === "audio" ? "multimedia-tab-active" : ""
            }`}
            onClick={() => setActiveTab("audio")}
          >
            <Headphones size={18} className="tab-icon" /> Audio Lessons
          </button>
          <button
            className={`multimedia-tab ${
              activeTab === "video" ? "multimedia-tab-active" : ""
            }`}
            onClick={() => setActiveTab("video")}
          >
            <Video size={18} className="tab-icon" /> Video Tutorials
          </button>
        </div>

        <SearchAndFilter />

        {activeTab === "audio" && (
          <div className="multimedia-audio fade-in">
            <div className="audio-grid">
              {audioContent.map((audio, index) => (
                <div
                  key={audio.id}
                  className="slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AudioPlayer audio={audio} />
                </div>
              ))}
            </div>
            <div className="view-more-container">
              <button className="view-more-button button-pulse">
                Load More Audio <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {activeTab === "video" && (
          <div className="multimedia-video fade-in">
            <div className="video-grid">
              {videoContent.map((video, index) => (
                <div
                  key={video.id}
                  className="slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <VideoCard video={video} />
                </div>
              ))}
            </div>
            <div className="view-more-container">
              <button className="view-more-button button-pulse">
                Load More Videos <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Call To Action Section
// Enhanced Call To Action Section with animations
const CallToAction = () => {
  return (
    <section className="cta-section animated-gradient-cta">
      <div className="cta-overlay"></div>
      <div className="cta-container">
        <h2 className="cta-title slide-in-top">
          Ready to Transform Your Farm?
        </h2>
        <p className="cta-description slide-in-left">
          Put your knowledge into action with our Smart Irrigation Guide and
          join community campaigns
        </p>
        <div className="cta-buttons slide-in-bottom">
          <a
            href="#"
            className="cta-primary-button button-bounce"
            onClick={() => {
              const root = createRoot(
                document.getElementById("root") as HTMLElement
              );
              root.render(<SmartIrrigationGuide />);
            }}
          >
            <Droplet size={18} className="button-icon" />
            Try Smart Irrigation Guide
          </a>
          <a href="#" className="cta-secondary-button button-bounce">
            <Award size={18} className="button-icon" />
            Join a Community Campaign
          </a>
        </div>
        <div className="cta-stats fade-in">
          <div className="cta-stat">
            <div className="cta-stat-number count-animation">0</div>
            <div className="cta-stat-label">Farmers Helped</div>
          </div>
          <div className="cta-stat">
            <div className="cta-stat-number count-animation">0</div>
            <div className="cta-stat-label">Villages Covered</div>
          </div>
          <div className="cta-stat">
            <div className="cta-stat-number count-animation">0%</div>
            <div className="cta-stat-label">Water Saved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Education Page Component
export default function EducationPage() {
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <EducationHero />
        <Infographics />
        <Multimedia />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
