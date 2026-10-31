const addMatchBtn = document.getElementById("add-match");
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");

addMatchBtn.addEventListener("click", createMatch);

function createMatch() {
  const matchInfo = document.getElementById("match-info");
  let matchNumber = document.createElement("h3");
  matchNumber.innerText = "Match 1";
  console.log(matchNumber);
  matchInfo.appendChild(matchNumber);
  return matchNumber;
}
