import React, { useEffect } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hydroIcon from '../assets/icons/ico-hydro.svg';
import windIcon from '../assets/icons/ico-wind.svg';
import solarIcon from '../assets/icons/ico-solar.svg';
import geothermalIcon from '../assets/icons/ico-geothermal.svg';
import biomassIcon from '../assets/icons/ico-biomass.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="homePage">
      <section className="canva-slide-top-section" data-aos="fade-up">
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '56.25%',
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            marginTop: '1.6em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform'
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
              margin: 0
            }}
            src="https://www.canva.com/design/DAGeiwLQ4Nw/YWozEFkgFGjeRM8SMHgI4Q/view?embed"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
        </div>
        <a
          href="https://www.canva.com/design/DAGeiwLQ4Nw/YWozEFkgFGjeRM8SMHgI4Q/view?utm_content=DAGeiwLQ4Nw&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Optionally add content for the link */}
        </a>
      </section>

      <div className="icons-section" data-aos="fade-up">
        <h2 className="section-title">โมเดล 3D พลังงานทดแทน</h2>
        <div className="icons-row-horizontal">
          <div className="icon-item" data-aos="zoom-in" data-aos-delay="0">
            <Link to="/water-energy" className="chapter-icon__link">
              <img src={hydroIcon} alt="Water" className="icon-image" />
              <div className="chapter-icon__caption">พลังงานน้ำ</div>
            </Link>
          </div>
          <div className="icon-item" data-aos="zoom-in" data-aos-delay="100">
            <Link to="/wind-energy" className="chapter-icon__link">
              <img src={windIcon} alt="Wind" className="icon-image" />
              <div className="chapter-icon__caption">พลังงานลม</div>
            </Link>
          </div>
          <div className="icon-item" data-aos="zoom-in" data-aos-delay="200">
            <Link to="/solar-energy" className="chapter-icon__link">
              <img src={solarIcon} alt="Solar" className="icon-image" />
              <div className="chapter-icon__caption">พลังงานแสงอาทิตย์</div>
            </Link>
          </div>
          <div className="icon-item" data-aos="zoom-in" data-aos-delay="300">
            <Link to="/geothermal-energy" className="chapter-icon__link">
              <img src={geothermalIcon} alt="Geothermal" className="icon-image" />
              <div className="chapter-icon__caption">พลังงานความร้อนใต้พิภพ</div>
            </Link>
          </div>
          <div className="icon-item" data-aos="zoom-in" data-aos-delay="400">
            <Link to="/biomass-energy" className="chapter-icon__link">
              <img src={biomassIcon} alt="Biomass" className="icon-image" />
              <div className="chapter-icon__caption">พลังงานชีวมวล</div>
            </Link>
          </div>
        </div>
      </div>

      <footer className="footer gradient-footer" data-aos="fade-up">
        <div className="footer-content">
          <div className="footer-links">
            <div className="footer-section">
              {/* Footer content */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
