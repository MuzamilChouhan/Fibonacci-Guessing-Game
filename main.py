# fabonachi sequence
def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    fib_sequence = [0, 1]
    for i in range(2, n):
        next_value = fib_sequence[i - 1] + fib_sequence[i - 2]
        fib_sequence.append(next_value)
    
    return fib_sequence

def play_fibonacci_game():
    sequence = fibonacci(20)  # Generate first 20 Fibonacci numbers
    score = 0
    rounds = 5

    print("Welcome to the Fibonacci Number Guessing Game!")
    print("I'll give you a number, and you guess if it's in the Fibonacci sequence.")
    
    import random
    for round in range(rounds):
        # Sometimes show a Fibonacci number, sometimes a random number
        if random.choice([True, False]):
            number = random.choice(sequence)
        else:
            number = random.randint(0, max(sequence))
        
        print(f"\nRound {round + 1}: Is {number} a Fibonacci number? (yes/no)")
        answer = input().lower()
        
        is_fibonacci = number in sequence
        if (answer == 'yes' and is_fibonacci) or (answer == 'no' and not is_fibonacci):
            print("Correct!")
            score += 1
        else:
            print("Wrong!")
    
    print(f"\nGame Over! Your score: {score}/{rounds}")

if __name__ == "__main__":
    play_fibonacci_game()

