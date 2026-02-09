import { useState, useEffect } from "react";
import Light from "./Light";
import PropTypes from "prop-types";
import "./css/TrafficLights.css";

const TrafficLights = ({ orientation = "vertical" }) => {
  const [activeLight, setActiveLight] = useState(0);
  const [clicks, setClicks] = useState({
    red: 0,
    yellow: 0,
    green: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLightClick = (color) => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      [color]: prevClicks[color] + 1,
    }));
  };

  return (
    <div className="traffic-lights-wrapper">
      <div className={`traffic-lights-container ${orientation}`}>
        <Light
          tlColor="red"
          isActive={activeLight === 0}
          onClick={() => handleLightClick("red")}
        />
        <Light
          tlColor="yellow"
          isActive={activeLight === 1}
          onClick={() => handleLightClick("yellow")}
        />
        <Light
          tlColor="green"
          isActive={activeLight === 2}
          onClick={() => handleLightClick("green")}
        />
      </div>

      <div className="traffic-lights-stats">
        <h3>Статистика кліків</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-color red">Червоний</span>
            <span className="stat-count">{clicks.red}</span>
          </div>
          <div className="stat-item">
            <span className="stat-color yellow">Жовтий</span>
            <span className="stat-count">{clicks.yellow}</span>
          </div>
          <div className="stat-item">
            <span className="stat-color green">Зелений</span>
            <span className="stat-count">{clicks.green}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

TrafficLights.propTypes = {
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
};

export default TrafficLights;