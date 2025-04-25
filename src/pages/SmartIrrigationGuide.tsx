import { JSX, useEffect, useState } from "react";
import {
  Droplet,
  CloudRain,
  Thermometer,
  Wind,
  Umbrella,
  ChevronDown,
  ChevronUp,
  Download,
  AlertCircle,
  Info,
  Check,
  Calendar,
  MapPin,
  Clock,
  BarChart,
  Gift,
} from "lucide-react";
import "../styles/SmartIrrigationGuide.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface CropOption {
  id: string;
  name: string;
  waterNeed: string;
  waterAmount: string;
  schedule: string;
}

interface SoilOption {
  id: string;
  name: string;
  retentionFactor: number;
  note: string;
}

interface LocationOption {
  id: string;
  name: string;
  climateFactor: number;
  rainfall: string;
}

interface IrrigationTool {
  id: string;
  name: string;
  cost: string;
  waterSaving: string;
  subsidy: string;
  image: string;
  featured?: boolean;
}

interface WeatherDay {
  day: string;
  temp: string;
  humidity: string;
  rainfall: string;
  icon: JSX.Element;
  precipitation: string;
}

interface IrrigationTip {
  stage: string;
  tips: string[];
}

interface WaterEstimate {
  crop: string;
  soil: string;
  location: string;
  baseWaterNeed: string;
  estimatedWaterAmount: number;
  schedule: string;
  soilNote: string;
  rainfall: string;
}

const cropOptions: CropOption[] = [
  {
    id: "rice",
    name: "Rice",
    waterNeed: "High",
    waterAmount: "1200-1400 mm",
    schedule: "Keep 5cm standing water until flowering",
  },
  {
    id: "wheat",
    name: "Wheat",
    waterNeed: "Medium",
    waterAmount: "450-650 mm",
    schedule: "4-6 irrigations during growth cycle",
  },
  {
    id: "maize",
    name: "Maize",
    waterNeed: "Medium",
    waterAmount: "500-800 mm",
    schedule: "Critical at silking and tasseling stages",
  },
  {
    id: "cotton",
    name: "Cotton",
    waterNeed: "Medium",
    waterAmount: "700-1300 mm",
    schedule: "Regular intervals, crucial during boll formation",
  },
  {
    id: "sugarcane",
    name: "Sugarcane",
    waterNeed: "Very High",
    waterAmount: "1500-2500 mm",
    schedule: "Maintain adequate moisture throughout",
  },
  {
    id: "pulses",
    name: "Pulses",
    waterNeed: "Low",
    waterAmount: "350-500 mm",
    schedule: "Crucial during flowering and pod formation",
  },
  {
    id: "vegetables",
    name: "Vegetables",
    waterNeed: "Medium to High",
    waterAmount: "400-800 mm",
    schedule: "Regular watering based on specific vegetable",
  },
];

const soilOptions: SoilOption[] = [
  {
    id: "sandy",
    name: "Sandy",
    retentionFactor: 0.7,
    note: "Drains quickly, needs frequent irrigation",
  },
  {
    id: "loamy",
    name: "Loamy",
    retentionFactor: 1,
    note: "Good drainage and water retention",
  },
  {
    id: "clay",
    name: "Clay",
    retentionFactor: 1.3,
    note: "Retains water longer, less frequent irrigation",
  },
  {
    id: "silt",
    name: "Silty",
    retentionFactor: 1.1,
    note: "Good water retention, moderate drainage",
  },
  {
    id: "black",
    name: "Black Cotton Soil",
    retentionFactor: 1.2,
    note: "Expand when wet, crack when dry",
  },
];

const locationOptions: LocationOption[] = [
  {
    id: "north",
    name: "Northern Region",
    climateFactor: 1.1,
    rainfall: "Moderate",
  },
  {
    id: "south",
    name: "Southern Region",
    climateFactor: 0.9,
    rainfall: "High",
  },
  { id: "east", name: "Eastern Region", climateFactor: 1.2, rainfall: "High" },
  { id: "west", name: "Western Region", climateFactor: 1.3, rainfall: "Low" },
  {
    id: "central",
    name: "Central Region",
    climateFactor: 1,
    rainfall: "Moderate",
  },
];

