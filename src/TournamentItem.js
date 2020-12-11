import React from 'react';
import TournamentTeam from './TournamentTeam';

const TournamentItem = props => {
    console.log(props)
    
    return (
        <li className="tournament-bracket__item">
          <div className="tournament-bracket__match" tabIndex="0">
            <table className="tournament-bracket__table">
              <caption className="tournament-bracket__caption">
                <time dateTime={props.tournamentDate}>{props.tournamentDate}</time>
              </caption>
              <thead className="sr-only">
                <tr>
                  <th>Team</th>
                  <th>Best time</th>
                </tr>
              </thead>  
              <tbody className="tournament-bracket__content">

                <TournamentTeam team={props.teamhome} score={props.teamhomescore}/>

                <TournamentTeam team={props.teamaway} score={props.teamawayscore}/>
              </tbody>
            </table>
          </div>
        </li>
    );
};


export default TournamentItem;

