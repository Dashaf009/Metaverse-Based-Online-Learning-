// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainApp from './components/MainApp';
import './App.css';
import './enhanced_energy_ui.css';

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

export default App;
