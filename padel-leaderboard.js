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
  }

  const player2Set = document.createElement("select");
  player2Set.setAttribute("class", "p2-set-select");
  for (let i = 0; i < 8; i++) {
    const i2Option = document.createElement("option");
    i2Option.setAttribute("value", i);
    i2Option.innerText = `${i}`;
    player2Set.appendChild(i2Option);
  }

  matchSets.appendChild(gamesSets);
  gamesSets.appendChild(player1Set);
  gamesSets.appendChild(player2Set);
}

function saveMatchCard() {
  const matchCard = document.getElementById("match-card");

  const dateTime = matchDate.value + " " + matchTime.value;
  const dateMatch = new Date(dateTime);

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

  if (
    !matchDate.value ||
    !matchTime.value ||
    !player1.value ||
    !player2.value ||
    player1.value === player2.value
  ) {
    return;
  }

  if (p1Games.length === 0 || p2Games.length === 0) {
    return;
  }

  for (let i = 0; i < p1Games.length; i++) {
    let isValidSet = false;
    let isValidTiebreak = false;

    if (
      (p1Games[i] === 6 && p2Games[i] < 6) ||
      (p1Games[i] < 6 && p2Games[i] === 6)
    ) {
      isValidSet = true;
    }

    if (
      (p1Games[i] === 7 && p2Games[i] === 6) ||
      (p1Games[i] === 6 && p2Games[i] === 7)
    ) {
      isValidTiebreak = true;
    }

    if (!isValidSet && !isValidTiebreak) return;
  }

  matchCard.style.display = "none";
  addMatchBtn.style.display = "inline";

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

  sortMatchesCards(matches);

  matchDate.value = "";
  matchTime.value = "";
  player1.value = "";
  player2.value = "";

  const matchSets = document.getElementById("match-sets");
  matchSets.innerHTML = "";
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
  matchSaved.setAttribute("class", "match-saved");
  const matchTimestamp = document.createElement("p");
  matchTimestamp.innerText = new Date(timestamp);
  const playersSaved = document.createElement("div");
  playersSaved.setAttribute("class", "players-saved");
  const player1Saved = document.createElement("p");
  player1Saved.innerText = player1;
  const player2Saved = document.createElement("p");
  player2Saved.innerText = player2;
  const playerSetsContainer = document.createElement("div");
  playerSetsContainer.setAttribute("class", "sets-saved");
  const player1SetsContainer = document.createElement("div");
  player1SetsContainer.setAttribute("class", "set-p1-saved");
  for (let i = 0; i < player1Sets.length; i++) {
    const player1SetsSaved = document.createElement("p");
    player1SetsSaved.innerText = player1Sets[i];
    player1SetsContainer.appendChild(player1SetsSaved);
  }

  const player2SetsContainer = document.createElement("div");
  player2SetsContainer.setAttribute("class", "set-p2-saved");
  for (let i = 0; i < player2Sets.length; i++) {
    const player2SetsSaved = document.createElement("p");
    player2SetsSaved.innerText = player2Sets[i];
    player2SetsContainer.appendChild(player2SetsSaved);
  }

  matchHistory.appendChild(matchSaved);
  matchSaved.appendChild(matchTimestamp);
  matchSaved.appendChild(playersSaved);
  playersSaved.appendChild(player1Saved);
  playersSaved.appendChild(player2Saved);
  matchSaved.appendChild(playerSetsContainer);
  playerSetsContainer.appendChild(player1SetsContainer);
  playerSetsContainer.appendChild(player2SetsContainer);
}

function compareDates(a, b) {
  return b.date - a.date;
}

function sortMatchesCards(savedMatches) {
  savedMatches.sort(compareDates);

  const matchHistory = document.getElementById("match-history");
  matchHistory.innerHTML = "";

  const dateSelect = document.getElementById("date-select");
  dateSelect.innerHTML = "";

  for (let i = 0; i < savedMatches.length; i++) {
    const match = savedMatches[i];
    console.log(match.p1);
    console.log(match.p2);
    console.log(match.p1Sets);
    console.log(match.p2Sets);
    console.log(i + 1);

    const dayKey = dateFormatting(match.date);

    renderMatchCard(match.date, match.p1, match.p2, match.p1Sets, match.p2Sets);
  }
}

function dateFormatting(timestamp) {
  const matchDateSaved = new Date(timestamp);
  const matchDay = matchDateSaved.getDate();
  const matchMonth = matchDateSaved.getMonth() + 1;
  const matchYear = matchDateSaved.getFullYear();

  const dateMatchFormat =
    matchYear +
    "-" +
    String(matchMonth).padStart(2, "0") +
    "-" +
    String(matchDay).padStart(2, "0");
  return dateMatchFormat;
}

function onLoad() {
  if (localStorage.getItem("matches") === null) {
    localStorage.setItem("matches", JSON.stringify([]));
  }

  const matches = JSON.parse(localStorage.getItem("matches"));

  sortMatchesCards(matches);
}

onLoad();
