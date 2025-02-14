// WaterEnergy.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './EnergyPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


// รูปภาพสำหรับแต่ละประเภท
import currentPowerPlantImage from '../assets/images/current_power_plant.png';
import tidalPowerPlantImage from '../assets/images/tidal_power_plant.png';
import wavePowerPlantImage from '../assets/images/wave_power_plant.png';

// วิดีโอ
import waterEnergyVideo from '../assets/videos/พลังงานน้ำ.mp4';
import waterEnergyVideo2 from '../assets/videos/พลังงานน้ำ2.mp4';
import waterEnergyVideo3 from '../assets/videos/พลังงานน้ำ3.mp4';

// ไฟล์เสียงสำหรับโรงไฟฟ้ากระแสน้ำ
import { audioFilesWater } from '../assets/audio/น้ำ/1.โรงไฟฟ้ากระแสน้ำ/audioFilesWater';
// ไฟล์เสียงสำหรับโรงไฟฟ้าพลังงานจากแรงกระแสน้ำ
import { audioFilesTidal } from '../assets/audio/น้ำ/2.โรงไฟฟ้าพลังงานจากแรงกระแสน้ำ/audioFilesTidal';
// ไฟล์เสียงสำหรับโรงไฟฟ้าพลังงานจากคลื่น
import { audioFilesWave } from '../assets/audio/น้ำ/3.โรงไฟฟ้าพลังงานจากคลื่น/audioFilesWave';

/* 
  Array สำหรับปุ่ม Overlay บนโรงไฟฟ้ากระแสน้ำ (Current)
  (ค่า top/left ที่นี่เป็นค่าที่คุณได้ปรับแล้ว)
*/
const waterHotspots = [
  {
    label: 'ขาตั้งยก (Lift Leg)',
    audio: audioFilesWater.liftLeg,
    top: '26%',
    left: '5%',
  },
  {
    label: 'คานขวาง (Cross Beam)',
    audio: audioFilesWater.crossBeam,
    top: '51%',
    left: '5%',
  },
  {
    label: 'เครน (Crane)',
    audio: audioFilesWater.crane,
    top: '9%',
    left: '95%',
  },
  {
    label: 'เสาเข็ม (Pile)',
    audio: audioFilesWater.pile,
    top: '40%',
    left: '95%',
  },
  {
    label: 'ตำแหน่งติดตั้งเครื่องกังหัน',
    audio: audioFilesWater.turbineLocations,
    top: '80%',
    left: '50%',
  },
  {
    label: 'ใบพัดและเครื่องกำเนิดไฟฟ้า(1)',
    audio: audioFilesWater.rotorAndGenerator1,
    top: '65%',
    left: '82%',
  },
  {
    label: 'ใบพัดและเครื่องกำเนิดไฟฟ้า(2)',
    audio: audioFilesWater.rotorAndGenerator2,
    top: '65%',
    left: '97%',
  },
  {
    label: 'โรงไฟฟ้ากระแสน้ำ',
    audio: audioFilesWater.currentPowerPlant,
    top: '-8%',
    left: '72%',
  },
];

/* Array สำหรับโรงไฟฟ้าพลังงานจากแรงกระแสน้ำ (Tidal)
   ปรับค่าตำแหน่งตามต้องการ */
const tidalHotspots = [
  {
    label: 'กังหันแรงกระแสน้ำ (Tidal Turbine)',
    audio: audioFilesTidal.tidalTurbine,
    top: '67%',
    left: '70%',
  },
  {
    label: 'เขื่อน (Barrage)',
    audio: audioFilesTidal.barrage,
    top: '15%',
    left: '95%',
  },
  {
    label: 'ประตูน้ำ (Sluice Gate)',
    audio: audioFilesTidal.sluiceGate,
    top: '42%',
    left: '5%',
  },
  {
    label: 'ฝั่งของอ่างเก็บน้ำ (Basin Side)',
    audio: audioFilesTidal.basinSide,
    top: '26%',
    left: '5%',
  },
  {
    label: 'ฝั่งมหาสมุทร (Ocean Side)',
    audio: audioFilesTidal.oceanSide,
    top: '40%',
    left: '94%',
  },
  {
    label: 'โรงไฟฟ้าพลังงานจากแรงกระแสน้ำ',
    audio: audioFilesTidal.tidalPowerPlant,
    top: '-8%',
    left: '83%',
  },
  {
    label: 'วิธีดำเนินการของโรงไฟฟ้า',
    audio: audioFilesTidal.powerPlantOperation,
    top: '90%',
    left: '50%',
  },
  {
    label: 'เครื่องกำเนิดไฟฟ้า (Turbine-Generator Unit)',
    audio: audioFilesTidal.turbineGeneratorUnit,
    top: '73%',
    left: '10%',
  },
];

/* Array สำหรับโรงไฟฟ้าพลังงานจากคลื่น (Wave)
   ปรับค่าตำแหน่งตามต้องการ */
