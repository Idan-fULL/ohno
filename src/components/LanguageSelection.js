import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import '../styles/LanguageSelection.css';

const LanguageSelection = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="language-selection">
        <h1 className="title">Choose Your Language</h1>
        <div className="buttons-container">
          <button
            className="language-button"
            onClick={() => navigate('/unit-selection/hebrew')}
          >
            עברית
          </button>
          <button
            className="language-button"
            onClick={() => navigate('/unit-selection/english')}
          >
            English
          </button>
        </div>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </Layout>
  );
};

export default LanguageSelection;
