import React from "react"
import { Link } from "react-router-dom"

export function Homepage(){
    return <div className="blackboard">
        <div className="blackboard-text-container">
            <h1 className="homepage-title">Hangman!</h1>
            <h4 className="homepage-text">
                You can play the game with the onscreen keyboard or your physical input.<br/>
                Press the enter key to refresh the page (this restarts the game with a new random word)
            </h4>
            <h4 className="homepage-text">
                Select your difficulty:
            </h4>
        </div>
        <div className="choose-difficulty">
            <Link to="/easy">
                <button className="difficulty-btn" id="easy-btn">Easy</button>
            </Link >
            <Link to="/hard">
                <button className="difficulty-btn" id="hard-btn">Hard</button>
            </Link>
            
        </div>
        
        
    </div>
}