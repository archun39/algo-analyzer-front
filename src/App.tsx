import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Problem from './pages/Problem/Problem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem/:id" element={<Problem />} />
      </Routes>
    </Router>
  );
}

export default App;