const irrigationTools: IrrigationTool[] = [
  {
    id: "drip",
    name: "Drip Irrigation Kit",
    cost: "₹5,000 - ₹15,000 per acre",
    waterSaving: "40-60%",
    subsidy: "55% under PMKSY",
    image: "/rengoku2.jpg",
    featured: true,
  },
  {
    id: "sprinkler",
    name: "Sprinkler System",
    cost: "₹8,000 - ₹20,000 per acre",
    waterSaving: "30-50%",
    subsidy: "50% under PMKSY",
    image: "/rengoku2.jpg",
  },
  {
    id: "solar",
    name: "Solar Pump System",
    cost: "₹1,00,000 - ₹3,50,000",
    waterSaving: "Energy saving solution",
    subsidy: "70% under PM-KUSUM",
    image: "/rengoku2.jpg",
  },
  {
    id: "rainwater",
    name: "Rainwater Harvesting System",
    cost: "₹20,000 - ₹1,00,000",
    waterSaving: "Collects seasonal rain",
    subsidy: "50% under watershed programs",
    image: "/rengoku2.jpg",
  },
];

const weatherForecast: WeatherDay[] = [
  {
    day: "Today",
    temp: "32°C",
    humidity: "65%",
    rainfall: "0 mm",
    icon: <CloudRain size={24} />,
    precipitation: "5%",
  },
  {
    day: "Tomorrow",
    temp: "30°C",
    humidity: "70%",
    rainfall: "2 mm",
    icon: <CloudRain size={24} />,
    precipitation: "40%",
  },
  {
    day: "Day 3",
    temp: "29°C",
    humidity: "75%",
    rainfall: "10 mm",
    icon: <Umbrella size={24} />,
    precipitation: "80%",
  },
  {
    day: "Day 4",
    temp: "31°C",
    humidity: "60%",
    rainfall: "0 mm",
    icon: <Thermometer size={24} />,
    precipitation: "10%",
  },
  {
    day: "Day 5",
    temp: "30°C",
    humidity: "55%",
    rainfall: "0 mm",
    icon: <Wind size={24} />,
    precipitation: "5%",
  },
];

// Irrigation tips for different stages
const irrigationTips: IrrigationTip[] = [
  {
    stage: "Seedling",
    tips: [
      "Maintain consistent soil moisture to support germination",
      "Light, frequent watering for shallow roots",
      "Avoid over-watering to prevent damping off",
    ],
  },
  {
    stage: "Vegetative Growth",
    tips: [
      "Increase water amount as plants grow larger",
      "Water deeply to encourage deeper root growth",
      "Monitor soil moisture levels regularly",
    ],
  },
  {
    stage: "Flowering",
    tips: [
      "Critical period for water stress - maintain adequate moisture",
      "Avoid overhead irrigation to prevent flower damage",
      "Consider deficit irrigation strategies where appropriate",
    ],
  },
  {
    stage: "Fruit/Grain Development",
    tips: [
      "Maintain consistent irrigation to support yield development",
      "Reduce irrigation as crops approach maturity",
      "Monitor for signs of water stress",
    ],
  },
];

const ProgressSteps = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="progress-step">
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <div className={`step-circle ${currentStep >= 1 ? "active" : ""}`}>
          {currentStep > 1 ? <Check size={16} /> : "1"}
        </div>
        <div className="step-label">Select Crop</div>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <div className={`step-circle ${currentStep >= 2 ? "active" : ""}`}>
          {currentStep > 2 ? <Check size={16} /> : "2"}
        </div>
        <div className="step-label">Soil Type</div>
      </div>
      <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
        <div className={`step-circle ${currentStep >= 3 ? "active" : ""}`}>
          {currentStep > 3 ? <Check size={16} /> : "3"}
        </div>
        <div className="step-label">Location</div>
      </div>
      <div className={`step ${currentStep >= 4 ? "active" : ""}`}>
        <div className={`step-circle ${currentStep >= 4 ? "active" : ""}`}>
          4
        </div>
        <div className="step-label">Results</div>
      </div>
    </div>
  );
};

