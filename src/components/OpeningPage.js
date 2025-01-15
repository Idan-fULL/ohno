import React from 'react';
import '../styles/OpeningPage.css';

const OpeningPage = ({ onStart }) => {
  return (
    <div className="opening-page">
      <div className="content">
        <h1 className="app-title">WordElevate</h1>
        <p className="app-subtitle">
          הפלטפורמה ללימוד מילים באנגלית ובעברית.
          <br />
          שפר את הידע שלך עם הכלים המתקדמים ביותר!
        </p>
        <button className="start-button" onClick={onStart}>
          🚀 התחל ללמוד עכשיו
        </button>
      </div>
    </div>
  );
};

export default OpeningPage;
