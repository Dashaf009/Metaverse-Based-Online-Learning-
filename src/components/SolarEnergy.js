import React, { useEffect, useState } from 'react';
import './EnergyPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import solarTowerImage from '../assets/images/Solar tower.png';
import photovoltaicPanelImage from '../assets/images/Photovoltaic power plant.png';
import parabolicMirrorImage from '../assets/images/Solar farm.png';

import solarEnergyVideo1 from '../assets/videos/พลังงานแสงอาทิตย์1.mp4';
import solarEnergyVideo2 from '../assets/videos/พลังงานแสงอาทิตย์2.mp4';
import solarEnergyVideo3 from '../assets/videos/พลังงานแสงอาทิตย์3.mp4';

// ไฟล์เสียงสำหรับโรงไฟฟ้าพลังงานแสงอาทิตย์แบบหอคอยกลาง
import { audioFiles } from '../assets/audio/แสงอาทิตย์/1.โรงไฟฟ้าพลังงานแสงอาทิตย์แบบหอคอยกลาง/audioImports.js';
// ไฟล์เสียงสำหรับโรงไฟฟ้าพลังงานแสงอาทิตย์แบบโฟโต้โวลตาอิค
import { audioFilesPhotovoltaic } from '../assets/audio/แสงอาทิตย์/2.โรงไฟฟ้าพลังงานแสงอาทิตย์แบบโฟโต้โวลตาอิค/audioFilesPhotovoltaic.js';
// ไฟล์เสียงสำหรับฟาร์มพลังงานแสงอาทิตย์
import { audioFilesFarm } from '../assets/audio/แสงอาทิตย์/3. ฟาร์มพลังงานแสงอาทิตย์/audioFilesFarm.js';

/* --- HotspotOverlay Component ---
   Render ปุ่ม overlay ตามตำแหน่งที่กำหนดในแต่ละ hotspot */
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

/* --- HotspotSection Component ---
   ใช้สำหรับแสดงแต่ละส่วนของพลังงานแสงอาทิตย์ที่มีภาพและ hotspot overlay */
const HotspotSection = ({ title, imageSrc, hotspots }) => {
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

  return (
    <section className="content-section" data-aos="fade-right">
      <h2>{title}</h2>
      <div className="image-container" style={{ position: 'relative' }}>
        <img src={imageSrc} alt={title} className="section-image" />
        <HotspotOverlay
          hotspots={hotspots}
          togglePlayPause={togglePlayPause}
          currentSrc={currentSrc}
          isPlaying={isPlaying}
        />
      </div>
    </section>
  );
};

/* --- Hotspot Arrays --- */
// สำหรับ "โรงไฟฟ้าพลังงานแสงอาทิตย์แบบหอคอยกลาง"
const solarTowerHotspots = [
  {
    label: 'ตัวรับสัญญาณ (Receiver)',
    audio: audioFiles.receiver,
    top: '10%',
    left: '95%',
  },
  {
    label: 'หอคอย (Tower)',
    audio: audioFiles.tower,
    top: '32%',
    left: '95%',
  },
  {
    label: 'ถังเก็บความร้อน (Thermal Storage Tank)',
    audio: audioFiles.storageTank,
    top: '50%',
    left: '95%',
  },
  {
    label: 'ฮีเลียอสโต้ (Heliostat)',
    audio: audioFiles.heliostat,
    top: '82%',
    left: '95%',
  },
  {
    label: 'โรงไฟฟ้า (Powerhouse)',
    audio: audioFiles.powerhouse,
    top: '22%',
    left: '7%',
  },
  {
    label: 'กำลังไฟฟ้า (Power Output)',
    audio: audioFiles.powerOutput,
    top: '40%',
    left: '7%',
  },
  {
    label: 'โรงไฟฟ้าพลังงานแสงอาทิตย์ (Solar Plant)',
    audio: audioFiles.solarPlant,
    top: '1%',
    left: '50%',
  },
  {
    label: 'เครื่องควบแน่นไอน้ำ (Steam Condenser)',
    audio: audioFiles.steamCondenser,
    top: '70%',
    left: '80%',
  },
  {
    label: 'ของไหลนำความร้อน (Heat Transporting Medium)',
    audio: audioFiles.heatTransport,
    top: '70%',
    left: '58%',
  },
];

