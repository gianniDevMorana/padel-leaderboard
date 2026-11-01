const addMatchBtn = document.getElementById("add-match");
const matchDate = document.getElementById("match-date");
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
const score1 = document.getElementById("score-1");
const score2 = document.getElementById("score-2");

addMatchBtn.addEventListener("click", createMatch);

function createMatch() {
  const matchInfo = document.getElementById("match-info");
  const date = document.createElement("p");
  date.innerText = matchDate.value;
  const matchNumber = document.createElement("h3");
  matchNumber.innerText = "Match 1";
  const players = document.createElement("div");
  players.setAttribute("class", "match-players");
  const player1Match = document.createElement("p");
  player1Match.innerText = player1.value;
  const player2Match = document.createElement("p");
  player2Match.innerText = player2.value;
  const score = document.createElement("div");
  score.setAttribute("class", "match-score");
  const score1Match = document.createElement("p");
  score1Match.innerText = score1.value;
  const score2Match = document.createElement("p");
  score2Match.innerText = score2.value;
  matchInfo.appendChild(date);
  matchInfo.appendChild(matchNumber);
  matchInfo.appendChild(players);
  players.appendChild(player1Match);
  players.appendChild(player2Match);
  matchInfo.appendChild(score);
  score.appendChild(score1Match);
  score.appendChild(score2Match);

  localStorage.setItem("Player 1", JSON.stringify(player1.value));
  localStorage.setItem("Player 2", JSON.stringify(player2.value));

  if (player1LocalStorage && player2LocalStorage) {
  player1Match.innerText = player1LocalStorage;
  player2Match.innerText = player2LocalStorage;
}

  return matchNumber;
}

let player1LocalStorage = JSON.parse(localStorage.getItem("Player 1"));
let player2LocalStorage = JSON.parse(localStorage.getItem("Player 2"));

