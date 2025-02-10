import React, { useEffect, useState } from 'react';
import './EnergyPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import currentPowerPlantImage from '../assets/images/current_power_plant.png';
import tidalPowerPlantImage from '../assets/images/tidal_power_plant.png';
import wavePowerPlantImage from '../assets/images/wave_power_plant.png';
import waterEnergyVideo from '../assets/videos/พลังงานน้ำ.mp4';
import waterEnergyVideo2 from '../assets/videos/พลังงานน้ำ2.mp4';
import waterEnergyVideo3 from '../assets/videos/พลังงานน้ำ3.mp4';
import { audioFilesWater } from '../assets/audio/น้ำ/1.โรงไฟฟ้ากระแสน้ำ/audioFilesWater';
import { audioFilesTidal } from '../assets/audio/น้ำ/2.โรงไฟฟ้าพลังงานจากแรงกระแสน้ำ/audioFilesTidal';
import { audioFilesWave } from '../assets/audio/น้ำ/3.โรงไฟฟ้าพลังงานจากคลื่น/audioFilesWave';
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
                            : ` ${file.split('/').pop().split('.')[0]}`}
                    </button>
                ))}
            </div>
        </section>
    );
};

const WaterEnergy = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (


        
        <div className="energy-container">

<section className="canva-slide-top-section" data-aos="fade-up">
<div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '25%', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
                    <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                        src="https://www.canva.com/design/DAGdAvOFexw/9kJWkAE4-r0l_l93Xi5mNw/view?embed" allowFullScreen allow="fullscreen">
                    </iframe>
                </div>
                <a href="https://www.canva.com/design/DAGdAvOFexw/9kJWkAE4-r0l_l93Xi5mNw/view?utm_content=DAGdAvOFexw&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener"></a>
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

            <AudioSection
    title="โรงไฟฟ้ากระแสน้ำ"
    imageSrc={currentPowerPlantImage}
    audioFiles={[
        audioFilesWater.liftLeg,
        audioFilesWater.crossBeam,
        audioFilesWater.crane,
        audioFilesWater.turbineLocations,
        audioFilesWater.rotorAndGenerator1,
        audioFilesWater.rotorAndGenerator2,
        audioFilesWater.currentPowerPlant,
        audioFilesWater.pile,
    ]}
/>



<AudioSection
    title="โรงไฟฟ้าพลังงานจากแรงกระแสน้ำ"
    imageSrc={tidalPowerPlantImage}
    audioFiles={[
        audioFilesTidal.tidalTurbine,
        audioFilesTidal.barrage,
        audioFilesTidal.sluiceGate,
        audioFilesTidal.basinSide,
        audioFilesTidal.oceanSide,
        audioFilesTidal.tidalPowerPlant,
        audioFilesTidal.powerPlantOperation,
        audioFilesTidal.turbineGeneratorUnit,
    ]}
/>

<AudioSection
    title="โรงไฟฟ้าพลังงานจากคลื่น"
    imageSrc={wavePowerPlantImage}
    audioFiles={[
        audioFilesWave.oscillatingWaterColumn,
        audioFilesWave.wellsTurbine,
        audioFilesWave.powerPlantLocation,
        audioFilesWave.wavePowerPlant,
        audioFilesWave.airValve,
        audioFilesWave.pneumaticChamber,
        audioFilesWave.reinforcedConcreteBuilding,
    ]}
/>

            {/* Features Section */}
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
