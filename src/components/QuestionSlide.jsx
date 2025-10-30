import React from 'react';
import Option from './Option';
import './QuestionSlide.css';

const QuestionSlide = ({ slide, selectedOption, onSelectOption }) => {
  return (
    <>
      <div className="slide-header">
        <h2>Step {slide.step}</h2>
        <p>{slide.title}</p>
      </div>
      <div className="slide-content">
        <div className="question">{slide.question}</div>
        <div className="options-grid">
          {slide.options.map((option, index) => (
            <Option
              key={index}
              option={option}
              isSelected={selectedOption === index}
              onSelect={() => onSelectOption(slide.feature, index, option)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default QuestionSlide;
