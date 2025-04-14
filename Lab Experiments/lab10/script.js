// ----- Variables -----
let tiles = [];
let emptyIndex = 8;
let timer = 0;
let interval;

// ----- Create Puzzle -----
function createPuzzle() {
  const container = document.getElementById('puzzle-container');
  container.innerHTML = '';
  tiles = [...Array(8).keys()].map(x => x + 1);
  tiles.push('');
  tiles.sort(() => Math.random() - 0.5);
  emptyIndex = tiles.indexOf('');

  tiles.forEach((value, i) => {
    const tile = document.createElement('div');
    tile.className = 'tile';
    if (value === '') tile.classList.add('empty');
    tile.innerText = value;
    tile.onclick = () => moveTile(i);
    container.appendChild(tile);
  });
}

// ----- Move Tile -----
function moveTile(index) {
  const validMoves = [index - 1, index + 1, index - 3, index + 3];
  if (validMoves.includes(emptyIndex)) {
    [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
    emptyIndex = index;
    createPuzzle();
    checkWin();
  }
}

// ----- Check Win -----
function checkWin() {
  if (tiles.join('') === '12345678') {
    clearInterval(interval);
    window.alert('Congratulations! You solved the puzzle in ' + timer + ' seconds!');
  }
}

// ----- Start Game -----
function startGame() {
  createPuzzle();
  timer = 0;
  document.getElementById('timer').innerText = `Time: 0s`;

  clearInterval(interval);
  interval = setInterval(() => {
    timer++;
    document.getElementById('timer').innerText = `Time: ${timer}s`;
  }, 1000);

  // Show browser info
  document.getElementById('browserInfo').innerText = `Browser: ${navigator.userAgent}`;
}

// ----- Reset Game -----
function resetGame() {
  clearInterval(interval);
  timer = 0;
  document.getElementById('timer').innerText = `Time: 0s`;
  setTimeout(() => {
    window.alert('Game has been reset!');
    startGame();
  }, 300);
}
