import React, { useEffect } from 'react';
import './EnergyPage.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const CreatorBiography = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="energy-container">
       <div className="hero-section">
                <h1 className="hero-title" data-aos="fade-down">ประวัติผู้จัดทำ</h1>
                <p className="hero-description">เรียนรู้เกี่ยวกับทีมผู้จัดทำเว็บไซต์สารานุกรมพลังงาน</p>
            </div>
     

      <section className="content-section" data-aos="fade-right">
        <h2>ข้อมูลผู้จัดทำ</h2>
        <p>ทีมผู้จัดทำเว็บไซต์นี้ประกอบด้วยนักศึกษาและผู้เชี่ยวชาญด้านพลังงานธรรมชาติและการออกแบบดิจิทัล</p>
      </section>

      <section className="content-section" data-aos="fade-left">
        <h2>วิสัยทัศน์และเป้าหมาย</h2>
        <p>เรามุ่งมั่นที่จะให้ข้อมูลที่ถูกต้องและทันสมัยเกี่ยวกับพลังงานหมุนเวียน เพื่อสนับสนุนการเรียนรู้และความเข้าใจในเรื่องนี้</p>
      </section>

      <section className="content-section" data-aos="fade-up">
        <h2>ประสบการณ์และผลงาน</h2>
        <ul>
          <li>การวิจัยและพัฒนาสื่อการเรียนรู้ 3 มิติ</li>
          <li>การจัดทำบทความและเนื้อหาสาระเกี่ยวกับพลังงาน</li>
          <li>การร่วมมือกับผู้เชี่ยวชาญในอุตสาหกรรมพลังงาน</li>
        </ul>
      </section>

      <section className="content-section" data-aos="fade-right">
        <h2>ติดต่อทีมงาน</h2>
        <p>สามารถติดต่อทีมงานได้ที่ <a href="mailto:team@energyencyclopedia.com">team@energyencyclopedia.com</a> เพื่อสอบถามข้อมูลหรือเสนอแนะ</p>
      </section>

      <footer className="manual-footer" data-aos="fade-up">
        <p>© 2024 สารานุกรมพลังงาน. สงวนลิขสิทธิ์ทุกประการ</p>
      </footer>
    </div>
  );
};

export default CreatorBiography;