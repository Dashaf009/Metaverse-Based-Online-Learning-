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
import { audioFiles } from '../assets/audio/แสงอาทิตย์/1.โรงไฟฟ้าพลังงานแสงอาทิตย์แบบหอคอยกลาง/audioImports.js';
import { audioFilesPhotovoltaic } from '../assets/audio/แสงอาทิตย์/2.โรงไฟฟ้าพลังงานแสงอาทิตย์แบบโฟโต้โวลตาอิค/audioFilesPhotovoltaic.js';
import { audioFilesFarm } from '../assets/audio/แสงอาทิตย์/3. ฟาร์มพลังงานแสงอาทิตย์/audioFilesFarm.js';
const AudioSection = ({ title, imageSrc, audioFiles }) => {
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
            <div className="image-container">
                <img src={imageSrc} alt={title} className="section-image" />
            </div>
            <div className="audio-controls">
                <p>คลิกเพื่อเล่นเสียง:</p>
                {audioFiles.map((file, index) => (
                    <button key={index} onClick={() => togglePlayPause(file)}>
                        {isPlaying && currentSrc === file
                            ? 'หยุดเสียง'
                            : ` ${file ? file.split('/').pop().split('.')[0] : 'ไม่มีชื่อเสียง'}`}
                    </button>
                ))}
            </div>
        </section>
    );
};

const SolarEnergy = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <div className="energy-container">
             
             <section className="canva-slide-top-section" data-aos="fade-up">
                <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '25%', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
                    <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                        src="https://www.canva.com/design/DAGejCvUyb8/5xFlO0td3p4M9KHeJLhc7Q/view?embed" allowFullScreen allow="fullscreen">
                    </iframe>
                </div>
                <a href="https://www.canva.com/design/DAGejCvUyb8/5xFlO0td3p4M9KHeJLhc7Q/view?utm_content=DAGejCvUyb8&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener"></a>
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
            <AudioSection
                title="โรงไฟฟ้าพลังงานแสงอาทิตย์แบบหอคอยกลาง"
                imageSrc={solarTowerImage}
                audioFiles={[
                    audioFiles.receiver,
                    audioFiles.tower,
                    audioFiles.storageTank,
                    audioFiles.heliostat,
                    audioFiles.powerhouse,
                    audioFiles.powerOutput,
                    audioFiles.solarPlant,
                    audioFiles.steamCondenser,
                    audioFiles.heatTransport,
                ]}
            />

            <AudioSection
                title="โรงไฟฟ้าพลังงานแสงอาทิตย์แบบโฟโต้โวลตาอิค"
                imageSrc={photovoltaicPanelImage}
                audioFiles={[
                    audioFilesPhotovoltaic.powerOutput,
                    audioFilesPhotovoltaic.photovoltaicCell,
                    audioFilesPhotovoltaic.photovoltaicPanel,
                    audioFilesPhotovoltaic.freeSpace,
                    audioFilesPhotovoltaic.fence,
                    audioFilesPhotovoltaic.photovoltaicPlant,
                    audioFilesPhotovoltaic.substation,
                    audioFilesPhotovoltaic.undergroundPowerLines,
                    audioFilesPhotovoltaic.grass,
                    audioFilesPhotovoltaic.inverter,
                ]}
            />

<AudioSection
    title="ฟาร์มพลังงานแสงอาทิตย์"
    imageSrc={parabolicMirrorImage}
    audioFiles={[
        audioFilesFarm.parabolicMirror,
        audioFilesFarm.powerOutput,
        audioFilesFarm.steamGenerator,
        audioFilesFarm.parabolicTroughs,
        audioFilesFarm.steamCondenser,
        audioFilesFarm.oilSaltHeatExchanger,
        audioFilesFarm.heatAbsorber,
        audioFilesFarm.coldSaltTank,
        audioFilesFarm.hotSaltTank,
        audioFilesFarm.powerhouse,
    ]}
/>

            {/* Features Section */}
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
