import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import OpeningPage from './components/OpeningPage';
import LanguageSelection from './components/LanguageSelection';
import UnitSelection from './components/UnitSelection';
import Unit1 from './components/units/Unit1'; // ייבוא הרכיב החדש

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/language-selection" element={<LanguageSelection />} />
        <Route path="/unit-selection/:language" element={<UnitSelection />} />
        <Route path="/unit1" element={<Unit1 />} /> {/* נתיב חדש */}
      </Routes>
    </Router>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/language-selection');
  };

  return <OpeningPage onStart={handleStart} />;
};

export default App;
