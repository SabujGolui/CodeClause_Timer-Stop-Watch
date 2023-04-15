import React, { useState, useEffect } from "react";
import "./sw.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);

  const handlePause = () => setIsRunning(false);

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formattedTime = new Date(time).toISOString().slice(11, -1);

  return (
    <div className="content d-flex flex-column align-items-center mt-5 vh-100">
      <div className="component-wrapper shadow d-flex flex-column align-items-center">
          <div className="stopwatch-display">{formattedTime}</div>
          <div className="stopwatch-controls">
            {!isRunning && (
              <button className="start-button" onClick={handleStart}>
                Start
              </button>
            )}
            {isRunning && (
              <button className="pause-button" onClick={handlePause}>
                Pause
              </button>
            )}
            <button className="reset-button" onClick={handleReset}>
              Reset
            </button>
          </div>
      </div>
    </div>
  );
}

export default Stopwatch;
