import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import '../css/WinDialog.css';

const WinDialog = ({ isOpen }) => {
  const [showVideo, setShowVideo] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <h2>Gratulacje!</h2>
        <p>Teraz mozesz otworzyć swój prezent!</p>
        {!showVideo && (
          <button className="dialog-button" onClick={() => setShowVideo(true)}>
            Otwórz prezent
          </button>
        )}
        {showVideo && (<ReactPlayer url='./skolim.mp4' />)}
      </div>
    </div>
  );
};

export default WinDialog;
