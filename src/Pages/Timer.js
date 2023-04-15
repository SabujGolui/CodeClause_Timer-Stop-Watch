import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputHours, setInputHours] = useState("");
  const [inputMinutes, setInputMinutes] = useState("");
  const [inputSeconds, setInputSeconds] = useState("");

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(timer);
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const handleHoursChange = (event) => {
    setInputHours(event.target.value);
  };

  const handleMinutesChange = (event) => {
    setInputMinutes(event.target.value);
  };

  const handleSecondsChange = (event) => {
    setInputSeconds(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTime(inputHours * 3600 + inputMinutes * 60 + parseInt(inputSeconds));
    setInputHours("");
    setInputMinutes("");
    setInputSeconds("");
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  function formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className="content d-flex flex-column align-items-center mt-5 vh-100">
      <div className="component-wrapper shadow d-flex flex-column align-items-center">
        <h1 className="display">{formatTime(time)}</h1>
        <form className="mb-3" onSubmit={handleSubmit}>
          <div className="input-group ">
            <input
              type="number"
              className="form-control rounded-pill m-2 border border-primary"
              placeholder="Hours"
              value={inputHours}
              onChange={handleHoursChange}
            />
            <input
              type="number"
              className="form-control rounded-pill m-2 border border-primary"
              placeholder="Minutes"
              value={inputMinutes}
              onChange={handleMinutesChange}
            />
            <input
              type="number"
              className="form-control rounded-pill m-2 border border-primary"
              placeholder="Seconds"
              value={inputSeconds}
              onChange={handleSecondsChange}
            />
            <button type="submit" className="btn btn-primary ms-3 m-2">
              Set
            </button>
          </div>
        </form>
        <row className="control">
          <button className="btn me-3 start-button" onClick={handleStart}>
            Start
          </button>
          <button className="btn reset-button" onClick={handleReset}>
            Reset
          </button>
        </row>
      </div>
    </div>
  );
}

export default Timer;
