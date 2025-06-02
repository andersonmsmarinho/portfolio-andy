'use client';

import React, { useState, useEffect, useCallback } from 'react';
import styles from './password-game.module.css';

interface Guess {
  number: string;
  bulls: number;
  cows: number;
}

export default function PasswordGame() {
  const [secretNumber, setSecretNumber] = useState<string>('');
  const [guess, setGuess] = useState<string>('');
  const [previousGuesses, setPreviousGuesses] = useState<Guess[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [showSecret, setShowSecret] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [attemptsLeft, setAttemptsLeft] = useState<number>(10);

  // Gera um número secreto de 4 dígitos diferentes
  const generateSecretNumber = () => {
    const digits = '0123456789'.split('');
    let result = '';
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      result += digits[randomIndex];
      digits.splice(randomIndex, 1);
    }
    return result;
  };

  const startNewGame = useCallback(() => {
    setSecretNumber(generateSecretNumber());
    setPreviousGuesses([]);
    setGameOver(false);
    setShowSecret(false);
    setMessage('');
    setGuess('');
    setAttemptsLeft(10);
  }, []);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  // Verifica se o palpite é válido
  const isValidGuess = (input: string): boolean => {
    if (input.length !== 4) return false;
    if (!/^\d+$/.test(input)) return false;
    const uniqueDigits = new Set(input.split(''));
    return uniqueDigits.size === 4;
  };

  // Calcula bulls e cows
  const calculateBullsAndCows = (guess: string): { bulls: number; cows: number } => {
    let bulls = 0;
    let cows = 0;
    const secretArray = secretNumber.split('');
    const guessArray = guess.split('');

    // Calcula bulls (dígitos na posição correta)
    for (let i = 0; i < 4; i++) {
      if (guessArray[i] === secretArray[i]) {
        bulls++;
        secretArray[i] = 'X'; // Marca como já usado
        guessArray[i] = 'Y'; // Marca como já usado
      }
    }

    // Calcula cows (dígitos corretos na posição errada)
    for (let i = 0; i < 4; i++) {
      if (guessArray[i] !== 'Y') {
        const index = secretArray.indexOf(guessArray[i]);
        if (index !== -1) {
          cows++;
          secretArray[index] = 'X'; // Marca como já usado
        }
      }
    }

    return { bulls, cows };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidGuess(guess)) {
      setMessage('Por favor, digite um número válido de 4 dígitos diferentes.');
      return;
    }

    const { bulls, cows } = calculateBullsAndCows(guess);
    const newGuess: Guess = { number: guess, bulls, cows };
    
    setPreviousGuesses([...previousGuesses, newGuess]);
    setGuess('');
    setAttemptsLeft(prev => prev - 1);

    if (bulls === 4) {
      setGameOver(true);
      setMessage('Parabéns! Você acertou o número secreto!');
    } else if (attemptsLeft <= 1) {
      setGameOver(true);
      setMessage(`Fim de jogo! O número secreto era ${secretNumber}.`);
    } else {
      setMessage(`Tentativas restantes: ${attemptsLeft - 1}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 4 && /^\d*$/.test(value)) {
      setGuess(value);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Jogo da Senha</h1>
      
      <section className={styles.gameContainer}>
        <div className={styles.instructions}>
          <p>
            Tente adivinhar a senha secreta! A senha é um número de 4 dígitos, todos diferentes.
            Para cada palpite, você receberá:
          </p>
          <ul>
            <li><strong>Bulls:</strong> Dígitos na posição correta.</li>
            <li><strong>Cows:</strong> Dígitos corretos, mas na posição errada.</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className={styles.inputForm}>
          <div className={styles.inputContainer}>
            <label htmlFor="guess">Digite seu palpite:</label>
            <input
              type="text"
              id="guess"
              value={guess}
              onChange={handleInputChange}
              maxLength={4}
              pattern="\d{4}"
              required
              disabled={gameOver}
              placeholder="Digite 4 dígitos diferentes"
            />
            <button type="submit" disabled={gameOver}>
              Enviar
            </button>
          </div>
        </form>

        {message && <p className={styles.message}>{message}</p>}

        <div className={styles.gameControls}>
          <button
            onClick={() => setShowSecret(!showSecret)}
            className={styles.showSecretButton}
          >
            {showSecret ? 'Ocultar Senha' : 'Mostrar Senha Secreta'}
          </button>
          {(gameOver || attemptsLeft === 0) && (
            <button onClick={startNewGame} className={styles.restartButton}>
              Novo Jogo
            </button>
          )}
        </div>

        {showSecret && (
          <div className={styles.secretNumber}>
            Número Secreto: {secretNumber}
          </div>
        )}

        <div className={styles.attemptsCounter}>
          Tentativas restantes: {attemptsLeft}
        </div>

        <div className={styles.guessesHistory}>
          <h3>Tentativas Anteriores</h3>
          {previousGuesses.length > 0 ? (
            <ul className={styles.guessesList}>
              {previousGuesses.map((guess, index) => (
                <li key={index} className={styles.guessItem}>
                  <span className={styles.guessNumber}>{guess.number}</span>
                  <span className={styles.guessResult}>
                    Bulls: {guess.bulls} | Cows: {guess.cows}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.noGuesses}>Nenhuma tentativa ainda.</p>
          )}
        </div>
      </section>
    </div>
  );
} 