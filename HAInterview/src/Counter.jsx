import React, { useEffect } from "react";
import { useState } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [customValue, setCustomValue] = useState(1);
  const [message, setMessage] = useState("");

  const incrementCount = () => {
    setCount(count + Number(customValue));
  };

  const decrementCount = () => {
    setCount(count - Number(customValue));
  };

  const resetCount = () => {
    setCount(0);
  };

  const handleCustomValueChange = (e) => {
    setCustomValue(e.target.value);
  };

  const resetCustomValue = () => {
    setCustomValue(1);
  };

  useEffect(() => {
    console.log(`Count changed to: ${count}`);

    if (count >= 10) {
      setMessage("High count!");
    } else {
      setMessage("");
    }
  }, [count]);

  return (
    <div>
      <h1>Counter</h1>
      <h3>{count}</h3>
      {message && <p className="message">{message}</p>}
      <div className="custom-input-container mb-4">
        <h5>Increment by:</h5>
        <input
          type="number"
          value={customValue}
          onChange={handleCustomValueChange}
          min="1"
          step="1"
        />
        <button onClick={resetCustomValue} className="button button-reset">
          <RestartAltIcon fontSize="small" />
        </button>
      </div>
      <div className="button-container">
        <button onClick={decrementCount} className="button button-decrement">
          Decrement
        </button>
        <button onClick={incrementCount} className="button button-increment">
          Increment
        </button>
        <button onClick={resetCount} className="button button-reset">
          <RestartAltIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