const waveHotspots = [
  {
    label: 'คอลัมน์น้ำสั่น (Oscillating Water Column)',
    audio: audioFilesWave.oscillatingWaterColumn,
    top: '65%',
    left: '10%',
  },
  {
    label: 'เครื่องกังหัน Wells (Wells Turbine)',
    audio: audioFilesWave.wellsTurbine,
    top: '42%',
    left: '95%',
  },
  {
    label: 'ตำแหน่งตั้งโรงไฟฟ้า (Power Plant Location)',
    audio: audioFilesWave.powerPlantLocation,
    top: '90%',
    left: '50%',
  },
  {
    label: 'โรงไฟฟ้าพลังงานจากคลื่น',
    audio: audioFilesWave.wavePowerPlant,
    top: '-7%',
    left: '79%',
  },
  {
    label: 'วาล์วอากาศ (Air Valve)',
    audio: audioFilesWave.airValve,
    top: '60%',
    left: '95%',
  },
  {
    label: 'ห้องอากาศ (Pneumatic Chamber)',
    audio: audioFilesWave.pneumaticChamber,
    top: '55%',
    left: '45%',
  },
  {
    label: 'อาคารคอนกรีตเสริมเหล็ก (Reinforced-Concrete Building)',
    audio: audioFilesWave.reinforcedConcreteBuilding,
    top: '26%',
    left: '12%',
  },
];

/* HotspotOverlay Component ที่ render ปุ่ม overlay ตามตำแหน่ง */
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
              '--top': spot.top  // ✅ กำหนดค่า CSS variable
            }}
          >
            {currentSrc === spot.audio && isPlaying ? 'หยุดเสียง' : spot.label}
          </button>
        ))}
      </>
    );
  };

const WaterEnergy = () => {
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
            src="https://www.canva.com/design/DAGdAvOFexw/9kJWkAE4-r0l_l93Xi5mNw/view?embed"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
        </div>
        <a
          href="https://www.canva.com/design/DAGdAvOFexw/9kJWkAE4-r0l_l93Xi5mNw/view?utm_content=DAGdAvOFexw&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener"
        ></a>
      </section>

    
<div className="content-section" data-aos="fade-up">
  <h2>โมเดล 3D จำลองพลังงานน้ำ</h2>
  <iframe
    src="https://3d.energyencyclopedia.com/marine?mode=iframe"
    title="Water Energy Model"
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


    
      <section
        className="content-section"
        data-aos="fade-right"
        style={{ position: 'relative' }}
      >
        <h2>โรงไฟฟ้ากระแสน้ำ</h2>
        <div className="image-container" style={{ position: 'relative' }}>
          <img
            src={currentPowerPlantImage}
            alt="โรงไฟฟ้ากระแสน้ำ"
            className="section-image"
          />
          <HotspotOverlay
            hotspots={waterHotspots}
            togglePlayPause={togglePlayPause}
            currentSrc={currentSrc}
            isPlaying={isPlaying}
          />
        </div>
      </section>

      {/* โรงไฟฟ้าพลังงานจากแรงกระแสน้ำ (Tidal) */}
      <section
        className="content-section"
        data-aos="fade-right"
        style={{ position: 'relative' }}
      >
        <h2>โรงไฟฟ้าพลังงานจากแรงกระแสน้ำ</h2>
        <div className="image-container" style={{ position: 'relative' }}>
          <img
            src={tidalPowerPlantImage}
            alt="โรงไฟฟ้าพลังงานจากแรงกระแสน้ำ"
            className="section-image"
          />
          <HotspotOverlay
            hotspots={tidalHotspots}
            togglePlayPause={togglePlayPause}
            currentSrc={currentSrc}
            isPlaying={isPlaying}
          />
        </div>
      </section>

      {/* โรงไฟฟ้าพลังงานจากคลื่น (Wave) */}
      <section
        className="content-section"
        data-aos="fade-right"
        style={{ position: 'relative' }}
      >
        <h2>โรงไฟฟ้าพลังงานจากคลื่น</h2>
        <div className="image-container" style={{ position: 'relative' }}>
          <img
            src={wavePowerPlantImage}
            alt="โรงไฟฟ้าพลังงานจากคลื่น"
            className="section-image"
          />
          <HotspotOverlay
            hotspots={waveHotspots}
            togglePlayPause={togglePlayPause}
            currentSrc={currentSrc}
            isPlaying={isPlaying}
          />
        </div>
      </section>

      {/* Features / Videos Section */}
      <section className="content-section" data-aos="fade-left">
        <div className="text-content">
          <h2>เรียนรู้เพิ่มเติมเกี่ยวกับพลังงานน้ำ</h2>
        </div>
        <div className="centered-video">
          <video controls>
            <source src={waterEnergyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="centered-video">
          <video controls>
            <source src={waterEnergyVideo2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="centered-video">
          <video controls>
            <source src={waterEnergyVideo3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default WaterEnergy;
