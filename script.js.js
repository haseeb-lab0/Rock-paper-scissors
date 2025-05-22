alert("Rock, Scissors, Paper is a simple yet universally recognized hand game played between two people, often used to make quick decisions or settle disputes in a playful manner. Despite its straightforward rules—where rock crushes scissors, scissors cut paper, and paper covers rock—the game is rooted in strategy, psychology, and chance. Originating in ancient China and spreading across cultures over centuries, it has become more than just a children’s pastime. This paper explores the origins, rules, cultural significance, and underlying strategies of Rock, Scissors, Paper, demonstrating how this seemingly simple game reflects deeper aspects of human behavior and decision-making.")

let myscore = 0;
let computerscore = 0;

let mylist = ["rock", "scissors", "paper"]

for (let roundNum = 1; roundNum <= 3; roundNum++) {
    let userInput = prompt("Choose one of these three: rock, scissor, paper").toLowerCase()

    let randomValue = Math.random()
    randomValue *= 3;    
    randomValue = Math.round(randomValue)
    let computerChoice = mylist[randomValue]

    let wins = "You won this round!"
    let loeses = "You lost this round!"

    alert(`Computer chose: ${computerChoice}`)

    if (userInput === computerChoice) {
        alert("It's a tie!")
    } else if (userInput === "rock" && computerChoice === "scissors") {
        alert(`${wins}`)
        myscore++
    } else if (userInput === "rock" && computerChoice === "paper") {
        alert(`${loeses}`)
        computerscore++;
    } else if (userInput === "scissors" && computerChoice === "paper") {
        alert(`${wins}`)
        myscore++;
    } else if (userInput === "scissors" && computerChoice === "rock") {
        alert(`${loeses}`)
        computerscore++;
    } else if (userInput === "paper" && computerChoice === "rock") {
        alert(`${wins}`)
        myscore++;
    } else if (userInput === "paper" && computerChoice === "scissors") {
        alert(`${loeses}`)
        computerscore++
    } else {
        alert("Invalid input. Please enter rock, paper, or scissors.")
    }

    
    alert(`Your score: ${myscore} / Computer score: ${computerscore}`)
}


if (myscore > computerscore) {
    alert("🎉 Congratulations! You won the best of 3!")
} else if (myscore < computerscore) {
    alert("💻 Computer wins the best of 3! Better luck next time!")
} else {
    alert("It's a tie! Both scores are equal.")
}
