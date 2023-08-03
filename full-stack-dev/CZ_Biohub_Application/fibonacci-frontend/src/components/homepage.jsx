import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function FibonacciForm() {
  const [inputNumber, setInputNumber] = useState('');
  const history = useHistory();

  const handleInputChange = (event) => {
    setInputNumber(event.target.value);
  };

  const handleCompute = () => {
    if (!inputNumber.trim() || isNaN(inputNumber) || Number(inputNumber) < 1) {
        alert('Please enter a valid positive integer.');
        return;
    }

    const num = parseInt(inputNumber, 10);
    history.push(`/fibonacci/${num}`);

  }


  return (
    <div>
      <h2>Fibonacci Number Calculator</h2>
      <p>Enter a positive integer to get the Fibonacci numbers:</p>
      <input
        type="text"
        value={inputNumber}
        onChange={handleInputChange}
        placeholder="Enter an integer"
      />
      <button onClick={handleCompute}>Compute</button>
    </div>
  );
}

export default FibonacciForm;
