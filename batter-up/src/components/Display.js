import React from 'react';

export default function Display(props) {

    return (
        <div className="display">

            <div className="team-one">
                <h2>Home Team</h2>
                <p>Strikes: {props.homeTeam.strikes}</p>
                <p>Balls: {props.homeTeam.balls}</p>
                <p>Outs: {props.homeTeam.outs}</p>
                <p>Total Pitches: {props.homeTeam.pitches}</p>
            </div>
            <div className="team-two">
                <h2>Away Team</h2>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    )
}