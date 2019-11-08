import React, { useState } from 'react';
import Display from './Display';

export default function Dashboard() {
    const [homeTeam, setHomeTeam] = useState({
        strikes: 0,
        balls: 0,
        fouls: 0,
        outs: 0,
        pitches: 0,
        atBat: true
    })
    const [awayTeam, setAwayTeam] = useState({
        stikes: 0,
        balls: 0,
        fouls: 0,
        outs: 0,
        pitches: 0,
        atBat: false
    })
    const [inning, setInning] = useState(1)

    const handleStrike = () => {
        if (homeTeam.atBat && homeTeam.strikes < 3) {
            setHomeTeam({
                ...homeTeam,
                strikes: homeTeam.strikes + 1,
                pitches: homeTeam.pitches + 1
            })
        } else if (homeTeam.atBat) {
            setHomeTeam({
                ...homeTeam,
                strikes: 0,
                outs: homeTeam.outs + 1,
                pitches: homeTeam.pitches + 1
            })
        }
    }

    const handleBall = () => {
        if (homeTeam.atBat && homeTeam.balls < 4) {
            setHomeTeam.balls(homeTeam.balls + 1);
        } else if (homeTeam.atBat) {
            setHomeTeam.balls(0);
            setHomeTeam.strikes(0);
        } else if (awayTeam.atBat && awayTeam.balls < 4) {
            setAwayTeam.balls(awayTeam.balls + 1)
        } else {
            setAwayTeam.balls(0);
            setAwayTeam.strikes(0);
        }
    }

    const handleFoul = () => {
        if (homeTeam.atBat && homeTeam.stikes < 2) {
            setHomeTeam.strikes(homeTeam.strikes + 1);
        } else if (awayTeam.atBat && awayTeam.stikes < 2) {
            setAwayTeam.strikes(awayTeam.strikes + 1);
        }
    }

    const handleHit = () => {
        if (homeTeam.atBat) {
            setHomeTeam.strikes(0);
            setHomeTeam.balls(0);
        } else {
            setAwayTeam.strikes(0);
            setAwayTeam.balls(0);
        }
    }

    return (
        <div className="dashboard">
            <div className="home-dash">
                <h2>Home Team Actions</h2>
                <button onClick={handleStrike}>Strike</button>
                <button onClick={handleBall}>Ball</button>
                <button onClick={handleFoul}>Foul</button>
                <button onClick={handleHit}>Hit</button>
            </div>
            <div className="away-dash">
                <h2>Away Team Actions</h2>
                <button onClick={handleStrike}>Strike</button>
                <button onClick={handleBall}>Ball</button>
                <button onClick={handleFoul}>Foul</button>
                <button onClick={handleHit}>Hit</button>
            </div>    
            <Display homeTeam={homeTeam} awayTeam={awayTeam} />       
        </div>
    )
}