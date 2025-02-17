// WindEnergy.js
import React, { useEffect, useState } from 'react';
import './EnergyPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import windEnergyVideo from '../assets/videos/พลังงานลม.mp4';
import windTurbineImage from '../assets/images/wind_turbine_system.png';
import { audioFilesWind } from '../assets/audio/ลม/audioFilesWind';

// กำหนดข้อมูล hotspot สำหรับระบบผลิตพลังงานลม
const windHotspots = [
  {
    label: 'กระปุกเกียร์ (Gearbox)',
    audio: audioFilesWind.gearbox,
    top: '39%',
    left: '92%',
  },
  {
    label: 'ระบบหมุนแกนแนวตั้ง (Yaw Drive)',
    audio: audioFilesWind.yawDrive,
    top: '65%',
    left: '1%',
  },
  {
    label: 'เครื่องกำเนิดไฟฟ้า (Electric Generator)',
    audio: audioFilesWind.electricGenerator,
    top: '53%',
    left: '92%',
  },
  {
    label: 'เครื่องวัดความเร็วลม (Anemometer)',
    audio: audioFilesWind.anemometer,
    top: '23%',
    left: '92%',
  },
  {
    label: 'เบรกโรเตอร์ (Rotor Brake)',
    audio: audioFilesWind.rotorBrake,
    top: '70%',
    left: '92%',
  },
  {
    label: 'แบริ่งเพลาหลัก (Main Shaft Bearing)1',
    audio: audioFilesWind.mainShaftBearing1,
    top: '35%',
    left: '1%',
  },
  {
    label: 'แบริ่งเพลาหลัก (Main Shaft Bearing)2',
    audio: audioFilesWind.mainShaftBearing2,
    top: '35%',
    left: '20%',
  },
  {
    label: 'ใบพัด (Blades)',
    audio: audioFilesWind.blades,
    top: '80%',
    left: '1%',
  },
  {
    label: 'การปรับมุมใบพัด (Blade Pitch)',
    audio: audioFilesWind.bladePitch,
    top: '50%',
    left: '1%',
  },
  {
    label: 'โรเตอร์ (Rotor)',
    audio: audioFilesWind.rotor,
    top: '58%',
    left: '25%',
  },
  {
    label: 'ทิศทางลม (Wind Vane)',
    audio: audioFilesWind.windVane,
    top: '5%',
    left: '92%',
  },
  {
    label: 'หอคอย (Tower)',
    audio: audioFilesWind.tower,
    top: '83%',
    left: '92%',
  },
  {
    label: 'แคนเซลล์ (Nacelle)',
    audio: audioFilesWind.nacelle,
    top: '15%',
    left: '1%',
  },
];

// Component สำหรับแสดงปุ่ม overlay บนรูปภาพ
const HotspotOverlay = ({ hotspots, togglePlayPause, currentSrc, isPlaying }) => {
  return (
    <>
      {hotspots.map((spot, index) => (
        <button
          key={index}
          className="audio-overlay-button"
          onClick={() => togglePlayPause(spot.audio)}
          style={{
            position: 'absolute',
            top: spot.top,
            left: spot.left,
            transform: 'translate(-50%, -50%)',
            zIndex: 999,
            backgroundColor: currentSrc === spot.audio && isPlaying ? 'red' : undefined,
            // ใช้ CSS variable (ถ้าต้องการ)
            '--top': spot.top,
          }}
        >
          {currentSrc === spot.audio && isPlaying ? 'หยุดเสียง' : spot.label}
        </button>
      ))}
    </>
  );
};

const WindEnergy = () => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [currentSrc, setCurrentSrc] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = (file) => {
    if (currentAudio) {
      if (currentSrc === file) {
        currentAudio.pause();
        setIsPlaying(false);
        return;
      }
      currentAudio.pause();
      setCurrentAudio(null);
    }
    const newAudio = new Audio(file);
    setCurrentAudio(newAudio);
    setCurrentSrc(file);
    newAudio.play().catch(console.error);
    setIsPlaying(true);
    newAudio.addEventListener('ended', () => {
      setIsPlaying(false);
      setCurrentAudio(null);
      setCurrentSrc('');
    });
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="energy-container">
      {/* Canva Slide */}
      <section className="canva-slide-top-section" data-aos="fade-up">
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '25%',
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            marginTop: '1.6em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform',
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              border: 'none',
              padding: 0,
              margin: 0,
            }}
            src="https://www.canva.com/design/DAGejEn6_Wc/v_8aeXMrUrQa-3y6K1hkqQ/view?embed"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
        </div>
        <a
          href="https://www.canva.com/design/DAGejEn6_Wc/v_8aeXMrUrQa-3y6K1hkqQ/view?utm_content=DAGejEn6_Wc&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener"
        ></a>
      </section>

      <div className="content-section" data-aos="fade-up">
        <h2>โมเดล 3D จำลองพลังงานลม</h2>
        <iframe
          src="https://3d.energyencyclopedia.com/wind-energy?mode=iframe"
          title="Wind Energy Model"
          frameBorder="0"
          allowFullScreen
          style={{
            width: '100%',
            aspectRatio: '1280 / 720',
            borderRadius: '10px',
            marginTop: '20px',
          }}
        ></iframe>
      </div>

      {/* รูปภาพระบบผลิตพลังงานลมพร้อมปุ่ม overlay */}
      <section className="content-section" data-aos="fade-right" style={{ position: 'relative' }}>
        <h2>ระบบผลิตพลังงานลม</h2>
        <div className="image-container" style={{ position: 'relative' }}>
          <img
            src={windTurbineImage}
            alt="ระบบผลิตพลังงานลม"
            className="section-image"
          />
          <HotspotOverlay
            hotspots={windHotspots}
            togglePlayPause={togglePlayPause}
            currentSrc={currentSrc}
            isPlaying={isPlaying}
          />
        </div>
      </section>

      <section className="content-section" data-aos="fade-left">
        <div className="text-content">
          <h2>เรียนรู้เพิ่มเติมเกี่ยวกับพลังงานลม</h2>
        </div>
        <div className="centered-video">
          <video controls>
            <source src={windEnergyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default WindEnergy;
