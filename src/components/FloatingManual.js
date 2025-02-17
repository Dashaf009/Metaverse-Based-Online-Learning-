// FloatingManual.js
import React, { useState } from 'react';
import './FloatingManual.css';

const FloatingManual = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  if (isClosed) return null;

  return (
    <div className={`manual-container ${isOpen ? 'open' : ''}`}>
      {!isOpen && (
        <div className="manual-tab" onClick={() => setIsOpen(true)}>
          คู่มือ
        </div>
      )}

      {isOpen && (
        <div className="manual-panel">
          {/* ✅ ปุ่มปิด (X) อยู่ภายใน panel */}
          <button className="close-button" onClick={() => setIsClosed(true)}>
            ✕
          </button>

          <button className="toggle-button" onClick={() => setIsOpen(false)}>
            ซ่อน
          </button>
          <h3>คู่มือการใช้งาน</h3>
          <p>
            1.ผู้ใช้สามารถชมโมเดล 3D ควบคู่กับภาพและเสียงประกอบด้านล่าง
            <br />
            2.โดยคลิกที่{' '}
            <strong style={{ color: 'green' }}>ปุ่มสีเขียว</strong> เพื่อเล่นเสียงบรรยาย และกดที่{' '}
            <strong style={{ color: 'red' }}>ปุ่มสีแดง</strong> เพื่อหยุดเสียง
          </p>
          <div className="buttons-row">
            <button className="green-button">ปุ่มสีเขียว</button>
            <button className="red-button">ปุ่มสีแดง</button>
            
          </div>
          <br/>3.ผู้ใช้งานสามารถเข้าถึงพลังงานต่างๆได้ที่ <strong style={{ color: 'green' }}>แถบเมนูด้านบน</strong>
        </div>
      )}
    </div>
  );
};

export default FloatingManual;
