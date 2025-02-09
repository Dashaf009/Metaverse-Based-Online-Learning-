import React, { useEffect } from 'react';
import './EnergyPage.css';
import Navbar from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const UserManual = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out', once: true });
  }, []);

  return (
    
    <div className="energy-container">
      <section className="canva-slide-top-section" data-aos="fade-up">
                <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.2225%', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
                    <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                        src="https://www.canva.com/design/DAGefsmHVtc/Fe_9uDzL7qZtsq0lHBzRRw/view?embed" allowFullScreen allow="fullscreen">
                    </iframe>
                </div>
                <a href="https://www.canva.com/design/DAGefsmHVtc/Fe_9uDzL7qZtsq0lHBzRRw/view?utm_content=DAGefsmHVtc&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener"></a>
            </section>
            <section className="canva-slide-top-section" data-aos="fade-up">
                <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.2225%', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
                    <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                        src="https://www.canva.com/design/DAGejW_WR7Q/TgniqJx1bZcwcfyDecvC4w/view?embed" allowFullScreen allow="fullscreen">
                    </iframe>
                </div>
                <a href="https://www.canva.com/design/DAGejW_WR7Q/TgniqJx1bZcwcfyDecvC4w/view?utm_content=DAGejW_WR7Q&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener"></a>
            </section>
            <section className="canva-slide-top-section" data-aos="fade-up">
                <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.2225%', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
                    <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                        src="https://www.canva.com/design/DAGejQW8gyo/59k2j2XDSRXO7-SijJ4dTA/view?embed" allowFullScreen allow="fullscreen">
                    </iframe>
                </div>
                <a href="https://www.canva.com/design/DAGejQW8gyo/59k2j2XDSRXO7-SijJ4dTA/view?utm_content=DAGejQW8gyo&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener"></a>
            </section>
      
      

     
    </div>
  );
};

export default UserManual;
