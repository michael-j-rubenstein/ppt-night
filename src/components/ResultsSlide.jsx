import { useState, useEffect } from "react";
import "./ResultsSlide.css";

const ResultsSlide = ({ title, subtitle, selections }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset loading when component mounts
    setLoading(true);
    setProgress(0);

    // Animate progress bar
    let pauseTimer = null;
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Pause at 88% for 4 seconds
        if (prev === 88) {
          clearInterval(progressInterval);
          pauseTimer = setTimeout(() => {
            const resumeInterval = setInterval(() => {
              setProgress((p) => {
                if (p >= 100) {
                  clearInterval(resumeInterval);
                  return 100;
                }
                return p + 1;
              });
            }, 200);
          }, 4000); // 4 second pause
          return 88;
        }
        return prev + 1; // Increase by 1% every interval
      });
    }, 200); // Update every 200ms

    // Auto-complete after 20 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 24000);

    return () => {
      clearTimeout(timer);
      clearTimeout(pauseTimer);
      clearInterval(progressInterval);
    };
  }, []);

  const handleSkip = () => {
    setLoading(false);
    setProgress(100);
  };

  if (loading) {
    return (
      <div className="slide-content">
        <div className="loading-container">
          <h2 className="loading-title">Generating Perfect Woman...</h2>
          <div className="loading-bar-wrapper">
            <div className="loading-bar">
              <div
                className="loading-bar-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="loading-percentage">{Math.round(progress)}%</span>
          </div>
          <p className="loading-message">
            {progress < 20
              ? "generating..."
              : progress < 40
              ? "doing some mad ai llm processing work"
              : progress < 60
              ? "asking chatgpt nicely..."
              : progress < 80
              ? "asking chatgpt rudely..."
              : "yay its working! almost done!"}
          </p>

          <button className="skip-btn" onClick={handleSkip}>
            Skip
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <div className="slide-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div> */}
      <div className="slide-content">
        <p
          style={{
            fontSize: "1.5rem",
            paddingTop: "1rem",
            paddingBottom: "2rem",
            color: "#667eea",
          }}
        >
          Michaels Perfect Woman (looks)
        </p>
        <div className="results-container">
          <div className="final-face">
            <div className="face-preview">
              <div className="face-part shape-part">
                {selections.face?.image ? (
                  <img src={selections.face.image} alt="Face" />
                ) : (
                  selections.face?.emoji || "😊"
                )}
              </div>

              <div className="face-part hair-part">
                {selections.hair?.image ? (
                  <img src={selections.hair.image} alt="Hair" />
                ) : (
                  selections.hair?.emoji || "💇‍♀️"
                )}
              </div>
              <div className="face-part eyes-part">
                {selections.eyes?.image ? (
                  <img src={selections.eyes.image} alt="Eyes" />
                ) : (
                  selections.eyes?.emoji || "👀"
                )}
              </div>
              <div className="face-part nose-part">
                {selections.nose?.image ? (
                  <img src={selections.nose.image} alt="Nose" />
                ) : (
                  selections.nose?.emoji || "👃"
                )}
              </div>
              <div className="face-part lips-part">
                {selections.lips?.image ? (
                  <img src={selections.lips.image} alt="Lips" />
                ) : (
                  selections.lips?.emoji || "👄"
                )}
              </div>
              <div className="body-part">
                {selections.body?.image ? (
                  <img src={selections.body.image} alt="Body" />
                ) : (
                  selections.lips?.emoji || "👄"
                )}
              </div>
            </div>
          </div>
          <div className="selections-summary">
            <div className="summary-item">
              <h3>Face Shape</h3>
              <p>Label: {selections.face?.label || "-"}</p>
              <p>Actual Label: {selections.face?.actualLabel || "-"}</p>
            </div>
            <div className="summary-item">
              <h3>Eyes</h3>
              <p>Label: {selections.eyes?.label || "-"}</p>
              <p>Actual Label: {selections.eyes?.actualLabel || "-"}</p>
            </div>
            <div className="summary-item">
              <h3>Nose</h3>
              <p>Label: {selections.nose?.label || "-"}</p>
              <p>Actual Label: {selections.nose?.actualLabel || "-"}</p>
            </div>
            <div className="summary-item">
              <h3>Lips</h3>
              <p>Label: {selections.lips?.label || "-"}</p>
              <p>Actual Label: {selections.lips?.actualLabel || "-"}</p>
            </div>
            <div className="summary-item">
              <h3>Hair</h3>
              <p>Label: {selections.hair?.label || "-"}</p>
              <p>Actual Label: {selections.hair?.actualLabel || "-"}</p>
            </div>
            <div className="summary-item">
              <h3>Body</h3>
              <p>Label: {selections.body?.label || "-"}</p>
              <p>Actual Label: {selections.body?.actualLabel || "-"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsSlide;
