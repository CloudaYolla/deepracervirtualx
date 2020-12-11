import React from 'react';
import organizerlogo from './DeepRacer_Chrome_Hero.png';

const TournamentTeam = props => {
    console.log(props)
    
    return (
        <tr className="tournament-bracket__team">
          <td className="tournament-bracket__country">
            <abbr className="tournament-bracket__code" title={props.team}>{props.team}</abbr> 
            <span className="tournament-bracket__flag flag-icon" aria-label="Flag">
            <img src={organizerlogo} className="Organizer-logo" alt="logo" width="28px"/>
            </span>

          </td>
          <td className="tournament-bracket__score">
            <span className="tournament-bracket__number">{props.score}</span>
          </td>
        </tr>
    );
};


export default TournamentTeam;

