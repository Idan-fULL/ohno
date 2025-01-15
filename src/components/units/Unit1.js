import React, { useState } from 'react';
import unit1Words from '../../data/unit1Words'; // ייבוא המילים
import './Unit1.css'; // ייבוא עיצוב

const Unit1 = () => {
  const [knownWords, setKnownWords] = useState([]);

  const toggleKnown = (word) => {
    setKnownWords((prevKnownWords) =>
      prevKnownWords.includes(word)
        ? prevKnownWords.filter((w) => w !== word)
        : [...prevKnownWords, word]
    );
  };

  return (
    <div className="unit-page">
      <h1 className="unit-title">Unit 1 - English Vocabulary</h1>
      <table className="word-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Word</th>
            <th>Meaning</th>
            <th>Know?</th>
          </tr>
        </thead>
        <tbody>
          {unit1Words.map((wordObj, index) => (
            <tr key={index} className={knownWords.includes(wordObj.word) ? 'known' : ''}>
              <td>{index + 1}</td>
              <td>{wordObj.word}</td>
              <td>{wordObj.meaning}</td>
              <td>
                <button
                  className={`toggle-button ${
                    knownWords.includes(wordObj.word) ? 'known-button' : ''
                  }`}
                  onClick={() => toggleKnown(wordObj.word)}
                >
                  {knownWords.includes(wordObj.word) ? '✅' : '❌'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Unit1;
