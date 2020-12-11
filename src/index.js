import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import TournamentTeam from './TournamentTeam';
import TournamentItem from './TournamentItem';
import organizerlogo from './DeepRacer_Chrome_Hero.png';
import awslogo from './DeepRacer_Chrome_Hero.png';

const dateqf = "3 February 2021 10:00-17:00";
const datesff = "4 February 2021 10:00-12:00";


ReactDOM.render(
  <React.StrictMode>
  <img src={organizerlogo} className="Organizer-logo" alt="logo" width="200"/>
  <img src={awslogo} className="AWS-logo" alt="logo" width="100"/>

    <App />
<div className="container">
  <h1>Company X DeepRacer Tournament powered by AWS </h1>
  <h2>Virtual DeepRacer League 25 January 4 February 2021</h2>

  <div className="tournament-bracket tournament-bracket--rounded">                                                     
    <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
      <h3 className="tournament-bracket__round-title">Quarterfinals</h3>
      <ul className="tournament-bracket__list">

        <TournamentItem tournamentDate={dateqf} teamhome="Team 1" teamhomescore="00.00.00" teamaway="Team 2" teamawayscore="00.00.00"/>

        <TournamentItem tournamentDate={dateqf} teamhome="Team 3" teamhomescore="00.00.00" teamaway="Team 4" teamawayscore="00.00.00"/>

        <TournamentItem tournamentDate={dateqf} teamhome="Team 5" teamhomescore="00.00.00" teamaway="Team 6" teamawayscore="00.00.00"/>

        <TournamentItem tournamentDate={dateqf} teamhome="Transformers" teamhomescore="00.00.00" teamaway="Decepticons" teamawayscore="00.00.00"/>

 
      </ul>
    </div>
    <div className="tournament-bracket__round tournament-bracket__round--semifinals">
      <h3 className="tournament-bracket__round-title">Semifinals</h3>
      <ul className="tournament-bracket__list">

        <TournamentItem tournamentDate={datesff} teamhome="Team 09" teamhomescore="00.00.00" teamaway="Team 10" teamawayscore="00.00.00"/>

        <TournamentItem tournamentDate={datesff} teamhome="Team 11" teamhomescore="00.00.00" teamaway="Team 12" teamawayscore="00.00.00"/>



      </ul>
    </div>
    <div className="tournament-bracket__round tournament-bracket__round--bronze">
      <h3 className="tournament-bracket__round-title">Bronze medal game</h3>
      <ul className="tournament-bracket__list">

        <TournamentItem tournamentDate={datesff} teamhome="Team 13" teamhomescore="00.00.00" teamaway="Team 14" teamawayscore="00.00.00"/>

      </ul>
    </div>
    <div className="tournament-bracket__round tournament-bracket__round--gold">
      <h3 className="tournament-bracket__round-title">Gold medal game</h3>
      <ul className="tournament-bracket__list">

        <TournamentItem tournamentDate={datesff} teamhome="Team 15" teamhomescore="00.00.00" teamaway="Team 16" teamawayscore="00.00.00"/>

      </ul>
    </div>
  </div>
</div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
