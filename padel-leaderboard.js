const addMatchBtn = document.getElementById("add-match-btn");
const matchDate = document.getElementById("match-date");
const matchTime = document.getElementById("match-time");
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
const saveMatchBtn = document.getElementById("save-match-btn");
const createSetBtn = document.getElementById("create-set-btn");

addMatchBtn.addEventListener("click", generateMatchCard);
saveMatchBtn.addEventListener("click", saveMatchCard);
createSetBtn.addEventListener("click", createSets);

function generateMatchCard() {
  const matchCard = document.getElementById("match-card");
  matchCard.style.display = "flex";
  addMatchBtn.style.display = "none";
}

function createSets() {
  const matchSets = document.getElementById("match-sets");
  const gamesSets = document.createElement("div");
  gamesSets.setAttribute("class", "games-sets");

  const player1Set = document.createElement("select");
  player1Set.setAttribute("class", "p1-set-select");
  for (let i = 0; i < 8; i++) {
    const i1Option = document.createElement("option");
    i1Option.setAttribute("value", i);
    i1Option.innerText = `${i}`;
    player1Set.appendChild(i1Option);
    console.log(i1Option);
  }

  const player2Set = document.createElement("select");
  player2Set.setAttribute("class", "p2-set-select");
  for (let i = 0; i < 8; i++) {
    const i2Option = document.createElement("option");
    i2Option.setAttribute("value", i);
    i2Option.innerText = `${i}`;
    player2Set.appendChild(i2Option);
    console.log(i2Option);
  }

  matchSets.appendChild(gamesSets);
  gamesSets.appendChild(player1Set);
  gamesSets.appendChild(player2Set);
}

function saveMatchCard() {
  const matchCard = document.getElementById("match-card");
  matchCard.style.display = "none";
  addMatchBtn.style.display = "inline";

  const dateTime = matchDate.value + " " + matchTime.value;

  const p1Sets = document.getElementsByClassName("p1-set-select");
  const p1Games = [];
  for (let i = 0; i < p1Sets.length; i++) {
    p1Games.push(Number(p1Sets[i].value));
  }

  const p2Sets = document.getElementsByClassName("p2-set-select");
  const p2Games = [];
  for (let i = 0; i < p2Sets.length; i++) {
    p2Games.push(Number(p2Sets[i].value));
  }

  const dateMatch = new Date(dateTime);

  const match = {
    date: dateMatch.getTime(),
    p1: player1.value,
    p2: player2.value,
    p1Sets: p1Games,
    p2Sets: p2Games,
  };

  console.log(match);

  if (localStorage.getItem("matches") === null) {
    localStorage.setItem("matches", JSON.stringify([]));
  }

  const matches = JSON.parse(localStorage.getItem("matches"));

  matches.push(match);
  console.log(matches);

  localStorage.setItem("matches", JSON.stringify(matches));

  renderMatchCard(match.date, match.p1, match.p2, match.p1Sets, match.p2Sets);
}

function renderMatchCard(
  timestamp,
  player1,
  player2,
  player1Sets,
  player2Sets,
) {
  const matchHistory = document.getElementById("match-history");
  const matchSaved = document.createElement("div");
  matchSaved.setAttribute("id", "match-saved");
  const matchTimestamp = document.createElement("p");
  matchTimestamp.innerText = new Date(timestamp);
  const playersSaved = document.createElement("div");
  playersSaved.setAttribute("class", "players-saved");
  const player1Saved = document.createElement("p");
  player1Saved.innerText = player1;
  const player2Saved = document.createElement("p");
  player2Saved.innerText = player2;
  const playerSetsContainer = document.createElement("div");
  for (let i = 0; i < player1Sets.length; i++) {
    const player1SetsSaved = document.createElement("p");
    player1SetsSaved.innerText = player1Sets[i];
    playerSetsContainer.appendChild(player1SetsSaved);
  }

  for (let i = 0; i < player2Sets.length; i++) {
    const player2SetsSaved = document.createElement("p");
    player2SetsSaved.innerText = player2Sets[i];
    playerSetsContainer.appendChild(player2SetsSaved);
  }

  matchHistory.appendChild(matchSaved);
  matchSaved.appendChild(matchTimestamp);
  matchSaved.appendChild(playersSaved);
  playersSaved.appendChild(player1Saved);
  playersSaved.appendChild(player2Saved);
  matchSaved.appendChild(playerSetsContainer);
}

function onLoad() {
  const matches = JSON.parse(localStorage.getItem("matches"));
  console.log(matches);

  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    console.log(match.p1);
    console.log(match.p2);
    console.log(match.p1Sets);
    console.log(match.p2Sets);
    console.log(i + 1);
  }
}

onLoad();
