import React from 'react';
import './Navigation.css';

const Navigation = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  canGoNext,
  isLastSlide
}) => {
  const progressDots = Array.from({ length: totalSlides }, (_, i) => {
    let className = 'progress-dot';
    if (i < currentSlide) className += ' completed';
    if (i === currentSlide) className += ' active';
    return <div key={i} className={className}></div>;
  });

  return (
    <div className="navigation">
      <button
        className="nav-btn"
        onClick={onPrev}
        disabled={currentSlide === 0}
      >
        Previous
      </button>

      <div className="progress">
        {progressDots}
      </div>

      <button
        className="nav-btn"
        onClick={onNext}
        disabled={!canGoNext}
      >
        {isLastSlide ? 'Start Over' : 'Next'}
      </button>
    </div>
  );
};

export default Navigation;