// สำหรับ "โรงไฟฟ้าพลังงานแสงอาทิตย์แบบโฟโต้โวลตาอิค"
const photovoltaicHotspots = [
  {
    label: 'กำลังไฟฟ้า (Power Output)',
    audio: audioFilesPhotovoltaic.powerOutput,
    top: '65%',
    left: '92%',
  },
  {
    label: 'เซลล์แสงอาทิตย์ (Photovoltaic Cell)',
    audio: audioFilesPhotovoltaic.photovoltaicCell,
    top: '10%',
    left: '81%',
  },
  {
    label: 'แผงแสงอาทิตย์ (Photovoltaic Panel)',
    audio: audioFilesPhotovoltaic.photovoltaicPanel,
    top: '36%',
    left: '91%',
  },
  {
    label: 'พื้นที่ว่าง (Free Space)',
    audio: audioFilesPhotovoltaic.freeSpace,
    top: '20%',
    left: '80%',
  },
  {
    label: 'รั้ว (Fence)',
    audio: audioFilesPhotovoltaic.fence,
    top: '80%',
    left: '10%',
  },
  {
    label: 'โรงไฟฟ้าพลังงานแสงอาทิตย์ (Photovoltaic Plant)',
    audio: audioFilesPhotovoltaic.photovoltaicPlant,
    top: '5%',
    left: '50%',
  },
  {
    label: 'สถานีไฟฟ้าย่อย (Substation)',
    audio: audioFilesPhotovoltaic.substation,
    top: '38%',
    left: '9%',
  },
  {
    label: 'สายส่งใต้ดิน (Underground Power Lines)',
    audio: audioFilesPhotovoltaic.undergroundPowerLines,
    top: '70%',
    left: '30%',
  },
  {
    label: 'สนามหญ้า (Grass)',
    audio: audioFilesPhotovoltaic.grass,
    top: '80%',
    left: '80%',
  },
  {
    label: 'อินเวอร์เตอร์ (Inverter)',
    audio: audioFilesPhotovoltaic.inverter,
    top: '17%',
    left: '8%',
  },
];

// สำหรับ "ฟาร์มพลังงานแสงอาทิตย์"
const farmHotspots = [
  {
    label: 'กระจกทรงคาน (Parabolic Mirror)',
    audio: audioFilesFarm.parabolicMirror,
    top: '40%',
    left: '9%',
  },
  {
    label: 'กำลังไฟฟ้า (Power Output)',
    audio: audioFilesFarm.powerOutput,
    top: '93%',
    left: '50%',
  },
  {
    label: 'เครื่องกำเนิดไอน้ำ (Steam Generator)',
    audio: audioFilesFarm.steamGenerator,
    top: '50%',
    left: '50%',
  },
  {
    label: 'ท่อโค้ง (Parabolic Troughs)',
    audio: audioFilesFarm.parabolicTroughs,
    top: '80%',
    left: '50%',
  },
  {
    label: 'เครื่องควบแน่นไอน้ำ (Steam Condenser)',
    audio: audioFilesFarm.steamCondenser,
    top: '21%',
    left: '9%',
  },
  {
    label: 'แลกเปลี่ยนความร้อนด้วยเกลือ (Oil Salt Heat Exchanger)',
    audio: audioFilesFarm.oilSaltHeatExchanger,
    top: '65%',
    left: '50%',
  },
  {
    label: 'ตัวดูดความร้อน (Heat Absorber)',
    audio: audioFilesFarm.heatAbsorber,
    top: '75%',
    left: '9%',
  },
  {
    label: 'ถังเก็บเกลือเย็น (Cold Salt Tank)',
    audio: audioFilesFarm.coldSaltTank,
    top: '50%',
    left: '92%',
  },
  {
    label: 'ถังเก็บเกลือร้อน (Hot Salt Tank)',
    audio: audioFilesFarm.hotSaltTank,
    top: '30%',
    left: '92%',
  },
  {
    label: 'โรงไฟฟ้า (Powerhouse)',
    audio: audioFilesFarm.powerhouse,
    top: '12%',
    left: '92%',
  },
];

const SolarEnergy = () => {
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
            src="https://www.canva.com/design/DAGejCvUyb8/5xFlO0td3p4M9KHeJLhc7Q/view?embed"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
        </div>
        <a
          href="https://www.canva.com/design/DAGejCvUyb8/5xFlO0td3p4M9KHeJLhc7Q/view?utm_content=DAGejCvUyb8&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener"
        ></a>
      </section>

      {/* Embedded 3D Model */}
      <div className="content-section" data-aos="fade-up">
        <div className="text-content">
          <h2>โมเดล 3D จำลองพลังงานแสงอาทิตย์</h2>
        </div>
        <iframe
          src="https://3d.energyencyclopedia.com/solar?mode=iframe"
          title="Solar Energy Model"
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

      {/* Hotspot Sections */}
      <HotspotSection
        title="โรงไฟฟ้าพลังงานแสงอาทิตย์แบบหอคอยกลาง"
        imageSrc={solarTowerImage}
        hotspots={solarTowerHotspots}
      />

      <HotspotSection
        title="โรงไฟฟ้าพลังงานแสงอาทิตย์แบบโฟโต้โวลตาอิค"
        imageSrc={photovoltaicPanelImage}
        hotspots={photovoltaicHotspots}
      />

      <HotspotSection
        title="ฟาร์มพลังงานแสงอาทิตย์"
        imageSrc={parabolicMirrorImage}
        hotspots={farmHotspots}
      />

      {/* Features / Videos Section */}
      <section className="content-section" data-aos="fade-left">
        <div className="text-content">
          <h2>เรียนรู้เพิ่มเติมเกี่ยวกับพลังงานแสงอาทิตย์</h2>
        </div>
        <div className="centered-video">
          <video controls>
            <source src={solarEnergyVideo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="centered-video">
          <video controls>
            <source src={solarEnergyVideo2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="centered-video">
          <video controls>
            <source src={solarEnergyVideo3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default SolarEnergy;
