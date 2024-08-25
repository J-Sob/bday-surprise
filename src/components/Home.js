import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/puzzle');
  };

  return (
    <div className="home-container">
      <h1>Wszystkiego najlepszego!</h1>
      <p>Sprawa jest prosta:</p>
      <ul>
        <li>Chcesz prezent? Wygraj w gre.</li>
        <li>Chcesz wygrać gre? Ułóż obrazek.</li>
        <li>Chcesz ułożyć obrazek? Klikaj w płytki.</li>
        <li>To w sumie tyle, jak wygrasz to pogadamy o prezencie. Powodzenia!</li>
      </ul>
      <button className="start-button" onClick={startGame}>Startuj</button>
    </div>
  );
};

export default Home;
