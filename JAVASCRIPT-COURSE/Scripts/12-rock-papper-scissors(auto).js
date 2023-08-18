let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
  
  updateScoreElement();
  
  /*
  if (!score) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }
  */
  
  let isAutoPlaying = false;
  let intervalID; // Leave it undefined 

// Arrow-function version 
// const autoPlay = () => {
  


// };
  
  
  function autoPlay() {
    const autoPlayButton = document.querySelector('.auto-play-button');
    
    if (!isAutoPlaying) {
      // intervalID = setInterval(function() {
      //   const playerMove = pickComputerMove();
      //   playGame(playerMove);
      // }, 1000);
      intervalID = setInterval(() => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
      }, 1000);
      isAutoPlaying = true;
      console.log(`intervalID is ${intervalID}`)
      //Change the button
      autoPlayButton.innerHTML = 'Stop';
      autoPlayButton.classList.add('is-playing');
    } else {
      clearInterval(intervalID);
      isAutoPlaying = false;
      //Change the button
      autoPlayButton.innerHTML = 'Auto Play';
      autoPlayButton.classList.remove('is-playing');
    }
  }



  function playGame(playerMove) {
    const computerMove = pickComputerMove();
  
    let result = '';
  
    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }
  
    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }
  
    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }
  
    localStorage.setItem('score', JSON.stringify(score));
  
    updateScoreElement();
  
    document.querySelector('.js-result').innerHTML = result;
  
    document.querySelector('.js-moves').innerHTML = `You
    <img src="Image/${playerMove}-emoji.png" class="move-icon">
    <img src="Image/${computerMove}-emoji.png" class="move-icon">
    Computer`;
  }
  // JAVASCRIPT-COURSE/Image/paper-emoji.png
  function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }
  

  document.querySelector('.js-rock-button').addEventListener('click', () => playGame('rock'));
  document.querySelector('.js-paper-button').addEventListener('click', () => playGame('paper'));
  document.querySelector('.js-scissors-button').addEventListener('click', () => playGame('scissors'));
// Control with keystroke
  document.addEventListener('keydown', (event) => {
  console.log(event)
  console.log(event.key);
  if (event.key === 'z') {
    playGame('rock');
  } else if (event.key === 'x') {
    playGame('paper');
  } else if (event.key === 'c') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'r') {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScoreElement();
      clearInterval(intervalID);
      isAutoPlaying = false;
      //Change the button
      const autoPlayButton = document.querySelector('.auto-play-button');
      autoPlayButton.innerHTML = 'Auto Play';
      autoPlayButton.classList.remove('is-playing');
  }
});


  function pickComputerMove() {
    const randomNumber = Math.random();
  
    let computerMove = '';
  
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }
  
    return computerMove;
  }