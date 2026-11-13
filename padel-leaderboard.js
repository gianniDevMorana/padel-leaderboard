const addMatchBtn = document.getElementById("add-match-btn");
const matchDate = document.getElementById("match-date");
const matchTime = document.getElementById("match-time");
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");

addMatchBtn.addEventListener("click", generateMatchCard);

function generateMatchCard() {
  const matchCard = document.getElementById("match-card");
  matchCard.style.display = "flex";
  const createSetBtn = document.getElementById("create-set-btn");
  createSetBtn.addEventListener("click", function () {
    const matchSets = document.getElementById("match-sets");
    const gamesSets = document.createElement("div");
    gamesSets.setAttribute("id", "games-sets");
    const player1Set = document.createElement("select");
    for (let i = 0; i < 8; i++) {
      const i1Option = document.createElement("option");
      i1Option.setAttribute("value", i);
      i1Option.innerText = `${i}`;
      player1Set.appendChild(i1Option);
      console.log(i1Option);
    }

    const player2Set = document.createElement("select");
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
