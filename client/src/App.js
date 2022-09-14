import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import OtherPage from './OtherPage';
import FibonnaciPage from './FibonnaciPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
           Basic Fibonnaci Calculator with K8S! VERSION #3
          </a>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Working On Page....</Link>
        </header>
        <div>
          <Routes>
          <Route exact path="/" element={<FibonnaciPage/>} />
          <Route path="/otherpage" element={<OtherPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
