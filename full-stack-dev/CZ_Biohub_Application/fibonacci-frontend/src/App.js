import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FibonacciForm from './components/homepage';
import FibonacciDisplay from './components/fibonacci_nums';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" component={FibonacciForm} />
          <Route path="/fibonacci/:num" component={FibonacciDisplay} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;