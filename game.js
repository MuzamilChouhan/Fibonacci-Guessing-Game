class FibonacciGame {
    constructor() {
        this.sequence = this.generateFibonacci(20);
        this.score = 0;
        this.rounds = 5;
        this.currentRound = 0;
        this.setupEventListeners();
    }

    generateFibonacci(n) {
        let fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i-1] + fib[i-2];
        }
        return fib;
    }

    setupEventListeners() {
        document.getElementById('start-btn').addEventListener('click', () => this.startGame());
        document.getElementById('yes-btn').addEventListener('click', () => this.checkAnswer(true));
        document.getElementById('no-btn').addEventListener('click', () => this.checkAnswer(false));
        
        // Initially hide game buttons
        document.getElementById('yes-btn').style.display = 'none';
        document.getElementById('no-btn').style.display = 'none';
    }

    startGame() {
        this.score = 0;
        this.currentRound = 0;
        document.getElementById('score').textContent = this.score;
        document.getElementById('start-btn').style.display = 'none';
        document.getElementById('yes-btn').style.display = 'inline-block';
        document.getElementById('no-btn').style.display = 'inline-block';
        document.getElementById('message').textContent = '';
        this.nextRound();
    }

    nextRound() {
        if (this.currentRound >= this.rounds) {
            this.endGame();
            return;
        }

        this.currentRound++;
        const showFibNumber = Math.random() < 0.5;
        
        if (showFibNumber) {
            this.currentNumber = this.sequence[Math.floor(Math.random() * this.sequence.length)];
        } else {
            this.currentNumber = Math.floor(Math.random() * Math.max(...this.sequence));
        }

        document.getElementById('current-number').textContent = this.currentNumber;
    }

    checkAnswer(isYes) {
        const isFibNumber = this.sequence.includes(this.currentNumber);
        const correct = (isYes && isFibNumber) || (!isYes && !isFibNumber);

        if (correct) {
            this.score++;
            document.getElementById('score').textContent = this.score;
            document.getElementById('message').textContent = 'Correct!';
            document.getElementById('message').style.color = '#4CAF50';
        } else {
            document.getElementById('message').textContent = 'Wrong!';
            document.getElementById('message').style.color = '#f44336';
        }

        setTimeout(() => this.nextRound(), 1000);
    }

    endGame() {
        document.getElementById('current-number').textContent = '?';
        document.getElementById('message').textContent = `Game Over! Final Score: ${this.score}/${this.rounds}`;
        document.getElementById('message').style.color = '#764ba2';
        document.getElementById('yes-btn').style.display = 'none';
        document.getElementById('no-btn').style.display = 'none';
        document.getElementById('start-btn').style.display = 'block';
        document.getElementById('start-btn').textContent = 'Play Again';
    }
}

// Initialize game when page loads
window.addEventListener('load', () => {
    new FibonacciGame();
});
