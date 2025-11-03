import React from 'react';
import './HyperspeedBackground.css';

// the component will fill the height/width of its parent container, edit the CSS to change this
// the options below are the default values

const HyperspeedBackground = () => {
  return (
    <div className="hyperspeed-container">
      <div className="hyperspeed-animation">
        {/* Create animated stars/particles for hyperspeed effect */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="hyperspeed-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HyperspeedBackground;