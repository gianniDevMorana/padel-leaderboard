const addMatchBtn = document.getElementById("add-match");

addMatchBtn.addEventListener("click", createMatch);

function createMatch() {
  const matchInfo = document.getElementById("match-info");
  matchInfo.innerHTML = `
    <h3>Match 1</h3>
    <div class="match-display">
      <div class="match-players">
        <input id="player-1" type="text" />
        <input id="player-2" type="text" />
      </div>
      <div class="match-score">
          <div class="match-set">
            <input type="number" />
            <input type="number" />
          </div>
          <div class="match-set">
            <input type="number" />
            <input type="number" />
          </div>
      </div>
    </div>
  `;
  
}
