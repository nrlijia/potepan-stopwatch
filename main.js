
const display = document.getElementById("display");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

// 経過時間を保存する変数（ミリ秒）
let elapsedTime = 0;

// タイマーを管理する変数
let timerId = null;

function updateDisplay() {
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = Math.floor((elapsedTime % 1000) / 100);

  display.textContent =
    `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

// スタートボタン
startBtn.addEventListener("click", function() {
  // すでにタイマーが動いていたら何もしない
  if (timerId !== null) {
    return;
  }

 
timerId = setInterval(function() {
  elapsedTime = elapsedTime + 100;
  updateDisplay();
}, 100);


  // ボタンの状態を変更する
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;

});

// ストップボタン
stopBtn.addEventListener("click", function() {
  clearInterval(timerId);
  timerId = null;

  // ボタンの状態を元に戻す
  startBtn.disabled = false;
  stopBtn.disabled = true;
});


 // リセットボタン
resetBtn.addEventListener("click", function() {
  clearInterval(timerId);
  timerId = null;

  elapsedTime = 0;
  updateDisplay();

  // ボタンの状態を変更する
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
});
