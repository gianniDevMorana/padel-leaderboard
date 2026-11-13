const addMatchBtn = document.getElementById("add-match-btn");
const matchDate = document.getElementById("match-date");
const matchTime = document.getElementById("match-time");
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");

addMatchBtn.addEventListener("click", generateMatchCard);

function generateMatchCard(timestamp, p1, p2, matchNum) {
  const matchCard = document.getElementById("match-card");
  matchCard.style.display = "block";
  const createSetBtn = document.getElementById("create-set-btn");
  createSetBtn.addEventListener("click", function () {
    const matchSets = document.getElementById("match-sets");
    const gamesSets = document.createElement("div");
    gamesSets.setAttribute("id", "games-sets");
    const player1Set = document.createElement("select");
    const player1SetOption1 = document.createElement("option");
    player1SetOption1.setAttribute("value", "0");
    player1SetOption1.innerText = "0";
    const player1SetOption2 = document.createElement("option");
    player1SetOption2.innerText = "1";
    player1SetOption2.setAttribute("value", "1");
    const player1SetOption3 = document.createElement("option");
    player1SetOption3.setAttribute("value", "2");
    const player1SetOption4 = document.createElement("option");
    player1SetOption4.setAttribute("value", "3");
    const player1SetOption5 = document.createElement("option");
    player1SetOption5.setAttribute("value", "4");
    const player1SetOption6 = document.createElement("option");
    player1SetOption6.setAttribute("value", "5");
    const player1SetOption7 = document.createElement("option");
    player1SetOption7.setAttribute("value", "6");
    const player1SetOption8 = document.createElement("option");
    player1SetOption8.setAttribute("value", "7");
    // player1Set.setAttribute("type", "number");
    const player2Set = document.createElement("select");
    const player2SetOption1 = document.createElement("option");
    player2SetOption1.setAttribute("value", "0");
    const player2SetOption2 = document.createElement("option");
    player2SetOption2.setAttribute("value", "1");
    const player2SetOption3 = document.createElement("option");
    player2SetOption3.setAttribute("value", "2");
    const player2SetOption4 = document.createElement("option");
    player2SetOption4.setAttribute("value", "3");
    const player2SetOption5 = document.createElement("option");
    player2SetOption5.setAttribute("value", "4");
    const player2SetOption6 = document.createElement("option");
    player2SetOption6.setAttribute("value", "5");
    const player2SetOption7 = document.createElement("option");
    player2SetOption7.setAttribute("value", "6");
    const player2SetOption8 = document.createElement("option");
    player2SetOption8.setAttribute("value", "7");
    // player2Set.setAttribute("type", "number");
    const addSetBtn = document.createElement("button");
    addSetBtn.innerText = "Add Set";
    matchSets.appendChild(gamesSets);
    gamesSets.appendChild(player1Set);
    player1Set.appendChild(player1SetOption1);
    player1Set.appendChild(player1SetOption2);
    player1Set.appendChild(player1SetOption3);
    player1Set.appendChild(player1SetOption4);
    player1Set.appendChild(player1SetOption5);
    player1Set.appendChild(player1SetOption6);
    player1Set.appendChild(player1SetOption7);
    player1Set.appendChild(player1SetOption8);
    gamesSets.appendChild(player2Set);
    player1Set.appendChild(player2SetOption1);
    player1Set.appendChild(player2SetOption2);
    player1Set.appendChild(player1SetOption3);
    player1Set.appendChild(player1SetOption4);
    player1Set.appendChild(player1SetOption5);
    player1Set.appendChild(player1SetOption6);
    player1Set.appendChild(player1SetOption7);
    player1Set.appendChild(player1SetOption8);
    gamesSets.appendChild(addSetBtn);
    addSetBtn.addEventListener("click", function() {
      
    })
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
