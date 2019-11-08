import React from 'react';

export default function Display(props) {

    return (
        <div className="display">

            <div className="team-one">
                <h2>Home Team</h2>
                <p>Strikes: {strikes}</p>
                <p>Balls: {balls}</p>
                <p>Outs: {outs}</p>
                <p>Total Pitches: {totalPitches}</p>
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