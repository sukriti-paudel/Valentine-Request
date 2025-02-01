import React, { useState } from 'react';
import image from './request.jpg';
import Tada from './Tada';

const Request = ({ handleYesClick }) => {
  const [yesButtons, setYesButtons] = useState([]);

  // Function to get random positions for "Yes" buttons
  const getRandomPosition = () => {
    const container = document.querySelector('.req-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const randomX = Math.floor(Math.random() * (containerWidth - 100));
    const randomY = Math.floor(Math.random() * (containerHeight - 50));

    return { top: randomY, left: randomX };
  };

  // Handle clicking "No" to generate random "Yes" buttons
  const handleNoClick = () => {
    const newButtonPosition = getRandomPosition();
    setYesButtons((prevButtons) => [...prevButtons, newButtonPosition]);
  };

  // Handle clicking any "Yes" button (including dynamically added ones)
  const handleDynamicYesClick = (event) => {
    // Trigger handleYesClick only for dynamically generated "Yes" buttons
    if (event.target.classList.contains('yess')) {
      handleYesClick();
    }
  };

  return (
    <div className="req-container" onClick={handleDynamicYesClick}>
      <img src={image} alt="request" className="img-request" />
      <h1 style={{ position: 'absolute', top: '50%', color: 'white', fontStyle: 'italic' }}>
        Will you be my valentine??
      </h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          fontSize: '2vh',
          top: '60%',
          left: '32%',
          gap: '10px',
          zIndex: 10,
        }}
      >
        <button className="yess" onClick={handleYesClick} style={{ zIndex: 100 }}>
          Yes
        </button>
        <button className="noo" onClick={handleNoClick} style={{ zIndex: 90 }}>
          No
        </button>
      </div>

      {/* Render dynamic Yes buttons at random locations */}
      {yesButtons.map((position, index) => (
        <button
          key={index}
          className="yess"
          style={{
            position: 'absolute',
            top: position.top,
            fontSize: '2vh',
            left: position.left,
            zIndex: 100,
          }}
        >
          Please!
        </button>
      ))}
    </div>
  );
};

export default Request;
