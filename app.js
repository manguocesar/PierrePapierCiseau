//to avoid global variable, all the JS is in arrow function

const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //Play Match

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice
        console.log(this);
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./photos/${this.textContent}.jfif`;
          computerHand.src = `./photos/${computerChoice}.jfif`;
        }, 2000);
        //Animation haut bas
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    resultat();
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie";
      return;
    }
    //check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "You won!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer won!";
        cScore++;
        updateScore();
        return;
      }
    }

    //check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer won!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You won!";
        pScore++;
        updateScore();
        return;
      }
    }

    //check for rock
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer won!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You Won!";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  const resultat = () => {
    const affichage = document.querySelector(".afficheToi");

    if (pScore === 2) {
      affichage.textContent = "L'adresse est ...";
    } else if (cScore === 2) {
      affichage.textContent = "Raté, pas de soirée cette année";
    }
    return;
  };

  // call all the inner function

  startGame();
  playMatch();
};

//starter

game();
