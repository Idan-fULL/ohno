import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from './Layout'; // Layout עוטף את התוכן
import '../styles/UnitSelection.css';

const UnitSelection = () => {
  const { language } = useParams();
  const navigate = useNavigate();

  const units = Array.from({ length: 10 }, (_, i) => `Unit ${i + 1}`);

  return (
    <Layout>
      <div className="unit-selection">
        <h1 className="title">
          {language === 'hebrew' ? 'בחר יחידת לימוד' : 'Choose Your Unit'}
        </h1>
        <div className="units-container">
          {units.map((unit, index) => (
            <button
              key={index}
              className="unit-button"
              onClick={() => navigate(`/unit1`)}
            >
              {language === 'hebrew' ? `יחידה ${index + 1}` : unit}
            </button>
          ))}
        </div>
        <button className="back-button" onClick={() => navigate('/language-selection')}>
          Back to Languages
        </button>
      </div>
    </Layout>
  );
};

export default UnitSelection;