const Tooltip = ({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

const Notification = ({
  message,
  show,
  onClose,
}: {
  message: string;
  show: boolean;
  onClose: () => void;
}) => {
  return (
    <div className={`notification ${show ? "show" : ""}`}>
      <AlertCircle size={20} />
      <p>{message}</p>
      <button onClick={onClose} className="notification-close">
        ×
      </button>
    </div>
  );
};

export default function SmartIrrigationGuide() {
  const [selectedCrop, setSelectedCrop] = useState("");
  const [selectedSoil, setSelectedSoil] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [waterEstimate, setWaterEstimate] = useState<WaterEstimate | null>(
    null
  );
  const [showDetails, setShowDetails] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("estimate");
  const [currentStep, setCurrentStep] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [selectedTipIndex, setSelectedTipIndex] = useState(0);
  const [waterSavedCounter, setWaterSavedCounter] = useState(0);

  useEffect(() => {
    if (selectedCrop) setCurrentStep(Math.max(currentStep, 1));
    if (selectedSoil) setCurrentStep(Math.max(currentStep, 2));
    if (selectedLocation) setCurrentStep(Math.max(currentStep, 3));
    if (waterEstimate) setCurrentStep(4);
  }, [selectedCrop, selectedSoil, selectedLocation, waterEstimate]);

  useEffect(() => {
    // Simulate water saved counter
    const interval = setInterval(() => {
      setWaterSavedCounter((prev) => prev + Math.floor(Math.random() * 5));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const calculateWaterNeed = () => {
    if (!selectedCrop || !selectedSoil || !selectedLocation) {
      setAlertMessage("Please select all fields to get water estimate");
      return;
    }

    setAlertMessage(null);
    setLoading(true);

    // Simulate API call with a timeout
    setTimeout(() => {
      const crop = cropOptions.find((c) => c.id === selectedCrop);
      const soil = soilOptions.find((s) => s.id === selectedSoil);
      const location = locationOptions.find((l) => l.id === selectedLocation);

      if (!crop || !soil || !location) {
        setAlertMessage("Invalid selection. Please try again.");
        setLoading(false);
        return;
      }

      const waterAmountText = crop.waterAmount;
      const waterMatch = waterAmountText.match(/\d+/g);
      const waterValues = waterMatch ? waterMatch.map(Number) : [];
      const avgWaterAmount =
        waterValues.reduce((a, b) => a + b, 0) / waterValues.length;

      const adjustedWaterNeed =
        avgWaterAmount * soil.retentionFactor * location.climateFactor;

      setWaterEstimate({
        crop: crop.name,
        soil: soil.name,
        location: location.name,
        baseWaterNeed: crop.waterNeed,
        estimatedWaterAmount: Math.round(adjustedWaterNeed),
        schedule: crop.schedule,
        soilNote: soil.note,
        rainfall: location.rainfall,
      });

      setShowDetails(true);
      setLoading(false);

      // Show notification
      setNotificationMessage(
        "Water estimate calculated successfully! You can now view detailed recommendations."
      );
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }, 1500);
  };

  const resetForm = () => {
    setSelectedCrop("");
    setSelectedSoil("");
    setSelectedLocation("");
    setWaterEstimate(null);
    setShowDetails(false);
    setAlertMessage(null);
    setCurrentStep(1);
  };

  const handleCropChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCrop(e.target.value);
    if (e.target.value && !selectedSoil) {
      setNotificationMessage("Great! Now select your soil type.");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };
  const handleSoilChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSoil(e.target.value);
    if (e.target.value && !selectedLocation) {
      setNotificationMessage("Great! Now select your location.");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  return (
    <div className="smart-irrigation-guide">
      <Header />
      <div className="header-section">
        <h1 className="main-heading">Smart Irrigation Guide</h1>
        <p className="sub-heading">
          Calculate optimal water requirements for your crops based on local
          conditions
        </p>
      </div>

      <div className="water-statistics">
        <div className="water-saved">
          <div className="water-saving-counter">
            {waterSavedCounter.toLocaleString()}
          </div>{" "}
          liters of water saved by farmers using this tool
        </div>
      </div>

      {alertMessage && (
        <div className="alert-banner">
          <AlertCircle className="mr-2" />
          <p>{alertMessage}</p>
        </div>
      )}

      <div className="form-container">
        <div className="tab-navigation">
          <button
            className={`tab-button ${activeTab === "estimate" ? "active" : ""}`}
            onClick={() => setActiveTab("estimate")}
          >
            <Droplet size={18} />
            Water Estimate
          </button>
          <button
            className={`tab-button ${activeTab === "tips" ? "active" : ""}`}
            onClick={() => setActiveTab("tips")}
          >
            <Info size={18} />
            Irrigation Tips
          </button>
        </div>

        {activeTab === "estimate" && (
          <>
            <h2 className="section-title">Estimate Your Water Needs</h2>

            <ProgressSteps currentStep={currentStep} />

            <div className="form-grid">
              <div>
                <label className="input-label" htmlFor="crop">
                  Select Crop
                  <Tooltip text="Choose the crop you are planning to grow">
                    <Info size={16} className="info-icon" />
                  </Tooltip>
                </label>
                <select
                  id="crop"
                  className="select-input"
                  value={selectedCrop}
                  onChange={handleCropChange}
                >
                  <option value="">-- Select Crop --</option>
                  {cropOptions.map((crop) => (
                    <option key={crop.id} value={crop.id}>
                      {crop.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="input-label" htmlFor="soil">
                  Select Soil Type
                  <Tooltip text="Different soils have different water retention properties">
                    <Info size={16} className="info-icon" />
                  </Tooltip>
                </label>
                <select
                  id="soil"
                  className="select-input"
                  value={selectedSoil}
                  onChange={handleSoilChange}
                >
                  <option value="">-- Select Soil --</option>
                  {soilOptions.map((soil) => (
                    <option key={soil.id} value={soil.id}>
                      {soil.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="input-label" htmlFor="location">
                  Select Region
                  <Tooltip text="Your location affects climate conditions and rainfall patterns">
                    <Info size={16} className="info-icon" />
                  </Tooltip>
                </label>
                <select
                  id="location"
                  className="select-input"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="">-- Select Region --</option>
                  {locationOptions.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button-group">
              <button
                onClick={calculateWaterNeed}
                className={`calculate-button ${loading ? "loading" : ""}`}
                disabled={loading}
              >
                <Droplet className="mr-2" size={20} />
                {loading ? "Calculating..." : "Calculate Water Need"}
              </button>

              <button onClick={resetForm} className="reset-button">
                Reset
              </button>
            </div>
          </>
        )}

        {activeTab === "tips" && (
          <div className="irrigation-tips-container">
            <h2 className="section-title">Irrigation Best Practices</h2>

            <div className="tips-navigation">
              {irrigationTips.map((tip, index) => (
                <button
                  key={tip.stage}
                  className={`tip-nav-button ${
                    selectedTipIndex === index ? "active" : ""
                  }`}
                  onClick={() => setSelectedTipIndex(index)}
                >
                  {tip.stage}
                </button>
              ))}
            </div>

            <div className="selected-tip-content">
              <h3>{irrigationTips[selectedTipIndex].stage} Stage</h3>
              <ul className="tip-list">
                {irrigationTips[selectedTipIndex].tips.map((tip, i) => (
                  <li key={i} className="tip-item">
                    <Check size={18} className="tip-icon" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {waterEstimate && (
        <div className="water-estimate">
          <div className="estimate-header">
            <h3 className="section-title">Water Requirement Estimate</h3>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="toggle-details-button"
            >
              {showDetails ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
              {showDetails ? "Hide Details" : "Show Details"}
            </button>
          </div>

          <div className="estimate-content">
            <div className="estimate-inputs">
              <div className="input-summary">
                <p className="input-label">Crop</p>
                <p className="input-value">{waterEstimate.crop}</p>
              </div>

              <div className="input-summary">
                <p className="input-label">Soil Type</p>
                <p className="input-value">{waterEstimate.soil}</p>
              </div>

              <div className="input-summary">
                <p className="input-label">Region</p>
                <p className="input-value">{waterEstimate.location}</p>
              </div>
            </div>

            <div className="water-amount-card">
              <Droplet className="droplet-icon" size={32} />
              <p className="input-label">Estimated Water Requirement</p>
              <div className="estimate-animation">
                <p className="water-amount">
                  {waterEstimate.estimatedWaterAmount} mm
                </p>
              </div>
              <p className="estimate-note">Based on your selections</p>
            </div>
          </div>

          {showDetails && (
            <div className="details-section">
              <h4 className="details-heading">
                <Calendar size={18} className="details-icon" />
                Irrigation Schedule
              </h4>
              <p className="schedule-info">{waterEstimate.schedule}</p>

              <div className="detailed-cards">
                <div className="detail-card">
                  <div className="detail-card-header">
                    <MapPin size={18} className="details-icon" />
                    <h5>Soil Consideration</h5>
                  </div>
                  <p>{waterEstimate.soilNote}</p>
                </div>

                <div className="detail-card">
                  <div className="detail-card-header">
                    <CloudRain size={18} className="details-icon" />
                    <h5>Regional Rainfall</h5>
                  </div>
                  <p>
                    Average rainfall in this region: {waterEstimate.rainfall}
                  </p>
                </div>

                <div className="detail-card">
                  <div className="detail-card-header">
                    <Clock size={18} className="details-icon" />
                    <h5>Watering Time</h5>
                  </div>
                  <p>
                    Best time: Early morning or late evening to minimize
                    evaporation
                  </p>
                </div>

                <div className="detail-card">
                  <div className="detail-card-header">
                    <BarChart size={18} className="details-icon" />
                    <h5>Efficiency Impact</h5>
                  </div>
                  <p>
                    Using drip irrigation can reduce water usage by up to 40%
                  </p>
                </div>
              </div>

              <div className="button-group justify-end">
                <button className="download-button">
                  <Download size={18} className="mr-2" />
                  Download Full Report
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="form-container">
        <h2 className="section-title">5-Day Weather Forecast</h2>
        <div className="weather-forecast-grid">
          {weatherForecast.map((day, index) => (
            <div key={index} className="weather-day-card">
              <h3 className="weather-day">{day.day}</h3>
              <div className="weather-icon">{day.icon}</div>
              <p className="weather-temp">{day.temp}</p>
              <div className="weather-details">
                <p>Humidity: {day.humidity}</p>
                <p>Rain: {day.rainfall}</p>
                <p>Chance: {day.precipitation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="form-container">
        <h2 className="section-title">Affordable Irrigation Solutions</h2>
        <div className="irrigation-tools-grid">
          {irrigationTools.map((tool) => (
            <div key={tool.id} className="tool-card">
              {tool.featured && (
                <div className="ribbon">
                  <span className="ribbon-content">Best Value</span>
                </div>
              )}
              <div className="tool-image">
                <img src={tool.image} alt={tool.name} />
              </div>
              <div className="tool-content">
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-cost">
                  <span>Cost:</span> {tool.cost}
                </p>
                <p className="water-saving">
                  <span>Water Saving:</span>
                  <span className="saving-amount">{tool.waterSaving}</span>
                </p>
                <div className="subsidy-info">
                  <Gift size={16} className="subsidy-icon" />
                  <p>{tool.subsidy}</p>
                </div>
              </div>
              <div className="tool-action">
                <button className="learn-more-button">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-section">
        <h2 className="section-title">Need Expert Advice?</h2>
        <p>
          Our agriculture experts are available to help with customized
          irrigation solutions
        </p>
        <button className="contact-button">Connect with Expert</button>
      </div>
      <div>
        <Footer />
      </div>

      <Notification
        message={notificationMessage}
        show={showNotification}
        onClose={() => setShowNotification(false)}
      />
    </div>
  );
}
