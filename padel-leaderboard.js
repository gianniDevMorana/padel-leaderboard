const addMatchBtn = document.getElementById("add-match");
const matchDate = document.getElementById("match-date");
const matchTime = document.getElementById("match-time");
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
// const score1 = document.getElementById("score-1");
// const score2 = document.getElementById("score-2");

addMatchBtn.addEventListener("click", createMatch);

function generateMatchCard(timestamp, p1, p2, matchNum) {
  const matchInfo = document.getElementById("match-info");
  matchInfo.setAttribute("class", "match-display");
  const dateMatch = document.createElement("p");
  dateMatch.innerText = new Date(timestamp);
  const matchNumber = document.createElement("h3");
  matchNumber.innerText = `Match ${matchNum}`;
  const players = document.createElement("div");
  players.setAttribute("class", "match-players");
  const player1Match = document.createElement("p");
  player1Match.innerText = p1;
  const player2Match = document.createElement("p");
  player2Match.innerText = p2;
  // const score = document.createElement("div");
  // score.setAttribute("class", "match-score");
  // const score1Match = document.createElement("p");
  // score1Match.innerText = scoreP1;
  // const score2Match = document.createElement("p");
  // score2Match.innerText = scoreP2;
  matchInfo.appendChild(dateMatch);
  matchInfo.appendChild(matchNumber);
  matchInfo.appendChild(players);
  players.appendChild(player1Match);
  players.appendChild(player2Match);
  // matchInfo.appendChild(score);
  // score.appendChild(score1Match);
  // score.appendChild(score2Match);
}

function createMatch() {
  const dateTime = matchDate.value + " " + matchTime.value;

  console.log(dateTime);

  const dateMatch = new Date(dateTime);


  const match = {
    date: dateMatch.getTime(),
    p1: player1.value,
    p2: player2.value,
    // scoreP1: score1.value,
    // scoreP2: score2.value,
  };

  console.log(match);

  if (localStorage.getItem("matches") === null) {
    localStorage.setItem("matches", JSON.stringify([]));
  }

  const matches = JSON.parse(localStorage.getItem("matches"));

  generateMatchCard(match.date, match.p1, match.p2, matches.length + 1);

  matches.push(match);
  console.log(matches);

  localStorage.setItem("matches", JSON.stringify(matches));
}

function onLoad() {
  const matches = JSON.parse(localStorage.getItem("matches"));
  console.log(matches);

  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    console.log(match.p1);
    console.log(match.p2);
    console.log(match.scoreP1);
    console.log(match.scoreP2);
    console.log(i + 1);

     generateMatchCard(match.date, match.p1, match.p2, i + 1);
  }
}

onLoad();
