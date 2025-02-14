// MainApp.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import WaterEnergy from './WaterEnergy';
import WindEnergy from './WindEnergy';
import SolarEnergy from './SolarEnergy';
import GeothermalEnergy from './GeothermalEnergy';
import BiomassEnergy from './BiomassEnergy';

import CreatorPage from './CreatorPage';
import FloatingManual from './FloatingManual';
import HomeManual from './HomeManual';

const MainApp = () => {
  const location = useLocation();

  // สำหรับหน้าที่ต้องแสดงคู่มือลอย (FloatingManual)
  const manualPaths = [
    '/water-energy',
    '/wind-energy',
    '/solar-energy',
    '/geothermal-energy',
    '/biomass-energy',
  ];
  const showFloatingManual = manualPaths.includes(location.pathname);

  // สำหรับหน้าหลัก (Home)
  const showHomeManual = location.pathname === '/';

  return (
    <div>
      <Navbar />
      {showFloatingManual && <FloatingManual />}
      {showHomeManual && <HomeManual />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/water-energy" element={<WaterEnergy />} />
        <Route path="/wind-energy" element={<WindEnergy />} />
        <Route path="/solar-energy" element={<SolarEnergy />} />
        <Route path="/geothermal-energy" element={<GeothermalEnergy />} />
        <Route path="/biomass-energy" element={<BiomassEnergy />} />
       
        <Route path="/Creator-Page" element={<CreatorPage />} />
      </Routes>
    </div>
  );
};

export default MainApp;
