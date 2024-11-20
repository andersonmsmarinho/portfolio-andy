document.addEventListener("DOMContentLoaded", () => {

    function generateSecretCode() {
        const digits = Array.from({ length: 10 }, (_, i) => i);
        const secret = [];
        while (secret.length < 4) {
            const randomIndex = Math.floor(Math.random() * digits.length);
            const digit = digits.splice(randomIndex, 1)[0];
            secret.push(digit);
        }
        return secret.join('');
    }

    let secretCode = generateSecretCode();
    let attempts = 0;
    const previousGuesses = [];

    function calculateBullsAndCows(guess, secret) {
        let bulls = 0;
        let cows = 0;

        const guessArray = guess.split('');
        const secretArray = secret.split('');

        guessArray.forEach((digit, index) => {
            if (digit === secretArray[index]) {
                bulls++;
            }
        });

        guessArray.forEach((digit) => {
            if (secretArray.includes(digit) && guessArray.indexOf(digit) !== secretArray.indexOf(digit)) {
                cows++;
            }
        });

        return { bulls, cows };
    }

    function updateGuessList(guess, bulls, cows) {
        const previousGuessesList = document.getElementById("previous-guesses");
        const newGuessItem = document.createElement("li");

        newGuessItem.innerHTML = `Tentativa: ${guess} - Bulls: ${bulls}, Cows: ${cows}`;
        previousGuessesList.insertBefore(newGuessItem, previousGuessesList.firstChild);
    }

    function restartGame() {
        secretCode = generateSecretCode();
        attempts = 0;
        document.getElementById('feedback').innerHTML = '';
        document.getElementById('result').innerHTML = '';
        document.getElementById('guess').value = '';
        document.getElementById('restart').style.display = 'none';
        document.getElementById('submit-guess').disabled = false;
        document.getElementById('previous-guesses').innerHTML = '';
    }

    document.getElementById('submit-guess').addEventListener('click', () => {
        const guessInput = document.getElementById('guess');
        const feedback = document.getElementById('feedback');
        const result = document.getElementById('result');

        const guess = guessInput.value;

        if (!/^\d{4}$/.test(guess) || new Set(guess).size !== 4) {
            feedback.innerHTML = 'Por favor, insira um número de 4 dígitos únicos.';
            return;
        }

        attempts++;

        const { bulls, cows } = calculateBullsAndCows(guess, secretCode);

        feedback.innerHTML = `Palpite: ${guess} - Bulls: ${bulls}, Cows: ${cows}`;

        updateGuessList(guess, bulls, cows);

        if (bulls === 4) {
            result.innerHTML = `Parabéns! Você adivinhou a senha "${secretCode}" em ${attempts} tentativas.`;
            document.getElementById('submit-guess').disabled = true;
            document.getElementById('restart').style.display = 'inline';
        }
    });

    document.getElementById('restart').addEventListener('click', restartGame);

    document.getElementById('show-secret').addEventListener('click', () => {
        alert(`A senha secreta é: ${secretCode}`);
    });
});