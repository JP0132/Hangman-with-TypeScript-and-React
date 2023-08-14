
type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

export function HangmanWord({reveal=false, guessedLetters, wordToGuess} : HangmanWordProps) {
    return <div className="word-container">
        {wordToGuess.split("").map((letter, index) => (
            <span className="hangman-dash" key={index}>
                <span
                    style={{
                        visibility: guessedLetters.includes(letter) || reveal
                        ? "visible"
                        : "hidden",
                        color: !guessedLetters.includes(letter) && reveal ? "red" : "black"
                    }}
                >
                     {letter}
                </span>  
            </span>
        ))}


    </div>
    
}