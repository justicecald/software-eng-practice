import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function FibonacciDisplay() {
  const { num } = useParams();
  const [fibonacciNumbers, setFibonacciNumbers] = useState([]);

  useEffect(() => {
    fetch(`/fibonacci/${num}`)
      .then((response) => response.json())
      .then((data) => {
        setFibonacciNumbers(data.fibonacci_numbers);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [num]);

  return (
    <div>
      <h2>Fibonacci Numbers for {num}</h2>
      <ul>
        {fibonacciNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default FibonacciDisplay;