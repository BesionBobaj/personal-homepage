const startButton = document.getElementById('startButton');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const finalMessage = document.getElementById('finalMessage');
const faces = document.querySelectorAll('.face');
let score = 0;
let time = 30;
let gameInterval;
let faceTimeouts = [];

function startGame() {
    score = 0;
    time = 30;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = time;
    finalMessage.textContent = '';
    
    startButton.disabled = true;
    
    gameInterval = setInterval(() => {
        time--;
        timerDisplay.textContent = time;
        
        if (time <= 0) {
            endGame();
        }
    }, 1000);
    
    randomPopUp();
}

function randomPopUp() {
    const randomFace = faces[Math.floor(Math.random() * faces.length)];
    randomFace.style.top = '0';
    
    const hideTimeout = setTimeout(() => {
        randomFace.style.top = '100%';
    }, 1000);
    
    randomFace.addEventListener('click', bumpFace);

    faceTimeouts.push(hideTimeout);
    faceTimeouts.push(randomFace);

    if (time > 0) {
        setTimeout(randomPopUp, 1000);
    }
}

function bumpFace(event) {
    score++;
    scoreDisplay.textContent = score;
    event.target.style.top = '100%';
}

function endGame() {
    clearInterval(gameInterval);
    faceTimeouts.forEach(timeout => clearTimeout(timeout));
    faces.forEach(face => face.removeEventListener('click', bumpFace));
    startButton.disabled = false;
    finalMessage.textContent = `Game Over! Final Score: ${score}`;
}

startButton.addEventListener('click', startGame);

function randomPopUp() {
  const randomFace = faces[Math.floor(Math.random() * faces.length)];
  randomFace.style.top = '0';  // Move the image up
  randomFace.style.transform = 'scale(1)';  // Pop the image in

  const hideTimeout = setTimeout(() => {
      randomFace.style.top = '100%';  // Move the image back down
      randomFace.style.transform = 'scale(0)';  // Pop the image out
  }, 1000);  // Face stays for 1 second

  randomFace.addEventListener('click', bumpFace);

  faceTimeouts.push(hideTimeout);
  faceTimeouts.push(randomFace);

  if (time > 0) {
      setTimeout(randomPopUp, 1000);  // Keep calling to pop random faces
  }
}

function bumpFace(event) {
  score++;
  scoreDisplay.textContent = score;
  event.target.style.top = '100%';  // Immediately move the image down
  event.target.style.transform = 'scale(0)';  // Pop the image out
}
holes.forEach (hole => {
    hole.addEventListener("click", () => {
        if (hole.classList.contains("active")) {
            hole.classList.remove("active");
            score++;
            scoreDisplay.textContent = 'Score: $(score)';

            const image = hole.querySelector("img");
            image.classList.add("clicked");
        setTimeout(() => {
            image.classList.remove("clicked");
        }, 300);
        }})
        }
      );
    

function getMessage() {
    if(score=== 0) {
        return"You blinked, didn't you?/I mbylle pak syte apo jo?"
    } else if (score < 10) {
        return "Nice effort! Keep practicing!/Pune e mire! praktikoje ende!"
    } else if (score<20) {
        return "You're getting good at this!/Jeni duke vazhdu mire!"
    }else {
        return "Wow, you're a FaceBompBes champion/Wow jeni kampion i FaceBompBes";
    }
}
