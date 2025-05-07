console.log("hello world");

function main() {
  const audioCtx = new AudioContext();
  const oscillator = audioCtx.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.value = 300;
  oscillator.connect(audioCtx.destination);
  oscillator.start();

  setTimeout(function () {
    oscillator.stop();
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  // main(); // 这里必须要先点一下按钮，不然会报错：The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page.
  document.getElementById("miku").addEventListener("click", main);
});
