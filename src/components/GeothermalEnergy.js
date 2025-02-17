import React, { useEffect, useState } from 'react';
import './EnergyPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import geothermalEnergyVideo from '../assets/videos/พลังงานความร้อนใต้พิภพ.mp4';
import geothermalPlantImage from '../assets/images/geothermal_system.png';
import { audioFilesGeothermal } from '../assets/audio/ใต้พิภพ/audioFilesGeothermal';

// กำหนดข้อมูล hotspot สำหรับระบบผลิตพลังงานความร้อนใต้พิภพ
const geothermalHotspots = [
  {
    label: 'กำลังการผลิต(Power Output)',
    audio: audioFilesGeothermal.powerOutput,
    top: '7%',
    left: '30%',
  },
  {
    label: 'เครื่องควบแน่น (Condenser)',
    audio: audioFilesGeothermal.condenser,
    top: '10%',
    left: '83%',
  },
  {
    label: 'เครื่องแลกเปลี่ยนความร้อน(Heat Exchanger)',
    audio: audioFilesGeothermal.heatExchanger,
    top: '20%',
    left: '55%',
  },
  {
    label: 'ห้องกังหัน(Turbine Hall)',
    audio: audioFilesGeothermal.turbineHall,
    top: '6%',
    left: '62%',
  },
  {
    label: 'บ่อน้ำฉีด(Injection Well)',
    audio: audioFilesGeothermal.injectionWell,
    top: '85%',
    left: '50%',
  },
  {
    label: 'บ่อน้ำผลิต(Production Well)',
    audio: audioFilesGeothermal.productionWell,
    top: '78%',
    left: '34%',
  },
  {
    label: 'แหล่งสะสมพลังงาน (HDR Reservoir)',
    audio: audioFilesGeothermal.hdrReservoir,
    top: '70%',
    left: '50%',
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
          }}
        >
          {currentSrc === spot.audio && isPlaying ? 'หยุดเสียง' : spot.label}
        </button>
      ))}
    </>
  );
};

const GeothermalEnergy = () => {
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
      {/* ส่วน Canva Slide */}
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
            src="https://www.canva.com/design/DAGejRQ1VfQ/TuFJEtokixNPjZeD3-ozzA/view?embed"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
        </div>
        <a
          href="https://www.canva.com/design/DAGejRQ1VfQ/TuFJEtokixNPjZeD3-ozzA/view?utm_content=DAGejRQ1VfQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener"
        ></a>
      </section>

      {/* โมเดล 3D จำลองพลังงานความร้อนใต้พิภพ */}
      <div className="content-section" data-aos="fade-up">
        <h2>โมเดล 3D จำลองพลังงานความร้อนใต้พิภพ</h2>
        <iframe
          src="https://3d.energyencyclopedia.com/geothermal?mode=iframe"
          title="Geothermal Energy Model"
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

      {/* ระบบผลิตพลังงานความร้อนใต้พิภพ พร้อมปุ่ม overlay สำหรับเล่นเสียง */}
      <section className="content-section" data-aos="fade-right" style={{ position: 'relative' }}>
        <h2>ระบบผลิตพลังงานความร้อนใต้พิภพ</h2>
        <div className="image-container" style={{ position: 'relative' }}>
          <img
            src={geothermalPlantImage}
            alt="ระบบผลิตพลังงานความร้อนใต้พิภพ"
            className="section-image"
          />
          <HotspotOverlay
            hotspots={geothermalHotspots}
            togglePlayPause={togglePlayPause}
            currentSrc={currentSrc}
            isPlaying={isPlaying}
          />
        </div>
      </section>

      {/* วิดีโอเรียนรู้เพิ่มเติม */}
      <section className="content-section" data-aos="fade-left">
        <div className="text-content">
          <h2>เรียนรู้เพิ่มเติมเกี่ยวกับพลังงานความร้อนใต้พิภพ</h2>
        </div>
        <div className="centered-video">
          <video controls>
            <source src={geothermalEnergyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default GeothermalEnergy;
