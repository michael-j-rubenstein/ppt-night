import React from 'react';
import './Option.css';

const Option = ({ option, isSelected, onSelect }) => {
  return (
    <div
      className={`option ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <div className="option-image">
        {option.image ? (
          <img src={option.image} alt={option.label} />
        ) : (
          option.emoji
        )}
      </div>
      <div className="option-label">{option.label}</div>
    </div>
  );
};

export default Option;
