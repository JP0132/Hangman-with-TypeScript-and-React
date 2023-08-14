import "../main.css";

const SMALL_BAR = (
    <div className="small-bar"></div>
)

const TOP_BAR = (
    <div className="top-bar" ></div>
)

const POLE = (
    <div className="pole"></div>
)

const STAND = (
    <div className="stand"></div>
)

const HEAD = (
    <div className="head"></div>
)

const BODY = (
    <div className="man-body"></div>
)

const RIGHT_ARM = (
    <div className="right-arm"></div>
)

const LEFT_ARM = (
    <div className="left-arm"></div>
)

const RIGHT_LEG = (
    <div className="right-leg"></div>
)

const LEFT_LEG = (
    <div className="left-leg"></div>
)

const HANGMAN_PARTS = [SMALL_BAR, TOP_BAR, POLE, STAND, HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
type HangmanDrawingProps = {
    numberOfGuesses: number
    gameMode: string
    isWinner: boolean
    isLoser: boolean
}


export function HangmanDrawing({numberOfGuesses, gameMode, isWinner, isLoser}:HangmanDrawingProps) {
 
    return <div className="hangman-canvas">
         <div className="hangman-container">
            {gameMode == "easy" ? HANGMAN_PARTS.slice(0, numberOfGuesses) : ""}
            {gameMode == "hard" ? BODY_PARTS.slice(0, numberOfGuesses) : ""}
            {gameMode === "hard" ? <><div className="small-bar"></div><div className="top-bar"></div><div className="pole"></div><div className="stand"></div></> : ""}
        </div>
        {isWinner && <div className="endgame-container" style={{color:"rgba(28, 146, 28, 0.7)"}}>Winner! - Press enter to refresh and try again!</div>}
        {isLoser && <div className="endgame-container" style={{color:"rgba(190, 27, 27, 0.7)"}}>You Lose! - Press enter to refresh and try again!</div>}
    </div>
   
    
}