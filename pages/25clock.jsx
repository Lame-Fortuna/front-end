import React, { useState, useEffect } from 'react';
import '../public/Pomodoro.css';

const Pomodoro = () => {
  // Tab title
  useEffect(() => {
    document.title = "Pomodoro Clock";
  }, []);

  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const beep = new Audio('https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav');

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${sec < 10 ? '0' : ''}${sec}`;
  };

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    } else {
      const id = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            beep.play();
            setIsBreak((prev) => !prev);
            return isBreak ? sessionLength * 60 : breakLength * 60;
          }
          return prevTime - 1;
        });
      }, 1000);             // 1000ms is 1 second
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setIsBreak(false);
    setTimeLeft(sessionLength * 60);
  };

  const adjustSessionLength = (amount) => {
    if (!isRunning) {
      setSessionLength((prev) => Math.min(60, Math.max(1, prev + amount)));
    }
  };

  const adjustBreakLength = (amount) => {
    if (!isRunning) {
      setBreakLength((prev) => Math.min(60, Math.max(1, prev + amount)));
    }
  };

  useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);

  return (
    <div className="pomodoro">
      <h1>Pomodoro Timer</h1>
      <div className="controls">
        <div className="length-control">
          <h2>Session Length</h2>
          <button onClick={() => adjustSessionLength(-1)}>-</button>
          <span>{sessionLength}</span>
          <button onClick={() => adjustSessionLength(1)}>+</button>
        </div>
        <div className="length-control">
          <h2>Break Length</h2>
          <button onClick={() => adjustBreakLength(-1)}>-</button>
          <span>{breakLength}</span>
          <button onClick={() => adjustBreakLength(1)}>+</button>
        </div>
      </div>
      <div className="timer">
        <h2>{isBreak ? 'Break' : 'Session'}</h2>
        <span >{formatTime(timeLeft)}</span>
      </div>
      <div className="actions">
        <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Pomodoro;
