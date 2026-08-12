// Numbers
const btnRef = document.querySelector(".btn");
const textRef = document.querySelector(".text");
let count = 0;
let intervalId = null;

btnRef.addEventListener("click", (уме) => {
  count = 0;
  textRef.textContent = count;

  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    count += 1;
    textRef.textContent = count;

    if (count === 5) {
      clearInterval(intervalId); 
    }
  }, 1000);
});

// Animate
const rangeRef = document.querySelector(".range");
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
let i = 0;
setInterval(() => {
  rangeRef.style.background = colors[i];
  i++;
  if (i >= colors.length) {
    i = 0;
  }
}, 1000);

// Game
const boxRef = document.querySelector(".game-box");
const scoreRef = document.getElementById("score");
const timeRef = document.getElementById("time");
const startBtn = document.getElementById("startBtn");

const savedScore = localStorage.getItem("lastScore");

let score = 0;
let timeLeft = 10; 
let intervalIder = null;

if (savedScore !== 0) {
  scoreRef.textContent = savedScore;
}

boxRef.addEventListener("click", (evt) => {
  if (timeLeft > 0) {
    score++;
    scoreRef.textContent = score;
  }
});
startBtn.addEventListener("click", (evt) => {
    score = 0;
    timeLeft = 10;
    scoreRef.textContent = score;
    timeRef.textContent = timeLeft;

    if (intervalIder) {
        clearInterval(intervalIder);
    }

   intervalIder = setInterval(() => {
     timeLeft--;
     timeRef.textContent = timeLeft;

     if (timeLeft <= 0) {
        location.reload();
        clearInterval(intervalId);
        localStorage.setItem("lastScore", score);
        alert("Гра закінчена! Твої очки: " + score);
     }
   }, 1000); 
});

// Time
const inputRef = document.querySelector(".input");

inputRef.addEventListener("blur", (evt) => {
  setTimeout(
    () => {
      alert("Повідомлення");
    },
    Number(evt.target.value) * 1000,
  );
});
