let random_num = 0;
function getBubble() {
  let all_box = "";
  for (let i = 0; i < 220; i++) {
    let random_num = Math.floor(Math.random() * 10);
    all_box += `
        <div class="circle">${random_num}</div>
  `;
  }
  document.querySelector(".down_box").innerHTML = all_box;
}

let times = 60;
function getTimer() {
  let getInt = setInterval(() => {
    if (times > 0) {
      times--;
      document.querySelector(".timer").textContent = times;
    } else {
      clearInterval(getInt);
      document.querySelector(".down_box").innerHTML = `<h1>Game Over..</h1>
      <h2>Built By "Md Muntasir Bhai"</h2>`;
    }
  }, 1000);
}

function getHit() {
  random_num = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = random_num;
}

let score = 0;
function getScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

document.querySelector(".down_box").addEventListener("click", (value) => {
  let box_val = Number(value.target.textContent);
  if (box_val === random_num) {
    getScore();
    getBubble();
    getHit();
  }
});
getBubble();
getTimer();
getHit();
