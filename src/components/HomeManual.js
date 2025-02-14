// HomeManual.js
import React, { useState } from 'react';
import './HomeManual.css';

const HomeManual = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) return null;

  return (
    <div className={`home-manual-container ${isOpen ? 'open' : ''}`}>
      {/* ✅ ปุ่มปิด X ต้องอยู่ภายใน home-manual-container */}
      {isOpen && (
        <button className="home-manual-close-btn" onClick={() => setIsClosed(true)}>
          ✕
        </button>
      )}

      {!isOpen && (
        <div className="home-manual-tab" onClick={() => setIsOpen(true)}>
          คู่มือ
        </div>
      )}

      {isOpen && (
        <div className="home-manual-panel">
          <button className="home-manual-toggle-btn" onClick={() => setIsOpen(false)}>
            ซ่อน
          </button>
          <h3>คู่มือการใช้งาน (หน้าแรก)</h3>
          <p>
            
            
            <strong style={{ color: 'green' }}>กรุณาคลิก</strong>ที่ภาพฝั่งขวา เพื่อเข้าสู่ห้องเรียน ที่จะมีลูกศรขึ้นมาแบบนี้ {' ->'}
          
            
          </p>
        
          
        </div>
      )}
    </div>
  );
};

export default HomeManual;
