import React from 'react';
import { motion } from 'framer-motion';  // Import motion from framer-motion
import image from './tada.jpg'; // Import your image

const Tada = () => {
  return (
    <motion.div
      className="req-container"
      style={{ backgroundColor: '#e49c9c', height: '60vh' }}
      initial={{ opacity: 0, x: '-100%' }} // Start off-screen and invisible
      animate={{ opacity: 1, x: 0 }} // Slide in from the left and fade in
      exit={{ opacity: 0, x: '100%' }} // Exit the screen to the right (optional)
      transition={{ type: 'spring', stiffness: 100, damping: 25 }} // Smooth transition
    >
      <img src={image} alt="request" className="img-request" />
      <h1 style={{ position: 'absolute', top: '73%', color: '#F7F9F9',fontStyle: 'italic' }}>Yayyy!</h1>
      <h1 style={{ position: 'absolute', top: '80%', color: '#F7F9F9', fontStyle: 'italic' }}>See you on Feb 14.😍</h1>
    </motion.div>
  );
};

export default Tada;
