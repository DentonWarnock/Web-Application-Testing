import React, { useState, useEffect } from 'react';
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
        strikes: 0,
        balls: 0, 
        fouls: 0,
        outs: 0,
        pitches: 0,
        atBat: false
    })
    const [inning, setInning] = useState(1)

    // handle 3 outs for either team
    useEffect(() => {
        if (awayTeam.outs === 3) {
            setInning(inning + 1)
        }
        if (homeTeam.outs === 3 || awayTeam.outs === 3) {
            setHomeTeam({
                ...homeTeam,
                strikes: 0,
                balls: 0,
                outs: 0,
                atBat: !homeTeam.atBat
            })
            setAwayTeam({
                ...awayTeam,
                strikes: 0,
                balls: 0,
                outs: 0,
                atBat: !awayTeam.atBat
            })
        }        
    }, [homeTeam.outs, awayTeam.outs])

    const handleStrike = () => {
        if (homeTeam.atBat && homeTeam.strikes < 2) {
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
        } else if (awayTeam.atBat && awayTeam.strikes < 2) {
            setAwayTeam({
                ...awayTeam,
                strikes: awayTeam.strikes + 1,
                pitches: awayTeam.pitches + 1
            })
        } else {
            setAwayTeam({
                ...awayTeam,
                strikes: 0,
                outs: awayTeam.outs + 1,
                pitches: awayTeam.pitches + 1
            })
        }
    }

    const handleBall = () => {
        if (homeTeam.atBat && homeTeam.balls < 3) {
            setHomeTeam({
                ...homeTeam,
                balls: homeTeam.balls + 1,
                pitches: homeTeam.pitches + 1
            });
        } else if (homeTeam.atBat) {
            setHomeTeam({
                ...homeTeam,
                stikes: 0,
                balls: 0,
                pitches: homeTeam.pitches + 1
            });
        } else if (awayTeam.atBat && awayTeam.balls < 3) {
            setAwayTeam({
                ...awayTeam,
                balls: awayTeam.balls + 1,
                pitches: awayTeam.pitches + 1
            });
        } else {
            setAwayTeam({
                ...awayTeam,
                strikes: 0,
                balls: 0,
                pitches: awayTeam.pitches + 1
            });
        }
    }

    const handleFoul = () => {
        if (homeTeam.atBat && homeTeam.strikes < 2) {
            setHomeTeam({
                ...homeTeam,
                strikes: homeTeam.strikes + 1,
                pitches: homeTeam.pitches + 1
            })
        } else if (homeTeam.atBat && homeTeam.strikes === 2) {
            setHomeTeam({
                ...homeTeam,
                pitches: homeTeam.pitches + 1
            })
        }else if (awayTeam.atBat && awayTeam.strikes < 2) {
            setAwayTeam({
                ...awayTeam,
                strikes: awayTeam.strikes + 1,
                pitches: awayTeam.pitches + 1
            })
        } else {
            setAwayTeam({
                ...awayTeam,
                pitches: awayTeam.pitches + 1
            })
        }
    }

    const handleHit = () => {
        if (homeTeam.atBat) {
            setHomeTeam({
                ...homeTeam,
                strikes: 0,
                balls: 0,
                pitches: homeTeam.pitches + 1
            })            
        } else {
            setAwayTeam({
                ...awayTeam,
                strikes: 0,
                balls: 0,
                pitches: awayTeam.pitches + 1
            })  
        }
    }

    return (
        <div className="dashboard">
            <div className="at-bat">
                {homeTeam.atBat ? <h3>Home Team at bat</h3> : <h3>Away Team at bat</h3>}
            </div>
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
            <Display homeTeam={homeTeam} awayTeam={awayTeam} inning={inning} />       
        </div>
    )
}