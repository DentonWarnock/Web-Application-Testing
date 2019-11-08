import React from 'react';

export default function Display(props) {

    return (
        <div className="display">

            <div>
                <h3>Inning: {props.inning}</h3>
            </div>
            <div className="team-one">
                <h2>Home Team</h2>
                <p>Strikes: {props.homeTeam.strikes}</p>
                <p>Balls: {props.homeTeam.balls}</p>
                <p>Outs: {props.homeTeam.outs}</p>
                <p>Total Pitches: {props.homeTeam.pitches}</p>
            </div>
            <div className="team-two">
                <h2>Away Team</h2>
                <p>Strikes: {props.awayTeam.strikes}</p>
                <p>Balls: {props.awayTeam.balls}</p>
                <p>Outs: {props.awayTeam.outs}</p>
                <p>Total Pitches: {props.awayTeam.pitches}</p>
            </div>
        </div>
    )
}