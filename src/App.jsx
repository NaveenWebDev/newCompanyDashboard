import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h2>page not fount</h2>} />
      </Routes>
  );
};

export default App;
