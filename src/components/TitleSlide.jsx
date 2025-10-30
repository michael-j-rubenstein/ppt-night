import React from 'react';
import './TitleSlide.css';

const TitleSlide = ({ title, subtitle, buttonText, onStart }) => {
  return (
    <div className="slide-content title-slide">
      <div className="title-slide-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button className="start-btn" onClick={onStart}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default TitleSlide;
