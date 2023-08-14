import { useEffect } from "react"

export function useKeyboard(addGuessedLetter : (letter: string) => void, guessedLetters: string[], setGuessedLetters : () => void){
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key

            if(key === "Enter"){
                setGuessedLetters()
                window.location.reload();
                return;
            }

            if (!key.match(/^[a-z]$/)) {
                return
            }

            e.preventDefault()
            addGuessedLetter(key)
            
        }
    
        document.addEventListener("keypress", handler);

        return () => {
          document.removeEventListener("keypress", handler);
        };
    }, [guessedLetters])
}