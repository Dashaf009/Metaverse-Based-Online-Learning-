import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WaterEnergy from './components/WaterEnergy';
import WindEnergy from './components/WindEnergy';
import SolarEnergy from './components/SolarEnergy';
import GeothermalEnergy from './components/GeothermalEnergy';
import BiomassEnergy from './components/BiomassEnergy';
import UserManual from './components/UserManualPage'; // เปลี่ยนชื่อไฟล์เป็น UserManualPage.js
import CreatorPage from './components/CreatorPage';     // เปลี่ยนชื่อไฟล์เป็น CreatorPage.js
import './App.css';
import './enhanced_energy_ui.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/water-energy" element={<WaterEnergy />} />
          <Route path="/wind-energy" element={<WindEnergy />} />
          <Route path="/solar-energy" element={<SolarEnergy />} />
          <Route path="/geothermal-energy" element={<GeothermalEnergy />} />
          <Route path="/biomass-energy" element={<BiomassEnergy />} />
          <Route path="/User-Manual" element={<UserManual />} />
          <Route path="/Creator-Page" element={<CreatorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
