let snake = [
  { x: 10, y: 10 },
  { x: 11, y: 10 },
];
//game loop which updates every frame
function main() {
  update();
  draw();
  food();
  setTimeout(() => {
    window.requestAnimationFrame(main);
  }, 100);
}
window.requestAnimationFrame(main);
let error = null;
function update() {
  let temp = JSON.parse(JSON.stringify(snake));

  //loop to render snake body & to follow the path
  for (i = 1; i < snake.length; i++) {
    snake[i] = JSON.parse(JSON.stringify(temp[i - 1]));
  }

  let direction = keys();
  if (direction == null) {
    direction = { x: -1, y: 0 };
  }
  snake[0].x = snake[0].x + direction.x;
  snake[0].y = snake[0].y + direction.y;

  error = gameOver();
  if (error) {
    console.log(...snake);
    alert("Game Over");
    window.location.reload();
  }
}
let navigate = null;
let prevKey = "UP";
window.addEventListener("keydown", (e) => {
  switch (true) {
    case e.key == "ArrowUp" && prevKey != "Up" && prevKey != "Down":
      prevKey = "Up";
      navigate = { x: -1, y: 0 };

      break;
    case e.key == "ArrowDown" && prevKey != "Up" && prevKey != "Down":
      prevKey = "Down";
      navigate = { x: 1, y: 0 };

      break;
    case e.key == "ArrowLeft" && prevKey != "Left" && prevKey != "Right":
      prevKey = "Left";
      navigate = { x: 0, y: -1 };

      break;
    case e.key == "ArrowRight" && prevKey != "Left" && prevKey != "Right":
      prevKey = "Right";
      navigate = { x: 0, y: 1 };

      break;
  }
});

function keys() {
  return navigate;
}
function draw() {
  let board = document.getElementById("board");
  board.innerHTML = "";
  snake.forEach((segment) => {
    let div = document.createElement("div");
    div.classList.add("snake");
    div.style.gridRowStart = segment.x;
    div.style.gridColumnStart = segment.y;
    board.appendChild(div);
  });
}

initPos = { x: 13, y: 19 };
function food() {
  drawFood(initPos);
  if (snakeOnFood(initPos)) {
    initPos = generatePos();
    drawFood(initPos);

    let temp = JSON.parse(JSON.stringify(snake[snake.length - 1]));
    snake.push(temp);
  }
}
function drawFood(i) {
  let board = document.getElementById("board");
  let div = document.createElement("div");
  div.style.gridRowStart = i.x;
  div.style.gridColumnStart = i.y;
  let elems = document.querySelector("food");
  if (elems != null) elems.parentElement.removeChild(elems);
  div.classList.add("food");
  board.appendChild(div);
}

function snakeOnFood(i) {
  var a = "";
  snake.some((seg) => {
    if (seg.x == i.x && seg.y == i.y) {
      a = "yes";
    }
  });
  if (a == "yes") return true;
  return false;
}
function generatePos() {
  a = {};
  let x = Math.floor(Math.random() * 19) + 1;
  let y = Math.floor(Math.random() * 19) + 1;
  a.x = x;
  a.y = y;
  while (snakeOnFood(a)) {
    x = Math.floor(Math.random() * 19) + 1;
    y = Math.floor(Math.random() * 19) + 1;
    a.x = x;
    a.y = y;
  }
  return a;
}

function gameOver() {
  let headx = snake[0].x;
  let heady = snake[0].y;
  if (headx < 1 || headx > 20 || heady < 1 || heady > 20) {
    return true;
  }

  for (let i = 1; i < snake.length; i++) {
    if (
      (snake[i].x == headx && snake[i].y == heady) ||
      headx < 1 ||
      headx > 20 ||
      heady < 1 ||
      heady > 20
    ) {
      return true;
    }
  }
}
