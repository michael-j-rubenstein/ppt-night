import { useState, useEffect } from 'react';
import TitleSlide from './components/TitleSlide';
import QuestionSlide from './components/QuestionSlide';
import ResultsSlide from './components/ResultsSlide';
import Navigation from './components/Navigation';
import { slidesData } from './data/slidesData';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selections, setSelections] = useState({
    face: null,
    eyes: null,
    nose: null,
    lips: null,
    hair: null
  });
  const [selectedIndices, setSelectedIndices] = useState({});

  const totalSlides = slidesData.length;
  const currentSlideData = slidesData[currentSlide];

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Start over
      setCurrentSlide(0);
      setSelections({
        face: null,
        eyes: null,
        nose: null,
        lips: null,
        hair: null
      });
      setSelectedIndices({});
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleSelectOption = (feature, index, option) => {
    setSelections(prev => ({
      ...prev,
      [feature]: option
    }));
    setSelectedIndices(prev => ({
      ...prev,
      [currentSlide]: index
    }));
  };

  // Determine if we can go to next slide
  const canGoNext = () => {
    if (currentSlideData.type === 'title') return true;
    if (currentSlideData.type === 'question') {
      return selectedIndices[currentSlide] !== undefined;
    }
    if (currentSlideData.type === 'results') return true;
    return false;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        if (canGoNext()) {
          e.preventDefault();
          handleNext();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, selectedIndices]);

  return (
    <div className="presentation-container">
      <div className="slide active">
        {currentSlideData.type === 'title' && (
          <TitleSlide
            title={currentSlideData.title}
            subtitle={currentSlideData.subtitle}
            buttonText={currentSlideData.buttonText}
            onStart={handleNext}
          />
        )}

        {currentSlideData.type === 'question' && (
          <QuestionSlide
            slide={currentSlideData}
            selectedOption={selectedIndices[currentSlide]}
            onSelectOption={handleSelectOption}
          />
        )}

        {currentSlideData.type === 'results' && (
          <ResultsSlide
            title={currentSlideData.title}
            subtitle={currentSlideData.subtitle}
            selections={selections}
          />
        )}

        {currentSlideData.type !== 'title' && (
          <Navigation
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            onPrev={handlePrev}
            onNext={handleNext}
            canGoNext={canGoNext()}
            isLastSlide={currentSlide === totalSlides - 1}
          />
        )}
      </div>
    </div>
  );
}

export default App;
