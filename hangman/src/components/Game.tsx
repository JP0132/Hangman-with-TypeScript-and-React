import { useCallback, useEffect, useState } from "react"
import words from "../wordList.json"
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import "../main.css";
import { useKeyboard } from "../useKeyboard";
import Confetti from "./Conffetti";
import { Link } from "react-router-dom";

type GameProps = {
    gameMode: string
}

function Game({gameMode} : GameProps) {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(words.length * Math.random())]
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  if(gameMode === "hard"){
    var isLoser = incorrectLetters.length >= 6;
  }

  else{
    var isLoser = incorrectLetters.length >= 10;
  }
  
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));
  
  const addGuessedLetter = useCallback((key: string) => {
    if(guessedLetters.includes(key) || isLoser || isWinner) return
    setGuessedLetters(currentLetters => [...currentLetters, key])
  }, [guessedLetters, isWinner, isLoser])

  const clearGuessedLetters = () => {
    setGuessedLetters([]);
  };

  useKeyboard(addGuessedLetter, guessedLetters, clearGuessedLetters);

  return <>
      {isWinner && <Confetti/>}
      <div className="game-container">
            <Link to="/">
                <button className="back" style={{background:"purple", position:"absolute", left:0, top:0}}>Back</button>
            </Link>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length} gameMode={gameMode} isWinner={isWinner} isLoser={isLoser}/>
            <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
            <div className="key-container">
              <Keyboard 
                disabled={isWinner || isLoser}
                activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
                inactiveLetters={incorrectLetters}
                addGuessedLetter={addGuessedLetter}
              />
            </div>
        </div>
  </>
 
}

export default Game

/* <div style={{fontSize:"2rem", textAlign: "center"}}>
{isWinner && "Winner! - Press enter to refresh and try again!"}
{isLoser && "You Lose! - Press enter to refresh and try again!"}
</div> */