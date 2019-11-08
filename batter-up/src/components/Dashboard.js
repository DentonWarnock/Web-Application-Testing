import React, { useState } from 'react';
import Display from './Display';

export default function Dashboard() {
    const [homeTeam, setHomeTeam] = useState({
        stikes: 0,
        balls: 0,
        fouls: 0,
        pitches: 0,
        atBat: true
    })
    const [awayTeam, setAwayTeam] = useState({
        stikes: 0,
        balls: 0,
        fouls: 0,
        pitches: 0,
        atBat: false
    })
    const [inning, setInning] = useState(1)

    return (
        <div className="dashboard">
            <div className="home-dash">
                <button onClick={handleStrike}>Strike</button>
                <button onClick={handleBall}>Ball</button>
                <button onClick={handleFoul}>Foul</button>
                <button onClick={handleHit}>Hit</button>
            </div>
            <div className="away-dash">
                <button onClick={handleStrike}>Strike</button>
                <button onClick={handleBall}>Ball</button>
                <button onClick={handleFoul}>Foul</button>
                <button onClick={handleHit}>Hit</button>
            </div>    
            <Dashboard />       
        </div>
    )
}