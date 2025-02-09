import React, { useEffect, useState } from 'react';
import './EnergyPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import geothermalEnergyVideo from '../assets/videos/พลังงานความร้อนใต้พิภพ.mp4';
import geothermalPlantImage from '../assets/images/geothermal_system.png';
import { audioFilesGeothermal } from '../assets/audio/ใต้พิภพ/audioFilesGeothermal';

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

const GeothermalEnergy = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <div className="energy-container">
            
            <section className="canva-slide-top-section" data-aos="fade-up">
                <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '25%', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
                    <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                        src="https://www.canva.com/design/DAGejRQ1VfQ/TuFJEtokixNPjZeD3-ozzA/view?embed" allowFullScreen allow="fullscreen">
                    </iframe>
                </div>
                <a href="https://www.canva.com/design/DAGejRQ1VfQ/TuFJEtokixNPjZeD3-ozzA/view?utm_content=DAGejRQ1VfQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener"></a>
            </section>
                
                
           
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

            <AudioSection
                title="ระบบผลิตพลังงานความร้อนใต้พิภพ"
                imageSrc={geothermalPlantImage}
                audioFiles={[
                    audioFilesGeothermal.powerOutput,
                    audioFilesGeothermal.condenser,
                    audioFilesGeothermal.heatExchanger,
                    audioFilesGeothermal.turbineHall,
                    audioFilesGeothermal.injectionWell,
                    audioFilesGeothermal.productionWell,
                    audioFilesGeothermal.hdrReservoir,
                ]}
            />

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
