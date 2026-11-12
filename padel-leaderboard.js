const addMatchBtn = document.getElementById("add-match");
const matchDate = document.getElementById("match-date");
const matchTime = document.getElementById("match-time");
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");

addMatchBtn.addEventListener("click", generateMatchCard);

function generateMatchCard(timestamp, p1, p2, matchNum) {
  const matchCard = document.getElementById("match-card");
  matchCard.style.display = "block";
  const addSetBtn = document.createElement("button");
  addSetBtn.innerHTML = "Add Set"; 
  matchCard.appendChild(addSetBtn);
  addSetBtn.addEventListener("click", function () {
    const matchSets = document.createElement("div");
    matchSets.setAttribute("class", "match-sets");
    const player1Set = document.createElement("input");
    player1Set.setAttribute("type", "number");
    const player2Set = document.createElement("input");
    player2Set.setAttribute("type", "number");
    matchCard.appendChild(matchSets);
    matchSets.appendChild(player1Set);
    matchSets.appendChild(player2Set);
  });
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

  // generateMatchCard(match.date, match.p1, match.p2, matches.length + 1);

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

    //  generateMatchCard(match.date, match.p1, match.p2, i + 1);
  }
}

onLoad();
