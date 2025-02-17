import React, { useEffect, useState } from 'react';
import './EnergyPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import biomassEnergyVideo from '../assets/videos/พลังงานชีวมวล.mp4';
import biomassPlantImage from '../assets/images/biomass_system.png';
import { audioFilesBiomass } from '../assets/audio/ไบโอ/audioFilesBiomass.js';

// กำหนดข้อมูล hotspot สำหรับระบบผลิตพลังงานชีวมวล
const biomassHotspots = [
  {
    label: 'หมักครั้งที่2 (Secondary Digester)',
    audio: audioFilesBiomass.secondaryDigester,
    top: '28%',
    left: '95%',
  },
  {
    label: 'หมักครั้งที่1(First Digester)',
    audio: audioFilesBiomass.firstDigester,
    top: '30%',
    left: '80%',
  },
  {
    label: 'กระบวนการย่อยสลายแบบไม่มีออกซิเจน(Anaerobic Digestion)',
    audio: audioFilesBiomass.anaerobicDigestion,
    top: '50%',
    left: '45%',
  },
  {
    label: 'เครื่องกวน(Agitator)',
    audio: audioFilesBiomass.agitator,
    top: '45%',
    left: '68%',
  },
  {
    label: 'เครื่องป้อนด้วยสกรู(Screw Feeder)',
    audio: audioFilesBiomass.screwFeeder,
    top: '10%',
    left: '94%',
  },
  {
    label: 'ถังเก็บ(Storage Tank)',
    audio: audioFilesBiomass.storageTank,
    top: '34%',
    left: '8%',
  },
  {
    label: 'ที่เก็บก๊าซ(Gasholder)',
    audio: audioFilesBiomass.gasholder,
    top: '17%',
    left: '8%',
  },
  {
    label: 'ไบโอแก๊ส(Biogas)',
    audio: audioFilesBiomass.biogas,
    top: '0%',
    left: '50%',
  },
  {
    label: 'พื้นที่เก็บวัตถุดิบ(Storage Place)',
    audio: audioFilesBiomass.storagePlace,
    top: '45%',
    left: '95%',
  },
  {
    label: 'หน่วยผลิตพลังงานร่วม(Cogeneration Unit)',
    audio: audioFilesBiomass.cogenerationUnit,
    top: '65%',
    left: '9%',
  },
  {
    label: 'ห้องควบคุม(Control Room)',
    audio: audioFilesBiomass.controlRoom,
    top: '74%',
    left: '93%',
  },
  {
    label: 'หัวเผา(Flare Stack)',
    audio: audioFilesBiomass.flareStack,
    top: '78%',
    left: '7%',
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

const BiomassEnergy = () => {
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
            src="https://www.canva.com/design/DAGejIlmAxI/zo8ocHl7XN-6MMS4-pl3Pg/view?embed"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
        </div>
        <a
          href="https://www.canva.com/design/DAGejIlmAxI/zo8ocHl7XN-6MMS4-pl3Pg/view?utm_content=DAGejIlmAxI&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener"
        ></a>
      </section>

      {/* โมเดล 3D จำลองพลังงานชีวมวล */}
      <div className="content-section" data-aos="fade-up">
        <h2>โมเดล 3D จำลองพลังงานชีวมวล</h2>
        <iframe
          src="https://3d.energyencyclopedia.com/biogas?mode=iframe"
          title="Biomass Energy Model"
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

      {/* ระบบผลิตพลังงานชีวมวล พร้อมปุ่ม overlay สำหรับเล่นเสียง */}
      <section className="content-section" data-aos="fade-right" style={{ position: 'relative' }}>
        <h2>ระบบผลิตพลังงานชีวมวล</h2>
        <div className="image-container" style={{ position: 'relative' }}>
          <img
            src={biomassPlantImage}
            alt="ระบบผลิตพลังงานชีวมวล"
            className="section-image"
          />
          <HotspotOverlay
            hotspots={biomassHotspots}
            togglePlayPause={togglePlayPause}
            currentSrc={currentSrc}
            isPlaying={isPlaying}
          />
        </div>
      </section>

      {/* วิดีโอเรียนรู้เพิ่มเติม */}
      <section className="content-section" data-aos="fade-left">
        <div className="text-content">
          <h2>เรียนรู้เพิ่มเติมเกี่ยวกับพลังงานชีวมวล</h2>
        </div>
        <div className="centered-video">
          <video controls>
            <source src={biomassEnergyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default BiomassEnergy;
